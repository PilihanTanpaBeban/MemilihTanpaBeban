import { List, ListItem, rem, ThemeIcon, Text } from "@mantine/core";
import React from "react";
import { primaryColor } from "../../public/colors";
import {
  IconCircle,
  IconCircleCheck,
  IconCircleDashed,
  IconCircleFilled,
} from "@tabler/icons-react";
import classes from "../components/styles/linebreak.module.css";
import sanitizeHtml from "sanitize-html";

export const renderTextWithLineBreaks = (text: String) => {
  const lines = text.split("\n");
  return lines.map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
      <br />
    </React.Fragment>
  ));
};

export const renderTextWithLineBreaksNoSpaces = (text: String) => {
  const lines = text.split("\n");
  return lines.map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

const sanitizeHTML = (html: string) => {
  return sanitizeHtml(html, {
    allowedTags: [
      "b",
      "i",
      "em",
      "strong",
      "a",
      "br",
      "ul",
      "ol",
      "li",
      "p",
      "span",
    ],
    allowedAttributes: {
      a: ["href", "style"],
      p: ["class"], // allow indent class so we can transform it later
    },
  });
};

export const renderTextWithLineBreaksList = (text: String) => {
  const lines = text.split("\n");
  return (
    <List
      icon={
        <IconCircleFilled
          style={{
            color: "#966fa2",
            borderRadius: "50%",
            width: rem(7),
            height: rem(7),
          }}
        />
      }
      classNames={{
        item: classes["mantine-List-item"],
      }}
    >
      {lines.map((line, index) => (
        <React.Fragment key={index}>
          <Text dangerouslySetInnerHTML={{ __html: sanitizeHTML(line) }} />
        </React.Fragment>
      ))}
    </List>
  );
};

// enhance links by forcing target="_blank" and add list item classes
const addTargetBlank = (html: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  doc.querySelectorAll("a").forEach((a) => {
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener noreferrer"); // security best practice
  });

  // Convert ordered lists to unordered (bullet) for consistent UX
  doc.querySelectorAll("ol").forEach((ol) => {
    const ul = doc.createElement("ul");
    // copy attributes except 'type'
    for (const attr of Array.from(ol.attributes)) {
      if (attr.name !== "type") ul.setAttribute(attr.name, attr.value);
    }
    ul.innerHTML = ol.innerHTML;
    ol.replaceWith(ul);
  });

  // Flatten indented paragraphs: convert consecutive p.ql-indent-* into plain lines (no bullets)
  let current: ChildNode | null = doc.body.firstChild;
  while (current) {
    const isElement = current.nodeType === 1;
    const el = isElement ? (current as Element) : null;
    const isIndentedP = !!el && el.tagName.toLowerCase() === "p" &&
      (el.className.includes("ql-indent-"));

    if (isIndentedP) {
      // Create a bulletless list for this run of indented paragraphs
      const ul = doc.createElement("ul");
      ul.setAttribute("style", "list-style-type:none; margin:0;");
      ul.classList.add("mantine-List");
      ul.classList.add("ql-indent-list"); // mark as indent list to control spacing

      // Consume consecutive indented paragraphs
      while (current && current.nodeType === 1) {
        const pEl = current as Element;
        const isIndented = pEl.tagName.toLowerCase() === "p" && pEl.className.includes("ql-indent-");
        if (!isIndented) break;

        // Split content on <br> or newlines into multiple lines if present
        const partsByBr = pEl.innerHTML.split(/<br\s*\/?>/i).map((s) => s.trim()).filter(Boolean);
        const contentText = pEl.textContent || "";
        const partsByNewline = contentText.split(/\s*[\r\n]+\s*/).map((s) => s.trim()).filter(Boolean);

        const parts = partsByBr.length > 1 ? partsByBr : partsByNewline.length > 1 ? partsByNewline : [pEl.innerHTML];

        for (const part of parts) {
          const li = doc.createElement("li");
          li.classList.add("mantine-List-item");
          // Use innerHTML if we split by <br>, otherwise set textContent
          if (partsByBr.length > 1) {
            li.innerHTML = part;
          } else if (partsByNewline.length > 1) {
            li.textContent = part;
          } else {
            li.innerHTML = part;
          }
          ul.appendChild(li);
        }

        const next: ChildNode | null = current.nextSibling;
        pEl.parentNode?.removeChild(pEl);
        current = next;
      }

      // Insert the bulletless list where the first indented paragraph was
      doc.body.insertBefore(ul, current);
      continue; // continue without advancing; current already at the next sibling
    }

    current = current.nextSibling;
  }

  // Apply Mantine-like class to list containers and items for consistent styling
  doc.querySelectorAll("ul").forEach((ul) => {
    ul.classList.add("mantine-List");
  });
  doc.querySelectorAll("li").forEach((li) => {
    li.classList.add("mantine-List-item");
    // add spacing between items except for ql-indent lists
    const parent = li.parentElement;
    if (!parent || !parent.classList.contains("ql-indent-list")) {
      (li as HTMLElement).style.marginBottom = "1rem";
    } else {
      (li as HTMLElement).style.marginBottom = "0";
    }
  });

  return doc.body.innerHTML;
};

export const renderTextWithHtml = (text: string) => {
  const safeHtml = sanitizeHTML(text);
  const enhancedHtml = addTargetBlank(safeHtml);

  return <div dangerouslySetInnerHTML={{ __html: enhancedHtml }} />;
};
