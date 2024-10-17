<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        You can select two regions to compare.
        <v-img
          class="image py-5"
          src="https://github.com/chuanlongZhou/carbon_budget_web_image/blob/5c3aa25df900d113aa45ef5a88d59b20eb706321/ocean_map.png?raw=true"
          width="500"
        ></v-img>
        <p class="content_text">
          The 2003 anomaly. Red bars
          are the median from the 15 models of the Global Carbon Project. Black
          dots show the average of the 3 models used for low latency estimates.
          →
        </p>
      </v-col>
      <v-col cols="8" class="pl-5">
        
        <v-row>
          <v-btn-toggle
            v-model="toggle"
            divided
            max="2"
            multiple
          >
            <v-btn
              v-for="(region, i) in regions"
              :key="i"
              :value="i"
              height="30px"
              class="text-capitalize btn_toggle px-0"
            >
              {{ region.title }}
            </v-btn>
          </v-btn-toggle>
        </v-row>
        <v-row>
          <v-col col="6">
            DataPro -{{ regions[toggle[0]].title }}
            <v-img
              class="image py-5"
              :src="regions[toggle[0]].scr_1"
              width="350"
            ></v-img>
          </v-col>
          <v-col cols="6">
            Inversion - {{ regions[toggle[0]].title }}
            <v-img
              class="image py-5"
              :src="regions[toggle[0]].scr_2"
              width="350"
            ></v-img>
          </v-col>
        </v-row>
        <v-row>
          <v-col col="6">
            DataPro -{{ regions[toggle[1]].title }}
            <v-img
              class="image py-5"
              :src="regions[toggle[1]].scr_1"
              width="350"
            ></v-img>
          </v-col>
          <v-col cols="6">
            Inversion - {{ regions[toggle[1]].title }}
            <v-img
              class="image py-5"
              :src="regions[toggle[1]].scr_2"
              width="350"
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const toggle = ref([0, 1]);
const regions = ref([
  {
  title: "global",
  scr_1:
    "https://github.com/chuanlongZhou/carbon_budget_web_image/blob/5c3aa25df900d113aa45ef5a88d59b20eb706321/ocean/Ocean_datapro_box_globe.png?raw=true",
  scr_2:
    "https://github.com/chuanlongZhou/carbon_budget_web_image/blob/5c3aa25df900d113aa45ef5a88d59b20eb706321/ocean/Ocean_inversion_box_globe.png?raw=true",
},
{
  title: "Arctic",
  scr_1:
    "https://github.com/chuanlongZhou/carbon_budget_web_image/blob/5c3aa25df900d113aa45ef5a88d59b20eb706321/ocean/Ocean_datapro_box_globe.png?raw=true",
  scr_2:
    "https://github.com/chuanlongZhou/carbon_budget_web_image/blob/5c3aa25df900d113aa45ef5a88d59b20eb706321/ocean/Ocean_inversion_box_globe.png?raw=true",
},
{
  title: "Atlantic",
  scr_1:
    "https://github.com/chuanlongZhou/carbon_budget_web_image/blob/5c3aa25df900d113aa45ef5a88d59b20eb706321/ocean/Ocean_datapro_box_atlantic.png?raw=true",
  scr_2:
    "https://github.com/chuanlongZhou/carbon_budget_web_image/blob/5c3aa25df900d113aa45ef5a88d59b20eb706321/ocean/Ocean_inversion_box_atlantic.png?raw=true",
},
{
  title: "Coast",
  scr_1:
    "https://github.com/chuanlongZhou/carbon_budget_web_image/blob/5c3aa25df900d113aa45ef5a88d59b20eb706321/ocean/Ocean_datapro_box_coast.png?raw=true",
  scr_2:
    "https://github.com/chuanlongZhou/carbon_budget_web_image/blob/5c3aa25df900d113aa45ef5a88d59b20eb706321/ocean/Ocean_inversion_box_coast.png?raw=true",
},
{
  title: "Indian",
  scr_1:
    "https://github.com/chuanlongZhou/carbon_budget_web_image/blob/5c3aa25df900d113aa45ef5a88d59b20eb706321/ocean/Ocean_datapro_box_indian.png?raw=true",
  scr_2:
    "https://github.com/chuanlongZhou/carbon_budget_web_image/blob/5c3aa25df900d113aa45ef5a88d59b20eb706321/ocean/Ocean_inversion_box_indian.png?raw=true",
},
{
  title: "Pacific",
  scr_1:
    "https://github.com/chuanlongZhou/carbon_budget_web_image/blob/5c3aa25df900d113aa45ef5a88d59b20eb706321/ocean/Ocean_datapro_box_pacific.png?raw=true",
  scr_2:
    "https://github.com/chuanlongZhou/carbon_budget_web_image/blob/5c3aa25df900d113aa45ef5a88d59b20eb706321/ocean/Ocean_inversion_box_pacific.png?raw=true",
},
{
  title: "Southern",
  scr_1:
    "https://github.com/chuanlongZhou/carbon_budget_web_image/blob/5c3aa25df900d113aa45ef5a88d59b20eb706321/ocean/Ocean_datapro_box_southern.png?raw=true",
  scr_2:
    "https://github.com/chuanlongZhou/carbon_budget_web_image/blob/5c3aa25df900d113aa45ef5a88d59b20eb706321/ocean/Ocean_inversion_box_southern.png?raw=true",
},

]);
</script>


<style scoped>
.image {
  transition: transform 0.3s;
  transform-origin: top left; /* Adjust the origin point */
  border-radius: 5px;
}

.image:hover {
  transform: scale(1.1);
  z-index: 99;
  box-shadow: 0 0 10px rgba(126, 126, 126, 0.574);
  background-color: white;
  /* border-style: solid;
  border-color: #6b6b6b9f; */
}
.content_text {
  font-size: 16;
  font-weight: light;
  color: #4d4d4d;
}
.btn_toggle {
  font-size: 12px;
}
</style>
