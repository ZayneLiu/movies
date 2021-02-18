<template>
  <div :id="this.hero" class="item">
    <div :id="this.hero+'Below'" :style="outerStyle" class="heroes scroll">
      <div :id="this.hero+'Above'" :style="innerStyle" class="heroes scroll"></div>
    </div>
  </div>
  <!-- @mousemove.self="backgroundHover($event)"
  @mouseout.self="resetWidth($event)"-->
</template>

<style lang="scss" scoped>
.scroll {
  background-attachment: fixed;
}
.heroes {
  // transition: width 2ms ease-in-out;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
}

.item:hover {
  > div {
    width: 0;
    > div {
      width: 100vw;
    }
    // div:nth-child(1) {
    //   width: 100vw;
    // }
  }
}
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class HeroItemHover extends Vue {
  @Prop()
  public hero?: string;

  public outerStyle = {
    'background-image':
      'url(' + require('@/assets/' + this.hero + '-01.jpg') + ')',
  };
  public innerStyle = {
    'background-image':
      'url(' + require('@/assets/' + this.hero + '-02.jpg') + ')',
  };
  //   private resetWidth(e: Event) {
  //     // console.log(e.srcElement ? e.srcElement.id : '');
  //     const id = e.srcElement ? e.srcElement.id : '';
  //     const div = document.getElementById(id);
  //     if (div) {
  //       if (div.firstElementChild) {
  //         const above = document.getElementById(div.firstElementChild.id);
  //         if (above) {
  //           above.style.width = '100vw';
  //         }
  //       } else {
  //         div.style.width = '100vw';
  //       }
  //     }
  //     // DEBUG
  //     // console.log(e.srcElement);
  //   }
  //   private backgroundHover(e: MouseEvent) {
  //     const id = e.srcElement ? e.srcElement.id : '';
  //     // console.log(id);
  //     const div = document.getElementById(id);
  //     if (div) {
  //       if (div.childElementCount === 0) {
  //         div.style.width = e.x + 'px';
  //       }
  //       const temp = div.firstElementChild;
  //       if (temp) {
  //         // console.log(temp.id);
  //         const innerDiv = document.getElementById(temp.id);
  //         if (innerDiv) {
  //           innerDiv.style.width = e.x + 'px';
  //         }
  //       }
  //     }
  //   }
}
</script>
