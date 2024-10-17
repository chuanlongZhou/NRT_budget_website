<template>
  <v-footer padless height="300px">
    <v-col align="center" cols="6">
      <img
      src="@/assets/logos/ipsl.png"
      alt="Calipso Dark Icon"
      height="60"
      class="mx-4"
    />
    <img
      src="@/assets/logos/log1.png"
      alt="Calipso Dark Icon"
      height="60"
      class="mx-4"
    />
    <img
      src="@/assets/logos/university-of-exeter-dark.svg"
      alt="Calipso Dark Icon"
      height="60"
      class="mx-4"
    />


    </v-col>
    <v-col class="text-center" cols="6">
      <p>PAPER LINK</p>
      <p> ...</p>
      
      <p>Other information</p>
      <p> ... </p>

      <span>Website created by</span>
      <a
        href="https://defve1988.github.io/"
        target="_blank"
        rel="noopener noreferrer"
        class="jellyfish"
      >
        Chuanlong Zhou
        <v-icon class="jellyfish">mdi-jellyfish</v-icon>
      </a>
      @LSCE, 2024
    </v-col>
  </v-footer>
</template>

<script>
</script>

<style scoped>
/* You can customize footer styles here */
.v-footer {
  background-color: #178735;
}

a {
  color: #ebce2c;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.v-icon {
  vertical-align: middle;
}

.jellyfish {
  color: #ebce2c;
  transition: color 0.3s;
}
.jellyfish:hover {
  color: #42d940;
  transform: scale(1.2);
}
</style>
