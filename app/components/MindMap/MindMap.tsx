import React, { useEffect } from "react";

// Define your mind map data
const mindData = {
  meta: {
    name: "jsMind remote",
    author: "hizzgdev@163.com",
    version: "0.2",
  },
  format: "node_tree",
  data: {
    id: "root",
    topic: "jsMind",
    children: [
      {
        id: "easy",
        topic: "Easy",
        children: [
          { id: "easy1", topic: "Easy to show" },
          { id: "easy2", topic: "Easy to edit" },
          { id: "easy3", topic: "Easy to store" },
          { id: "easy4", topic: "Easy to embed" },
        ],
      },
      {
        id: "open",
        topic: "Open Source",
        children: [
          { id: "open1", topic: "on GitHub" },
          { id: "open2", topic: "BSD License" },
        ],
      },
      {
        id: "powerful",
        topic: "Powerful",
        children: [
          { id: "powerful1", topic: "Base on Javascript" },
          { id: "powerful2", topic: "Base on HTML5" },
          { id: "powerful3", topic: "Depends on you" },
        ],
      },
      {
        id: "other",
        topic: "test node",
        children: [
          { id: "other1", topic: "I'm from local variable" },
          { id: "other2", topic: "I can do everything" },
        ],
      },
    ],
  },
};

const MindMap = () => {
  useEffect(() => {
    // Load the JS-Mind script
    const script = document.createElement("script");
    script.src = "https://unpkg.com/jsmind@0.7.5/es6/jsmind.js"; // Link to the JS-Mind JavaScript file via CDN
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const options = {
        container: "jsmind_container",
        editable: true,
        theme: "orange",
      };
      const jm = new jsMind(options);

      // Use the show method to display the mind map
      jm.show(mindData);
    };
  }, []);

  return (
    <div>
      <div id="jsmind_container"></div>
    </div>
  );
};

export default MindMap;
