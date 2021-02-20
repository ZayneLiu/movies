<template>
  <div class="page-circle">
    <div class="top-circle layer-circle"></div>
    <div class="bottom-circle layer-circle"></div>
  </div>
</template>

<style>
.page-circle {
  z-index: 1;
  height: 200vh;
  position: sticky;
}

.layer-circle {
  position: fixed;

  height: 100%;

  top: 0;
  left: 0;
  right: 0;

  background-position: center;
  background-size: 70%;
  background-repeat: no-repeat;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.top-circle {
  z-index: 10;

  background-color: #23262a;
  background-image: url("src/assets/Marvel/Avengers.svg");
  clip-path: circle(calc(100% - var(--scroll) * 100%));
}
.bottom-circle {
  position: fixed;
  z-index: 9;

  background-color: #d3d3d3;
  background-image: url("src/assets/Marvel/AvengersInverse.svg");
}
</style>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CoverPageCircle",
  props: {},
  setup: (props) => {},
  data() {
    return {};
  },
  methods: {},
});
</script>