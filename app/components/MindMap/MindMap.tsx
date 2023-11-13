// Import the necessary modules
import React, { useEffect, useCallback } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  MiniMap,
} from "reactflow";
import "reactflow/dist/style.css";

import ImageNode from "./imageNode";
import RootNode from "./RootNode";
import { Center, rem } from "@mantine/core";
import { primaryColor } from "../../../public/colors";
import DetailNode from "./DetailNode";
import {listPejabat} from "./DetailPejabat";

const nodeTypes = {
  imageNode: ImageNode,
  rootNode: RootNode,
  default: DetailNode,
};

const urlImage = "../../../public/images/photos"

const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

const MindMap = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    setNodes([
      {
        id: "1",
        type: "rootNode",
        data: {
          size: "big",
          title: "Legislatif",
        },
        position: { x: 0, y: 0 },
      },
      {
        id: "2",
        type: "rootNode",
        data: {
          size: "small",
          title: "Komisi IX",
          label: "(Kesehatan, Ketenagakerjaan, Kependudukan)",
        },
        position: { x: 285, y: 480 },
      },
      {
        id: "3",
        type: "imageNode",
        data: {
          image: {
            url: `${urlImage}/prodigi_3_1.png`,
            height: 50,
            width: 40,
          },
          label: listPejabat[0].legislatif[0].komisi,
        },
        position: { x: 400, y: 675 },
      },
    ]);

    setEdges([
      {
        id: "e1a-1",
        source: "1",
        target: "2",
        type: "straight",
        style: { stroke: primaryColor },
      },
      {
        id: "e2a-3",
        source: "2",
        target: "3",
        type: "straight",
        style: { stroke: primaryColor },
      },
    ]);
  }, [setEdges, setNodes]);

  const onConnect = useCallback(
    (params: any) =>
      setEdges((eds) =>
        addEdge({ ...params, animated: true, style: { stroke: "#fff" } }, eds)
      ),
    [setEdges]
  );

  return (
    <Center w={"100vw"} h={"100vh"}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        snapToGrid={true}
        defaultViewport={defaultViewport}
        fitView
        attributionPosition="bottom-left"
      >
        <MiniMap style={{ height: rem(120) }} zoomable pannable />
        <Controls />
      </ReactFlow>
    </Center>
  );
};

export default MindMap;
