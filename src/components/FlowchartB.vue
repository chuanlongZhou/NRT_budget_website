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
    id: "n1",
    type: "input",
    position: { x: 15, y: 50 },
    data: { label: "Latest\nClimate data" },
    class: "custom-node",
    style: {
      color: "#2fba4a",
      borderColor: "#2fba4a",
      fontSize: "14px",
      fontWeight: "bold",
      whiteSpace: "pre-wrap",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      borderRadius: "5px",
      padding: "3px",
    }, // Rectangle
    draggable: false, // Prevent node dragging
  },
  {
    id: "n2",
    type: "input",
    position: { x: 110, y: 50 },
    data: { label: "Training set from \n Previous years analysis"},
    class: "custom-node",
    style: {
      color: "#2fba4a",
      borderColor: "#2fba4a",
      fontWeight: "bold",
      fontSize: "14px",
      whiteSpace: "pre-wrap",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      borderRadius: "5px",
      padding: "3px",
    }, // Rectangle
    draggable: false, // Prevent node dragging
  },
  {
    id: "n3",
    type: "input",
    position: { x: 290, y: 50 },
    data: { label: "Climate and \nRS data"},
    class: "custom-node",
    style: {
      color: "#2a1bb3",
      borderColor: "#2a1bb3",
      fontWeight: "bold",
      fontSize: "14px",
      whiteSpace: "pre-wrap",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      borderRadius: "5px",
      padding: "3px",
    }, // Rectangle
    draggable: false, // Prevent node dragging
  },
  {
    id: "n4",
    type: "input",
    position: { x: 380, y: 50 },
    data: { label: "Training set from \n Previous years analysis"},
    class: "custom-node",
    style: {
      color: "#2a1bb3",
      borderColor: "#2a1bb3",
      fontWeight: "bold",
      fontSize: "14px",
      whiteSpace: "pre-wrap",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      borderRadius: "5px",
      padding: "3px",
    }, // Rectangle
    draggable: false, // Prevent node dragging
  },
  {
    id: "n5",
    position: { x: 40, y: 220 },
    data: { label: "Land Models" },
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
    id: "n6",
    position: { x: 180, y: 220 },
    data: { label: "Land AI models \n(emulators)" },
    style: {
      backgroundColor: "#16a124",
      borderColor: "#a12fba",
      borderWidth: "3px",
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
    id: "n7",
    position: { x: 350, y: 220 },
    data: { label: "Ocean AI models \n(emulators)" },
    style: {
      backgroundColor: "#0c127d",
      borderColor: "#a12fba",
      borderWidth: "3px",
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
    position: { x: 390, y: 380 },
    data: { label: " from stations" },
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
  {
    id: "+3",
    position: { x: 300, y: 455 },
    data: { label: "+" },
    style: { color: "#2b2b30", borderStyle: "none", fontSize: "40px" }, // Rectangle
    draggable: false, // Prevent node dragging
  },
  {
    id: "+4",
    position: { x: 330, y: 440 },
    data: { label: "Budget \nImbalance" },
    style: {
      color: "#2b2b30",
      borderStyle: "none",
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
]);

const edges = ref([
  {
    id: "e1",
    source: "n1",
    target: "n5",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#575759", strokeWidth: 1 }, // Thicker stroke
  },
  {
    id: "e2",
    source: "n1",
    target: "n6",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#575759", strokeWidth: 1 }, // Thicker stroke
  },
  {
    id: "e3",
    source: "n2",
    target: "n6",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#575759", strokeWidth: 1 }, // Thicker stroke
  },
  {
    id: "e4",
    source: "n3",
    target: "n7",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#575759", strokeWidth: 1 }, // Thicker stroke
  },
  {
    id: "e5",
    source: "n4",
    target: "n7",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#575759", strokeWidth: 1 }, // Thicker stroke
  },
  {
    id: "e6",
    source: "n5",
    target: "co2-growth-rate",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#575759", strokeWidth: 1 }, // Thicker stroke
  },
  {
    id: "e7",
    source: "land-sink",
    target: "ff",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#575759", strokeWidth: 1 }, // Thicker stroke
  },
  {
    id: "e8",
    source: "ocean-sink",
    target: "ff",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#575759", strokeWidth: 1 }, // Thicker stroke
  },
  {
    id: "e9",
    source: "co2-growth-rate",
    target: "ff",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#575759", strokeWidth: 1 }, // Thicker stroke
  },
  {
    id: "e10",
    source: "n5",
    target: "land-sink",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#575759", strokeWidth: 1 }, // Thicker stroke
  },
  {
    id: "e11",
    source: "n7",
    target: "co2-growth-rate",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#575759", strokeWidth: 1 }, // Thicker stroke
  },
  {
    id: "e12",
    source: "n6",
    target: "ocean-sink",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#575759", strokeWidth: 1 }, // Thicker stroke
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
