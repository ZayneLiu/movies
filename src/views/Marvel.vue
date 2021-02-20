<template>
  <div class="marvel">
    <CoverPageCircle />
  </div>
</template>

<style >
.marvel {
  z-index: 0;
  /* height: fit-content; */
  /* background-color: #000; */
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
import CoverPageCircle from "../components/CoverPageCircle.vue";

export default defineComponent({
  name: "Marvel",
  components: {
    CoverPageCircle,
  },
  props: {},
  setup: (props) => {},
  data() {
    return {};
  },
  methods: {},
});
</script>