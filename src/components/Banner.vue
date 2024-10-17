<template>
  <v-row align="center" width="100%" class="text-secondary bg-primary">
    <!-- Left Section: Introduction Text -->
    <v-col cols="6" md="4" class=" pa-10" >
      <div >
        <h2>Welcome to Near Real-time Carbon Budget Project</h2>
        <p>
          Discover the near real-time carbon budget for global, land and ocean.
        </p>
        <p>
          We reveals a large <b><u>DECLINE</u></b> of the land carbon sink <b><u>in 2023</u></b>.
        </p>
      </div>
    </v-col>

    <!-- Right Section: Image Carousel -->
    <v-col cols="6" md="8" class="pa-0">
      <v-carousel cycle interval="4000" height="400px">
        <v-carousel-item v-for="(image, index) in images" :key="index">
          <v-img
            :src="image.src"
            :alt="image.alt"
            class="carousel-image"
            cover
          ></v-img>
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from "vue";
const images = ref([
  {
    src: "/images/image1.jpg",
    alt: "Carbon Sink Decline 2023 - Image 1",
  },
  {
    src: "/images/image2.png",
    alt: "Carbon Sink Decline 2023 - Image 2",
  },
]);
// Sample images for the carousel
</script>
