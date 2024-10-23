<!-- CustomNode.vue -->
<template>
  <div
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    :class="{ 'hovered-node': isHovered }"
  >
    {{ data.label }}
  </div>
</template>
  
  <script>
export default {
  props: ["id", "data"],
  data() {
    return {
      isHovered: false,
    };
  },
};
</script>
  
  <style>
.hovered-node {
  background-color: #f0f0f0; /* Hover background color */
  cursor: pointer;
  /* Add any other hover styles */
}
</style>