<template>
  <v-row align="center" width="100%" class="text-secondary bg-primary">
    <!-- Left Section: Introduction Text -->
    <v-col cols="6" md="4" class="pa-10">
      <div>
        <h2>Welcome to Near Real-time Carbon Budget Project</h2>
        <p class="text-overline">
          A LARGE DECLINE OF THE LAND CARBON SINK IN 2023
          <a
          href="https://academic.oup.com/nsr/advance-article/doi/10.1093/nsr/nwae365/7831649?searchresult=1"
          target="_blank"
        >
          OUR PAPER
        </a>
        </p>
        <br />
        <p>
          The objective of the near real time global carbon budget research
          initiative is to monitor the fate of fossil CO2 emissions from human
          activities into the increase of CO2 in the atmosphere and the capture
          by ocean and land carbon sinks. Complementary to the annual 
          <a href="https://essd.copernicus.org/articles/14/4811/2022/" target="_blank">
          Global Carbon Budget </a>, we provide each semester a
          synthesis of emissions and natural CO2 sinks using the latest
          atmospheric data and a suite of 
          <a href="https://arxiv.org/abs/2407.12447" target="_blank">
          peer-reviewed modeling approaches
          </a>.
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
