<template>
  <div class="viewport">
    <div class="white box"></div>
    <div class="black box"></div>
  </div>

  <div class="arrow-down" alt="" @click="scrollBtnOnClick()"></div>
</template>

<style >
.viewport {
  z-index: 0;
  height: 200vh;
  background-color: #000;
}

.box {
  position: fixed;
  height: 100%;

  top: 0;
  left: 0;
  right: 0;

  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.white {
  z-index: 10;

  /* background-color: #fff; */
  opacity: calc(1 - var(--scroll));
  background-image: url("src/assets/Onmyoji/Enmusubi-1.jpg");
  /* background-image: url("src/assets/Avengers.svg"); */
}
.black {
  z-index: 9;
  /* transition: all 1s ease-in-out; */
  /* background-color: #000; */
  opacity: var(--scroll);
  background-image: url("src/assets/Onmyoji/Enmusubi-2.jpg");
}

.arrow-down {
  z-index: 100;
  position: fixed;
  height: 80px;

  box-shadow: 20px 20px rgba(55, 55, 55, 0.4);

  bottom: 0;
  left: 0;
  right: 0;

  background-image: url("src/assets/Arrowdown.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  margin: 0 auto; /* Will not center vertically and won't work in IE6/7. */
}
</style>


<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Marvel",
  props: {},
  setup: (props) => {},
  data() {
    return {};
  },
  methods: {
    scrollBtnOnClick: () => {
      console.log("aaa");
    },
  },
});
</script>