<template>
  <vue-flow
    :nodes="nodes"
    :edges="edges"
    class="flowchart-container"
    :zoom-on-scroll="false"
    :zoom-on-pinching="false"
    :pan-on-drag="false"
    :fit-view="true"
  >
    <!-- <Background pattern-color="#aaa" :gap="16" /> -->
    <defs>
      <!-- Define marker for the end of the edge -->
      <marker
        id="end-arrow"
        viewBox="0 0 10 10"
        refX="10"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto"
      >
        <path d="M0,0 L10,5 L0,10 Z" fill="#ff5722" />
      </marker>

      <!-- Define marker for the start of the edge (optional) -->
      <marker
        id="start-circle"
        viewBox="0 0 10 10"
        refX="5"
        refY="5"
        markerWidth="5"
        markerHeight="5"
      >
        <circle cx="5" cy="5" r="3" fill="#ff5722" />
      </marker>
    </defs>
  </vue-flow>
</template>

<script setup>
import { ref } from "vue";
import { Position, VueFlow } from "@vue-flow/core";
import { Background } from "@vue-flow/background";
import "@vue-flow/core/dist/style.css"; // Vue Flow core styles

// Define nodes and edges for the flowchart
const nodes = ref([
  {
    id: "oco2",
    type: "input",
    position: { x: 550, y: 50 },
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
    }, // Rectangle
    draggable: false, // Prevent node dragging
    sourcePosition: Position.Left,

  },

  {
    id: "fossil-emissions",
    position: { x: 50, y: 150 },
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
    }, // Rectangle
    draggable: false, // Prevent node dragging
    sourcePosition: Position.Bottom,
  },
  {
    id: "atmospheric-inversion",
    position: { x: 260, y: 50 },
    data: { label: "Atmospheric inversion" },
    style: {
      backgroundColor: "#2299e3",
      whiteSpace: "pre-wrap",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      borderRadius: "5px",
      padding: "10px",
    }, // Rectangle
    draggable: false, // Prevent node dragging
    targetPosition: Position.Right,
  },
  {
    id: "atmospheric-inversion2",
    position: { x: 260, y: 75 },
    data: { label: "" },
    style: { backgroundColor: "lightblue" }, // Rectangle
    draggable: false, // Prevent node dragging
    sourcePosition: Position.Left,
  },
  {
    id: "land-sink",
    position: { x: 220, y: 150 },
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
    }, // Rectangle
    draggable: false, // Prevent node dragging
  },
  {
    id: "ocean-sink",
    position: { x: 350, y: 150 },
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
    }, // Rectangle
    draggable: false, // Prevent node dragging
  },
  {
    id: "co2-growth-rate",
    position: { x: 500, y: 140 },
    data: { label: "CO2 Growth Rate\n from satellite data" },
    style: {
      backgroundColor: "#e6a525",
      whiteSpace: "pre-wrap",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      borderRadius: "5px",
      padding: "10px",
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
  {
    id: "ff",
    position: { x: 370, y: 280 },
    data: { label: "FF" },
    style: {
      backgroundColor: "#2b2b30",
      color: "white",
      whiteSpace: "pre-wrap",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      borderRadius: "100px",
      padding: "20px",
    }, // Rectangle
    draggable: false, // Prevent node dragging
  },
  {
    id: "+",
    position: { x: 470, y: 160 },
    data: { label: "+" },
    style: {
      color: "#2b2b30",
      borderStyle: "none",
    }, // Rectangle
    draggable: false, // Prevent node dragging
  },
  {
    id: "+2",
    position: { x: 325, y: 160 },
    data: { label: "+" },
    style: { color: "#2b2b30", borderStyle: "none" }, // Rectangle
    draggable: false, // Prevent node dragging
  },
]);

const edges = ref([
  {
    id: "e1",
    source: "oco2",
    target: "atmospheric-inversion",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#575759", strokeWidth: 1 },  // Thicker stroke
  },
  {
    id: "e3",
    source: "atmospheric-inversion2",
    target: "fossil-emissions",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#575759", strokeWidth: 1 },  // Thicker stroke

  },
  {
    id: "e4",
    source: "atmospheric-inversion",
    target: "land-sink",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#575759", strokeWidth: 1 },  // Thicker stroke

  },
  {
    id: "e5",
    source: "atmospheric-inversion",
    target: "ocean-sink",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#575759", strokeWidth: 1 },  // Thicker stroke

  },
  {
    id: "e6",
    source: "atmospheric-inversion",
    target: "co2-growth-rate",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#575759", strokeWidth: 1 },  // Thicker stroke

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
  height: 450px; /* Set the fixed height */
  background-color: #ffffff;
  /* border: 2px solid #4d4d4d;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.518); */
}
</style>
