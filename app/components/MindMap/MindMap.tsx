// Import the necessary modules
import React, { useEffect, useCallback } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  MiniMap,
  MarkerType,
} from "reactflow";
import "reactflow/dist/style.css";

import ImageNode from "./imageNode";
import RootNode from "./RootNode";
import { Center, rem } from "@mantine/core";
import { primaryColor } from "../../../public/colors";
import DetailNode from "./DetailNode";
import listNodes from "./ListPejabat";
import listEdges from "./ListEdges";

const nodeTypes = {
  imageNode: ImageNode,
  rootNode: RootNode,
  default: DetailNode,
};

const defaultViewport = { x: 0, y: 0, zoom: 0.2 };

const defaultNodes = [
  {
    id: listNodes.legislatif.id,
    type: "rootNode",
    data: {
      title: listNodes.legislatif.nama,
    },
    position: listNodes.legislatif.position,
  },
  {
    id: listNodes.front_group_ti.id,
    type: "rootNode",
    data: {
      title: listNodes.front_group_ti.nama,
    },
    position: listNodes.front_group_ti.position,
  },
  {
    id: listNodes.eksekutif.id,
    type: "rootNode",
    data: {
      title: listNodes.eksekutif.nama,
    },
    position: listNodes.eksekutif.position,
  },
  {
    id: listNodes.tobacco_industri.id,
    type: "rootNode",
    data: {
      title: listNodes.tobacco_industri.nama,
    },
    position: listNodes.tobacco_industri.position,
  },
];

const MindMap = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    for (const item of defaultNodes) {
      setNodes((oldVal) => [...oldVal, item]);
      console.log("nodes: ",nodes)
    }

    // Legislatif
    listNodes.legislatif.details.map((data) => {
      setNodes((oldVal) => [
        ...oldVal,
        {
          id: data.id,
          type: "rootNode",
          data: {
            size: "big",
            title: data.nama,
            description: data.description,
          },
          position: data.position,
        },
      ]);

      if (data.anggota.length !== 0) {
        data.anggota.map((data) => {
          setNodes((oldVal) => [
            ...oldVal,
            {
              id: data.id,
              type: "imageNode",
              data: {
                name: data.nama,
                label: data.jabatan,
                image: data.image,
                height: 80,
                width: 60,
              },
              position: data.position,
            },
          ]);
        });
      }
    });

    // eksekutif
    listNodes.eksekutif.details.map((data) => {
      setNodes((oldVal) => [
        ...oldVal,
        {
          id: data.id,
          type: "imageNode",
          data: {
            name: data.nama,
            label: data.jabatan,
            image: data.image,
            height: 80,
            width: 60,
          },
          position: data.position,
        },
      ]);
    })

    listEdges.map((data) => {
      setEdges((oldVal) => [
        ...oldVal,
        {
          id: data.id,
          source: data.source,
          target: data.target,
          type: data.type,
          style: { stroke: primaryColor },
          sourceHandle:data.sourceHandle,
          targetHandle:data.targetHandle,
          markerEnd: {
            type: MarkerType.ArrowClosed,
            color: primaryColor
          },
        },
      ]);
    });
  }, [setEdges, setNodes]);

  return (
    <Center w={"100vw"} h={"100vh"}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        snapToGrid={true}
        defaultViewport={defaultViewport}
        fitView
        attributionPosition="bottom-left"
      >
        <MiniMap zoomable pannable />
        <Controls />
      </ReactFlow>
    </Center>
  );
};

export default MindMap;
