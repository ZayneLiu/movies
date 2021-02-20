<template>
  <div class="page">
    <div class="top-grow layer-grow"></div>
    <div class="bottom-grow layer-grow"></div>
  </div>
</template>

<style>
.page {
  z-index: 1;
  height: 200vh;
  position: sticky;
}
.layer-grow {
  /* position: fixed; */

  height: 100%;

  background-position: center;
  background-size: 70%;
  background-repeat: no-repeat;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.top-grow {
  z-index: 10;
  /* opacity: 1; */
  background-color: #fff;
  background-image: url("src/assets/Marvel/MarvelLogoWithBorder.svg");
}
.bottom-grow {
  z-index: 9;
  /* opacity: 1; */
  background-color: #fff;
  background-image: url("src/assets/Marvel/MarvelLogoWithBorderInverse.svg");
}
</style>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CoverPageGrow",
  props: {},
  setup: (props) => {},
  data() {
    return {};
  },
  methods: {},
});
</script>