<template>
  <vue-flow
    :nodes="nodes"
    :edges="edges"
    class="flowchart-container"
    :zoom-on-scroll="false"
    :zoom-on-pinching="true"
    :pan-on-drag="false"
    :fit-view="true"
    :node-types="nodeTypes"
  >
  </vue-flow>
</template>

<script setup>
import { ref } from "vue";
import { Position, VueFlow, MarkerType } from "@vue-flow/core";
import { Background } from "@vue-flow/background";
import "@vue-flow/core/dist/style.css"; // Vue Flow core styles

// Define nodes and edges for the flowchart
const nodes = ref([
  {
    id: "oco2",
    type: "input",
    position: { x: 475, y: 50},
    data: { label: "OCO2 Satellite Data" },
    class: "custom-node",
    style: {
      backgroundColor: "#ff5722",
      color: "white",
      whiteSpace: "pre-wrap",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      borderRadius: "5px",
      padding: "10px",
      width: '160px',
      height: '60px',
    }, // Rectangle
    draggable: false, // Prevent node dragging
    sourcePosition: Position.Left,

  },

  {
    id: "fossil-emissions",
    position: { x: 25, y: 160 },
    data: { label: "Fossil Emissions \nEstimates" },
    style: {
      backgroundColor: "gray",
      color: "white",
      whiteSpace: "pre-wrap",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      borderRadius: "5px",
      padding: "10px",
      width: '160px',
      height: '60px',
    }, // Rectangle
    draggable: false, // Prevent node dragging
    sourcePosition: Position.Top,
  },
  {
    id: "atmospheric-inversion",
    position: { x: 285, y: 50 },
    data: { label: "Atmospheric \nInversion Model" },
    style: {
      backgroundColor: "#ff5722",
      color: "white",
      borderColor: "#172C51",
      borderWidth: "3px",

      whiteSpace: "pre-wrap",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      borderRadius: "5px",
      padding: "10px",
      width: '160px',
      height: '60px',
    }, // Rectangle
    draggable: false, // Prevent node dragging
    targetPosition: Position.Right,
  },
  {
    id: "atmospheric-inversion2",
    position: { x: 285, y: 75 },
    data: { label: "" },
    style: { backgroundColor: "lightblue" }, // Rectangle
    draggable: false, // Prevent node dragging
    targetPosition: Position.Left,
  },
  {
    id: "land-sink",
    position: { x: 200, y: 160 },
    data: { label: "Land Sink" },
    style: {
      backgroundColor: "#16a124",
      whiteSpace: "pre-wrap",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      borderRadius: "5px",
      padding: "10px",
      width: '160px',
      height: '60px',
      color: "white",
    }, // Rectangle
    draggable: false, // Prevent node dragging
  },
  {
    id: "ocean-sink",
    position: { x: 375, y: 160 },
    data: { label: "Ocean Sink" },
    style: {
      backgroundColor: "#0c127d",
      color: "white",
      whiteSpace: "pre-wrap",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      borderRadius: "5px",
      padding: "10px",
      width: '160px',
      height: '60px',
    }, // Rectangle
    draggable: false, // Prevent node dragging
  },
  {
    id: "co2-growth-rate",
    position: { x: 550, y: 160 },
    data: { label: "Atmospheric CO₂ \nGrowth Rate\n from OCO-2 data" },
    style: {
      backgroundColor: "#5eabe6",
      color:"white",
      whiteSpace: "pre-wrap",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      borderRadius: "5px",
      padding: "10px",
      width: '160px',
      height: '60px',
      fontSize: "12px",
    }, // Rectangle
    draggable: false, // Prevent node dragging
  },
  // {
  //   id: "co2-growth-rate2",
  //   position: { x: 520, y: 180 },
  //   data: { label: " from satellite data" },
  //   style: {
  //     color: "#2b2b30",
  //     borderStyle: "none",
  //     fontSize: "12px",
  //   }, // Rectangle
  //   draggable: false, // Prevent node dragging
  // },
  // {
  //   id: "ff",
  //   position: { x: 370, y: 280 },
  //   data: { label: "FF" },
  //   style: {
  //     backgroundColor: "#2b2b30",
  //     color: "white",
  //     whiteSpace: "pre-wrap",
  //     display: "flex",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     textAlign: "center",
  //     borderRadius: "100px",
  //     padding: "20px",
  //   }, // Rectangle
  //   draggable: false, // Prevent node dragging
  // },
  // {
  //   id: "+",
  //   position: { x: 470, y: 160 },
  //   data: { label: "+" },
  //   style: {
  //     color: "#2b2b30",
  //     borderStyle: "none",
  //   }, // Rectangle
  //   draggable: false, // Prevent node dragging
  // },
  // {
  //   id: "+2",
  //   position: { x: 325, y: 160 },
  //   data: { label: "+" },
  //   style: { color: "#2b2b30", borderStyle: "none" }, // Rectangle
  //   draggable: false, // Prevent node dragging
  // },
]);

const edges = ref([
  {
    id: "e1",
    source: "oco2",
    target: "atmospheric-inversion",
    type: "smoothstep",
    animated: true,
    markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 20, // Adjust the width of the arrow
          height: 20, // Adjust the height of the arrow
          color: 'black',
        },
    style: { stroke: "#575759", strokeWidth: 1 },  // Thicker stroke
  },
  {
    id: "e3",
    target: "atmospheric-inversion2",
    source: "fossil-emissions",
    type: "smoothstep",
    animated: true,
    markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 20, // Adjust the width of the arrow
          height: 20, // Adjust the height of the arrow
          color: 'black',
        },
    style: { stroke: "#575759", strokeWidth: 1 },  // Thicker stroke

  },
  {
    id: "e4",
    source: "atmospheric-inversion",
    target: "land-sink",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#575759", strokeWidth: 1 },  // Thicker stroke
    markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 20, // Adjust the width of the arrow
          height: 20, // Adjust the height of the arrow
          color: 'black',
        },
  },
  {
    id: "e5",
    source: "atmospheric-inversion",
    target: "ocean-sink",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#575759", strokeWidth: 1 },  // Thicker stroke
    markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 20, // Adjust the width of the arrow
          height: 20, // Adjust the height of the arrow
          color: 'black',
        },
  },
  {
    id: "e6",
    source: "atmospheric-inversion",
    target: "co2-growth-rate",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#575759", strokeWidth: 1 },  // Thicker stroke
    markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 20, // Adjust the width of the arrow
          height: 20, // Adjust the height of the arrow
          color: 'black',
        },
  },
  {
    id: "e7",
    source: "land-sink",
    target: "ff",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#575759", strokeWidth: 1 },  // Thicker stroke

  },
  {
    id: "e8",
    source: "ocean-sink",
    target: "ff",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#575759", strokeWidth: 1 },  // Thicker stroke

  },
  {
    id: "e9",
    source: "co2-growth-rate",
    target: "ff",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#575759", strokeWidth: 1 },  // Thicker stroke

  },
]);

// Register the Vue Flow component
</script>

<style scoped>
.flowchart-container {
  height: 300px; /* Set the fixed height */
  background-color: #ffffff;
  /* border: 2px solid #4d4d4d;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.518); */
}

.custom-node {
  transition: background-color 0.3s, transform 0.3s;
}

.custom-node:hover {
  background-color: #f0f0f0; /* Change the color when hovered */
  transform: scale(1.05); /* Slightly enlarge the node */
}
</style>
