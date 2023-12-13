import { List, ListItem } from "@mantine/core";
import React from "react";

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

export const renderTextWithLineBreaksList = (text: String) => {
  const lines = text.split("\n");
  return lines.map((line, index) => (
    <React.Fragment key={index}>
      <div style={{textAlign:"justify"}}>
        {index > 0 && <List.Item>{line}</List.Item>}
        {index == 0 && line}
      </div>
    </React.Fragment>
  ));
};
