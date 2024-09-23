<template>
  <vue-flow
    :nodes="nodes"
    :edges="edges"
    class="flowchart-container"
    :zoom-on-scroll="false"
    :zoom-on-pinching="false"
    :pan-on-drag="false"
    :fit-view="false"
  >
    <Background pattern-color="#aaa" :gap="16" />
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
    position: { x: 50, y: 30 },
    data: { label: "OCO2 Satellite \nAtmospheric CO2 Data" },
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
  },
  {
    id: "wind-fields",
    position: { x: 280, y: 50 },
    data: { label: "Wind Fields" },
    style: {
      backgroundColor: "#2721c4",
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
    id: "fossil-emissions",
    position: { x: 350, y: 150 },
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
    position: { x: 160, y: 250 },
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
  },
  {
    id: "atmospheric-inversion2",
    position: { x: 290, y: 270 },
    data: { label: "" },
    style: { backgroundColor: "lightblue" }, // Rectangle
    draggable: false, // Prevent node dragging
    targetPosition: Position.Right,
  },
  {
    id: "land-sink",
    position: { x: 50, y: 350 },
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
    position: { x: 200, y: 350 },
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
    position: { x: 350, y: 350 },
    data: { label: "CO2 Growth Rate" },
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
  {
    id: "co2-growth-rate2",
    position: { x: 370, y: 380 },
    data: { label: " from satellite data" },
    style: {
      color: "#2b2b30",
      borderStyle: "none",
      fontSize: "12px",
    }, // Rectangle
    draggable: false, // Prevent node dragging
  },
  {
    id: "ff",
    position: { x: 220, y: 450 },
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
    position: { x: 165, y: 360 },
    data: { label: "+" },
    style: {
      color: "#2b2b30",
      borderStyle: "none",
    }, // Rectangle
    draggable: false, // Prevent node dragging
  },
  {
    id: "+2",
    position: { x: 320, y: 360 },
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
    id: "e2",
    source: "wind-fields",
    target: "atmospheric-inversion",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#575759", strokeWidth: 1 },  // Thicker stroke

  },
  {
    id: "e3",
    source: "fossil-emissions",
    target: "atmospheric-inversion2",
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
  height: 550px; /* Set the fixed height */
  background-color: #e9e8e8;
  border: 2px solid #4d4d4d;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.518);
}
</style>
