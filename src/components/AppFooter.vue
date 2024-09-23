<template>
  <v-footer padless>
      <v-col align="center" cols="6"> PAPER LINK </v-col>
        <v-col class="text-center" cols="6">
          <span>Website developed by</span>
          <a
            href="https://defve1988.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            class="jellyfish"
          >
            Defve
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
  background-color: #252525ca;
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
