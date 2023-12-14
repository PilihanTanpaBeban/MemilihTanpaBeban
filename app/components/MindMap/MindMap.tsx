// Import the necessary modules
import React, { useEffect, useCallback } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  MiniMap,
  MarkerType,
  Background,
} from "reactflow";
import "reactflow/dist/style.css";

import ImageNode from "./imageNode";
import RootNode from "./RootNode";
import TitleNode from "./TitleNode";
import { Center, rem } from "@mantine/core";
import { bgOrange, primaryColor } from "../../../public/colors";
import DetailNode from "./DetailNode";
import listNodes from "./ListPejabat";
import listEdges from "./ListEdges";

import {
  SmartStepEdge,
  SmartStraightEdge,
} from "@tisoap/react-flow-smart-edge";
import EdgeNode from "./EdgeNode";

const nodeTypes = {
  imageNode: ImageNode,
  rootNode: RootNode,
  default: DetailNode,
  titleNode: TitleNode,
  edgeNode: EdgeNode
};

const defaultViewport = { x: 0, y: 0, zoom: 0.2 };

const defaultNodes = [
  {
    id: listNodes.legislatif.id,
    type: "rootNode",
    data: {
      title: listNodes.legislatif.nama,
      bg: primaryColor,
    },
    position: listNodes.legislatif.position,
  },
  {
    id: listNodes.front_group_ti.id,
    type: "rootNode",
    data: {
      title: listNodes.front_group_ti.nama,
      bg: bgOrange,
    },
    position: listNodes.front_group_ti.position,
  },
  {
    id: listNodes.eksekutif.id,
    type: "rootNode",
    data: {
      title: listNodes.eksekutif.nama,
      bg: primaryColor,
    },
    position: listNodes.eksekutif.position,
  },
  {
    id: listNodes.tobacco_industri.id,
    type: "rootNode",
    data: {
      title: listNodes.tobacco_industri.nama,
      bg: bgOrange,
    },
    position: listNodes.tobacco_industri.position,
  },
];

const edgeTypes = {
  smartStraight: SmartStraightEdge,
  smartStep: SmartStepEdge,
};

const MindMap = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    for (const item of defaultNodes) {
      setNodes((oldVal) => [...oldVal, item]);
    }

    setNodes((oldVal)=>[
      ...oldVal,
      {
        id: listNodes.edgePosition.id,
        type: "edgeNode",
        data :{
          image: listNodes.edgePosition.image
        },
        position: listNodes.edgePosition.position,
        isDraggable: false,
        zIndex:-100
      },
    ])

    listNodes.legislatif.details.map((data) => {
      setNodes((oldVal) => [
        ...oldVal,
        {
          id: data.id,
          type: "titleNode",
          data: {
            title: data.nama,
            description: data.description,
          },
          position: data.position,
          isDraggable: false,
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
                height: 132,
                width: 109,
                details: data.details,
                fakta: data.fakta,
                bg: "white",
              },
              position: data.position,
              isDraggable: false,
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
            height: 132,
            width: 109,
            fakta: data.fakta,
            details: data.details,
            bg: "white",
          },
          position: data.position,
          isDraggable: false,
        },
      ]);
    });

    // tobacoo_industry
    listNodes.tobacco_industri.details.map((data) => {
      setNodes((oldVal) => [
        ...oldVal,
        {
          id: data.id,
          type: "imageNode",
          data: {
            id: data.id,
            name: data.nama,
            image: data.image,
            height: 84,
            width: 109,
            details: [],
            fakta: [],
            bg: bgOrange,
          },
          position: data.position,
          isDraggable: false,
        },
      ]);
    });

    // Front Group TI
    listNodes.front_group_ti.details.map((data) => {
      setNodes((oldVal) => [
        ...oldVal,
        {
          id: data.id,
          type: "imageNode",
          data: {
            id: data.id,
            name: data.nama,
            image: data.image,
            height: 84,
            width: 109,
            details: data.details,
            fakta: [],
            bg: bgOrange,
          },
          position: data.position,
          isDraggable: false,
        },
      ]);
    });

    // listEdges.map((data) => {
    //   setEdges((oldVal) => [
    //     ...oldVal,
    //     {
    //       id: data.id,
    //       source: data.source,
    //       target: data.target,
    //       type: "smoothStep",
    //       style: {
    //         stroke: data.color,
    //         strokeWidth: 3,
    //       },
    //       sourceHandle: data.sourceHandle,
    //       targetHandle: data.targetHandle,
    //     },
    //   ]);
    // });
  }, [setEdges, setNodes]);

  return (
    <Center w={"90vw"} h={"100vh"}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        nodesDraggable={false}
        attributionPosition="bottom-left"
        minZoom={0.1}
      >
        <MiniMap zoomable pannable />
        <Controls />
      </ReactFlow>
    </Center>
  );
};

export default MindMap;
