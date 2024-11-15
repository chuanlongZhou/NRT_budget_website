<template>
  <vue-flow
    ref="vueFlowRefA"
    :nodes="computedNodes"
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
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { Position, VueFlow, MarkerType} from "@vue-flow/core";
import "@vue-flow/core/dist/style.css"; // Vue Flow core styles

// References for canvas dimensions and Vue Flow element
const vueFlowRefA = ref(null);
const canvasWidth = ref(872);
const canvasHeight = ref(300);
const box_width = ref(160);
const box_height = ref(50);
const fontSize1 = ref(16);
const fontSize2 = ref(12);

// ResizeObserver to monitor vue-flow element size
let resizeObserver;

const updateCanvasSize = () => {
  if (vueFlowRefA.value) {
    const { offsetWidth, offsetHeight } = vueFlowRefA.value.$el; // Access actual DOM element size
    canvasWidth.value = offsetWidth;
    canvasHeight.value = offsetHeight;
    box_width.value = Math.min(offsetWidth * 0.2, 160);
    if (offsetWidth < 600) {
      fontSize1.value = 12;
      fontSize2.value = 10;
      box_height.value = 75;
    } else if (offsetWidth < 800) {
      fontSize1.value = 12;
      fontSize2.value = 10;
      box_height.value = 60;
    } 
    else {
      fontSize1.value = 16;
      fontSize2.value = 12;
    }
    console.log("Canvas size updated:", canvasWidth.value, canvasHeight.value, box_width.value, box_height.value);
  }
};

// Initialize the ResizeObserver on mount
onMounted(() => {
  resizeObserver = new ResizeObserver(updateCanvasSize);
  if (vueFlowRefA.value) {
    resizeObserver.observe(vueFlowRefA.value.$el); // Observe changes to the vue-flow element size
  }
  // updateCanvasSize(); // Initial size setup
});

// Cleanup ResizeObserver on unmount
onBeforeUnmount(() => {
  if (resizeObserver && vueFlowRefA.value) {
    resizeObserver.unobserve(vueFlowRefA.value.$el);
  }
});

// Define computed nodes based on canvas size
const computedNodes = computed(() => [
  {
    id: "oco2",
    type: "input",
    position: { x: canvasWidth.value *0.8, y: 50 },
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
      width: box_width.value + "px",
      height: box_height.value + "px",
      fontSize: `${fontSize1.value}px`,
    },
    draggable: false,
    sourcePosition: Position.Left,
  },
  
  {
    id: "fossil-emissions",
    position: { x: canvasWidth.value *0.05, y: 175 },
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
      width: box_width.value + "px",
      height: box_height.value + "px",
      fontSize: `${fontSize1.value}px`,

    }, // Rectangle
    draggable: false, // Prevent node dragging
    sourcePosition: Position.Top,
  },
  {
    id: "atmospheric-inversion",
    position: { x: canvasWidth.value *0.4, y: 50 },
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
      width: box_width.value + "px",
      height: box_height.value + "px",
      fontSize: `${fontSize1.value}px`,

    }, // Rectangle
    draggable: false, // Prevent node dragging
    targetPosition: Position.Right,
  },
  {
    id: "atmospheric-inversion2",
    position: { x: canvasWidth.value *0.4, y: 75 },
    data: { label: "" },
    style: { backgroundColor: "lightblue" }, // Rectangle
    draggable: false, // Prevent node dragging
    targetPosition: Position.Left,
  },
  {
    id: "land-sink",
    position: { x: canvasWidth.value *0.3, y: 175 },
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
      width: box_width.value + "px",
      height: box_height.value + "px",
      color: "white",
      fontSize: `${fontSize1.value}px`,

    }, // Rectangle
    draggable: false, // Prevent node dragging
  },
  {
    id: "ocean-sink",
    position: { x: canvasWidth.value *0.55, y: 175 },
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
      width: box_width.value + "px",
      height: box_height.value + "px",
      fontSize: `${fontSize1.value}px`,

    }, // Rectangle
    draggable: false, // Prevent node dragging
  },
  {
    id: "co2-growth-rate",
    position: { x: canvasWidth.value *0.8, y: 175 },
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
      width: box_width.value + "px",
      height: box_height.value + "px",
      fontSize: `${fontSize2.value}px`,

    }, // Rectangle
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
</script>

<style scoped>
.flowchart-container {
  height: 300px;
  background-color: #ffffff;
}

.custom-node {
  transition: background-color 0.3s, transform 0.3s;
}

.custom-node:hover {
  background-color: #f0f0f0;
  transform: scale(1.05);
}
</style>
