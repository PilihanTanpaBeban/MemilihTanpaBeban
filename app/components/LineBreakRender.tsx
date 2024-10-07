import { List, ListItem, rem, ThemeIcon, Text } from "@mantine/core";
import React from "react";
import { primaryColor } from "../../public/colors";
import { IconCircle, IconCircleCheck, IconCircleDashed, IconCircleFilled } from "@tabler/icons-react";
import classes from "../components/styles/linebreak.module.css";
import sanitizeHtml from 'sanitize-html';


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
    allowedTags: ['b', 'i', 'em', 'strong', 'a', 'br'],
    allowedAttributes: {
      'a': ['href', 'style']
    }
  });
};

export const renderTextWithLineBreaksList = (text: String) => {
  const lines = text.split("\n");
  return (
    <List
      icon={<IconCircleFilled style={{ color: '#966fa2', borderRadius: '50%', width: rem(7), height: rem(7) }} />}
      classNames={{
        item: classes['mantine-List-item']
      }}
    >
      {
        lines.map((line, index) => (
          <React.Fragment key={index}>
            <Text dangerouslySetInnerHTML={{ __html: sanitizeHTML(line) }} />
          </React.Fragment>
        ))
      }
    </List>
  );
};
