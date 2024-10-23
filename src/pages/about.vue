<template>
    <Hero :main="'Team Introduction text'" :sub="'other introduction text'" />
  
    <v-container class="my-5">
      <v-row>
        <v-col cols="12" class="text-left text-h6 text-primary">
            <a href="https://www.lsce.ipsl.fr/" target="_blank">
              <img
                src="@/assets/team_logo/lsce.png"
                alt="Team Logo"
                class="team-logo"
              ></img>
            </a>
          <p class="text-body-1"> 
            The LSCE team, a leading research entity in climate science based in France.
            </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          class="px-4"
          cols="12"
          md="4"
          v-for="member in LSCE_team"
          :key="member.name"
        >
          <TeamMemberCard
            :name="member.name"
            :title="member.title"
            :description="member.description"
            :photo="member.photo"
            :homeUrl="member.homeUrl"
            :scholarUrl="member.scholarUrl"
            :githubUrl="member.githubUrl"
          />
        </v-col>
      </v-row>
    <v-divider class="my-5"></v-divider>
    </v-container>
    <v-container >
      <v-row>
        <v-col cols="12" class="text-left text-h6 text-primary">
          <a href="" target="_blank">
          <img
            src="@/assets/team_logo/th.png"
            alt="Team Logo"
            class="team-logo"
          />
          </a>
          <p class="text-body-1"> 
            The Tsinghua University team, a leading research entity in global carbon budgets and climate science based in the China.
            </p>
          <p class="text-body-1">

          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          class="px-4"
          cols="12"
          md="4"
          v-for="member in Tsinghua_team"
          :key="member.name"
        >
          <TeamMemberCard
            :name="member.name"
            :title="member.title"
            :description="member.description"
            :photo="member.photo"
            :homeUrl="member.homeUrl"
            :scholarUrl="member.scholarUrl"
            :githubUrl="member.githubUrl"
          />
        </v-col>
      </v-row>
    <v-divider class="my-5"></v-divider>
  </v-container>

  
    <v-container>
      <v-row>
        <v-col cols="12" class="text-left text-h6 text-primary">
          <a href="" target="_blank">
          <img
            src="@/assets/team_logo/university-of-exeter-dark.svg"
            alt="Team Logo"
            class="team-logo"
          />
          </a>
          <p class="text-body-1"> 
            The University of Exeter team, a leading research entity in global carbon budgets and climate science based in the UK.
            </p>
          <p class="text-body-1">

          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          class="px-4"
          cols="12"
          md="4"
          v-for="member in exeter_team"
          :key="member.name"
        >
          <TeamMemberCard
            :name="member.name"
            :title="member.title"
            :description="member.description"
            :photo="member.photo"
            :homeUrl="member.homeUrl"
            :scholarUrl="member.scholarUrl"
            :githubUrl="member.githubUrl"
          />
        </v-col>
      </v-row>
    <v-divider class="my-5"></v-divider>
  </v-container>
  

  <v-container class="mb-10">
      <v-row>
        <v-col cols="12" class="text-left text-h6 text-primary">
          <a href="" target="_blank">
          <img
            src="@/assets/team_logo/Microsoft-logo_rgb_c-gray 1.png"
            alt="Team Logo"
            class="team-logo"
          />
          </a>
          <p class="text-body-1"> 
            The MSRA Machine Learning Group focuses on designing cutting-edge machine learning algorithms for real-world applications, including sustainability, finance, healthcare, and supply chain management.
Our team's responsibilities include predicting all datasets of terrestrial and oceanic carbon sinks from a lag of 1-2 years to near real-time (a lag of 2-3 months) with minimal error, using advanced deep learning methods and the support of data and domain knowledge from Tsinghua University. By leveraging historical data, near real-time environmental factors, and efficient AI methodologies, we are able to achieve near real-time predictions. The model training and prediction process takes less than a week, significantly reducing the time required for carbon sink forecasting.
            </p>
          <p class="text-body-1">

          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          class="px-4"
          cols="12"
          md="4"
          v-for="member in MS_team"
          :key="member.name"
        >
          <TeamMemberCard
            :name="member.name"
            :title="member.title"
            :description="member.description"
            :photo="member.photo"
            :homeUrl="member.homeUrl"
            :scholarUrl="member.scholarUrl"
            :githubUrl="member.githubUrl"
          />
        </v-col>
      </v-row>

  </v-container>

  </template>
  
  <script setup>
import team from "@/assets/team.json"; // Import the JSON data
import { ref } from "vue";

const LSCE_team = ref(team.filter((member) => member.institute === "LSCE"));

const exeter_team = ref(team.filter((member) => member.institute === "Exeter"));
const Tsinghua_team = ref(
  team.filter((member) => member.institute === "Tsinghua")
);
const MS_team = ref(team.filter((member) => member.institute === "Microsoft Research"));
</script>
  
  <style scoped>
.team-logo {
  max-height: 50px;
}
</style>
    