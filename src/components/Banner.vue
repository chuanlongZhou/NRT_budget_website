<template>
  <v-row align="center" width="100%" class="text-secondary bg-primary">
    <!-- Left Section: Introduction Text -->
    <v-col class="pa-10" md="6" lg="4" sm="12" xs="12">
      <div>
        <h1>Welcome to Near Real-time Carbon Budget Project</h1>

        <p class="overline pt-3">
          A WAKE UP CALL TO THE CARBON BUDGET?
          <a
            href="https://academic.oup.com/nsr/advance-article/doi/10.1093/nsr/nwae365/7831649?searchresult=1"
            target="_blank"
          >
            OUR PAPER
          </a>
        </p>
        <br />
        <p>
          It is crucial to monitor how human caused CO2 emissions change with
          time and how the land and ocean carbon sinks help us mitigating
          climate warming by capturing CO2. The
          <a
            href="https://essd.copernicus.org/articles/14/4811/2022/"
            target="_blank"
          >
            current assessment
          </a>
          provides an update of the budget one year ago. Here we accelerate the
          time and provide each quarter a synthesis of emissions and natural CO2
          sinks based on the latest atmospheric data and a suite of
          <a href="https://arxiv.org/abs/2407.12447" target="_blank">
            peer-reviewed modeling approaches </a
          >.
        </p>
      </div>
    </v-col>

    <!-- Right Section: Image Carousel -->
    <v-col class="pa-0" md="6" lg="8" sm="12" xs="12">
      <v-carousel cycle interval="4000" height="600px">
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
    src: "/images/2023_1.png",
    alt: "Carbon Sink Decline 2023 - Image 1",
  },
  {
    src: "/images/2023_2.png",
    alt: "Carbon Sink Decline 2023 - Image 1",
  },
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
<style scoped>
.overline {
  font-size: 16px;
  font-weight: 600;
}
a {
  color: #b0e134!important;
}
</style>