<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <Marvel />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Marvel from "./views/Marvel.vue";

window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      (window.pageYOffset / window.innerHeight).toFixed(3).toString()
    );
    console.log("offset", window.pageYOffset / window.innerHeight);
    console.log(window.innerHeight);
  },
  false
);

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    Marvel,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* height: 100vh; */
  /* margin-top: 60px; */
}
</style>