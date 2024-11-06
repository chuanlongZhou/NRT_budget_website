<template>
  <vue-flow
    ref="vueFlowRefA"
    :nodes="computedNodes"
    :edges="edges"
    class="flowchart-container"
    :zoom-on-scroll="false"
    :zoom-on-pinching="false"
    :pan-on-drag="false"
    :fit-view="false"
  >
  </vue-flow>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { Position, VueFlow, MarkerType } from "@vue-flow/core";
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
    box_width.value = Math.min((offsetWidth-50) * 0.2, 160);
    console.log("Canvas size updated:", canvasWidth.value, canvasHeight.value);
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
    id: "fossil-emissions",
    position: { x: canvasWidth.value *0.05, y: 160 },
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
      fontSize: `${fontSize1.value}px`,

      height: "60px",
    }, // Rectangle
    draggable: false, // Prevent node dragging
    sourcePosition: Position.Top,
  },

  {
    id: "n5",
    position: { x: canvasWidth.value *0.15, y: 50 },
    data: { label: "Land Models" },
    style: {
      backgroundColor: "#92D050",
      whiteSpace: "pre-wrap",
      borderWidth: "3px",

      borderColor: "#548235",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      borderRadius: "5px",
      padding: "10px",
      width: box_width.value + "px",
      fontSize: `${fontSize1.value}px`,

      height: "60px",
    }, // Rectangle
    draggable: false, // Prevent node dragging
    targetPosition: Position.Left,
  },
  {
    id: "n52",
    position: { x: canvasWidth.value *0.15, y: 50 },
    draggable: false, // Prevent node dragging
    sourcePosition: Position.Right,
  },
  {
    id: "n6",
    position: { x: canvasWidth.value *0.4, y: 50 },
    data: { label: "Land AI models \n(emulators)" },
    style: {
      backgroundColor: "#92D050",
      borderColor: "#a12fba",
      borderWidth: "3px",
      whiteSpace: "pre-wrap",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      borderRadius: "5px",
      padding: "10px",
      width: box_width.value + "px",
      fontSize: `${fontSize1.value}px`,

      height: "60px",
    }, // Rectangle
    draggable: false, // Prevent node dragging
    targetPosition: Position.Left,
  },
  {
    id: "n7",
    position: { x: canvasWidth.value *0.65, y: 50 },
    data: { label: "Ocean AI models \n(emulators)" },
    style: {
      backgroundColor: "#4472C4",
      color: "white",
      borderColor: "#a12fba",
      borderWidth: "3px",
      whiteSpace: "pre-wrap",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      borderRadius: "5px",
      padding: "10px",
      width: box_width.value + "px",
      fontSize: `${fontSize1.value}px`,

      height: "60px",
    }, // Rectangle
    draggable: false, // Prevent node dragging
  },
  {
    id: "land-sink",
    position: { x: canvasWidth.value *0.25, y: 160 },
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
      fontSize: `${fontSize1.value}px`,

      height: "60px",
    }, // Rectangle
    draggable: false, // Prevent node dragging
  },
  {
    id: "ocean-sink",
    position: { x: canvasWidth.value *0.45, y: 160 },
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
      fontSize: `${fontSize1.value}px`,

      height: "60px",
    }, // Rectangle
    draggable: false, // Prevent node dragging
  },
  {
    id: "co2-growth-rate",
    position: { x: canvasWidth.value *0.65, y: 160 },
    data: {
      label: "Atmospheric CO₂\n Growth Rate from\n NOAA and SCRIPPS stations",
    },
    style: {
      backgroundColor: "#5eabe6",
      color: "white",
      whiteSpace: "pre-wrap",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      borderRadius: "5px",
      padding: "1px",
      width: box_width.value + "px",

      height: "60px",
      fontSize: `${fontSize2.value}px`,

    }, // Rectangle
    draggable: false, // Prevent node dragging
  },

  // {
  //   id: "ff",
  //   position: { x: 220+175, y: 280+25 },
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
  {
    id: "+",
    position: { x: canvasWidth.value *0.84, y: 150 + 30 },
    data: { label: "+" },
    style: {
      color: "#2b2b30",
      borderStyle: "none",
    }, // Rectangle
    draggable: false, // Prevent node dragging
  },
  {
    id: "+2",
    position: { x: canvasWidth.value *0.635, y: 150 + 30 },
    data: { label: "+" },
    style: { color: "#2b2b30", borderStyle: "none" }, // Rectangle
    draggable: false, // Prevent node dragging
  },
  {
    id: "+3",
    position: { x: canvasWidth.value *0.435, y: 150 + 30 },
    data: { label: "+" },
    style: { color: "#2b2b30", borderStyle: "none" }, // Rectangle
    draggable: false, // Prevent node dragging
  },
  {
    id: "=",
    position: { x: canvasWidth.value *0.235, y: 150 + 30 },
    data: { label: "=" },
    style: { color: "#2b2b30", borderStyle: "none" }, // Rectangle
    draggable: false, // Prevent node dragging
  },
  // {
  //   id: "+3",
  //   position: { x: 330+155, y: 280+30 },
  //   data: { label: "+" },
  //   style: { color: "#2b2b30", borderStyle: "none", fontSize: "40px" }, // Rectangle
  //   draggable: false, // Prevent node dragging
  // },
  {
    id: "+4",
    position: { x: canvasWidth.value *0.83, y: 155 },
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
      fontSize: "12px",
    }, // Rectangle
    draggable: false, // Prevent node dragging
  },
]);

const edges = ref([
  // {
  //   id: "e0",
  //   source: "fossil-emissions",
  //   target: "n5",
  //   type: "smoothstep",
  //   animated: true,
  //   style: { stroke: "#575759", strokeWidth: 1 }, // Thicker stroke
  // },

  {
    id: "e1",
    source: "n52",
    target: "n6",
    type: "smoothstep",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20, // Adjust the width of the arrow
      height: 20, // Adjust the height of the arrow
      color: "black",
    },
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
  // {
  //   id: "e6",
  //   source: "n5",
  //   target: "co2-growth-rate",
  //   type: "smoothstep",
  //   animated: true,

  //   style: { stroke: "#575759", strokeWidth: 1 }, // Thicker stroke
  // },
  // {
  //   id: "e7",
  //   source: "land-sink",
  //   target: "ff",
  //   type: "smoothstep",
  //   animated: true,
  //   style: { stroke: "#575759", strokeWidth: 1 }, // Thicker stroke
  // },
  // {
  //   id: "e8",
  //   source: "ocean-sink",
  //   target: "ff",
  //   type: "smoothstep",
  //   animated: true,
  //   style: { stroke: "#575759", strokeWidth: 1 }, // Thicker stroke
  // },
  // {
  //   id: "e9",
  //   source: "co2-growth-rate",
  //   target: "ff",
  //   type: "smoothstep",
  //   animated: true,
  //   style: { stroke: "#575759", strokeWidth: 1 }, // Thicker stroke
  // },
  {
    id: "e10",
    source: "n5",
    target: "land-sink",
    type: "smoothstep",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20, // Adjust the width of the arrow
      height: 20, // Adjust the height of the arrow
      color: "black",
    },
    style: { stroke: "#575759", strokeWidth: 1 }, // Thicker stroke
  },
  {
    id: "e11",
    source: "n7",
    target: "ocean-sink",
    type: "smoothstep",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20, // Adjust the width of the arrow
      height: 20, // Adjust the height of the arrow
      color: "black",
    },
    style: { stroke: "#575759", strokeWidth: 1 }, // Thicker stroke
  },
  {
    id: "e12",
    source: "n6",
    target: "land-sink",
    type: "smoothstep",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20, // Adjust the width of the arrow
      height: 20, // Adjust the height of the arrow
      color: "black",
    },
    style: { stroke: "#575759", strokeWidth: 1 }, // Thicker stroke
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
</style>
