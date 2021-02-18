<template>
  <div :id="this.hero" class="heroes item">
    <div :id="this.hero+'Below'" :style="outerStyle" class="heroes scroll">
      <!-- @mousemove.self="backgroundHover($event)"
      @mouseout.self="resetWidth($event)"-->
      <div :id="this.hero+'Above'" :style="innerStyle" class="heroes scroll"></div>
      <!-- @mousemove.self="backgroundHover($event)"
      @mouseout.self="resetWidth($event)"-->
    </div>
    <main>
      <!-- <div class="masthead__container masthead__container_playing-false">
        <h1>
          <span class="masthead__eyebrow">Bruce Banner</span>
          <span class="masthead__headline">Hulk</span>
        </h1>
        <div
          class="masthead__copy"
        >Dr. Bruce Banner lives a life caught between the soft-spoken scientist he’s always been and the uncontrollable green monster powered by his rage.</div>
      </div>-->
    </main>
  </div>
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
  // :nth-child(1) {
  //   clip-path: polygon(27% 0, 100% 0, 100% 100%, 27% 100%, 30% 50%);
  // }
}

main {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  margin-top: -100vh;
  background: transparent;
}

// #Hero {
//   background-image: url('../assets/IornMan-01.jpg');
//   #HeroInverse {
//     background-image: url('../assets/IornMan-02.jpg');
//   }
// }
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class HeroItem extends Vue {
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
  private resetWidth(e: Event) {
    // console.log(e.srcElement ? e.srcElement.id : '');
    // @ts-ignore-nextline
    const id = e.srcElement ? e.srcElement.id : '';
    const div = document.getElementById(id);
    if (div) {
      if (div.firstElementChild) {
        const above = document.getElementById(div.firstElementChild.id);
        if (above) {
          above.style.width = '100vw';
        }
      } else {
        div.style.width = '100vw';
      }
    }
    // DEBUG
    // console.log(e.srcElement);
  }
  private backgroundHover(e: MouseEvent) {
    // @ts-ignore-nextline
    const id = e.srcElement ? e.srcElement.id : '';
    // console.log(id);
    const div = document.getElementById(id);
    if (div) {
      if (div.childElementCount === 0) {
        div.style.width = e.x + 'px';
      }
      const temp = div.firstElementChild;
      if (temp) {
        // console.log(temp.id);
        const innerDiv = document.getElementById(temp.id);
        if (innerDiv) {
          innerDiv.style.width = e.x + 'px';
        }
      }
    }
  }
}
</script>
