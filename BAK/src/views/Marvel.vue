<template>
  <div :style="containerHeight" class="marvel">
    <!-- MASKS -->
    <div :style="firstLogo" class="scroll fullpage" id="marvel_logo"></div>
    <div :style="secondLogo" class="scroll fullpage" id="marvels_logo_inverse"></div>
    <div :style="placholderForMasks"></div>

    <div class="scroll fullpage" id="avengers_logo_inverse"></div>
    <div class="scroll fullpage" id="avengers_logo"></div>
    <!-- <div class="section" id="marvels_logo_inverse"></div>
    <div class="section" id="marvel_logo"></div>

    <div class="section" id="avengers_logo_inverse"></div>
    <div class="section" id="avengers_logo"></div>-->
    <!-- <HeroItem :hero="'Thanos'"/> -->
    <!-- <HeroItemHover :hero="'CaptainOfAmerican'"/> -->
  </div>
</template>


<script lang="ts">
import Vue from 'vue';
import HeroItem from '@/components/HeroItem.vue';
import HeroItemHover from '@/components/HeroItemHover.vue';
import Component from 'vue-class-component';

@Component({
  components: {
    HeroItem,
    HeroItemHover,
  },
  created() {
    // @ts-ignore
    window.addEventListener('scroll', (e) => {
      // @ts-ignore
      this.scroll = window.pageYOffset;
      console
        .log
        // (window.pageYOffset - window.innerHeight) / window.innerHeight,
        // this.scroll / window.innerHeight,
        ();
    });
  },
})
export default class Marvel extends Vue {
  public scroll: number = 0;

  public get containerHeight() {
    return {
      height: `${4 * window.innerHeight}px`,
    };
  }
  public get fillupViewport() {
    return {};
  }

  public get firstLogo() {
    return {
      opacity: `${
        this.scroll <= 1.25 * window.innerHeight
          ? 1 - this.scroll / window.innerHeight
          : 0
      }`,
    };
  }
  public get secondLogo() {
    return {
      opacity: `${this.scroll / window.innerHeight}`,
      // visible: this.
    };
  }

  public get placholderForMasks() {
    return {
      height: `${3.25 * window.innerHeight}px`,
    };
  }

  // public get RScrollingEffects() {
  //   return {
  //     // filter: `brightness(${this.scroll <= 500 ? 1 - this.scroll / 500 : 0})`,
  //     opacity: `${this.scroll <= 500 ? 0 : (this.scroll - 500) / 500}`,
  //   };
  // }

  public scrollHandler(e: any) {
    console.log(window.pageYOffset);
  }
}
</script>

<style lang="scss" scoped>
.flex.row {
  display: flex;
  flex-flow: row nowrap;
}
.fullpage {
  display: flex;
  flex-flow: column;
  justify-content: center;
  overflow: visible;
  height: 100vh;
  width: 100%;
  // border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  background-repeat: no-repeat;
  background-position: center;
  // background-size: auto;
}
.scroll {
  // background-attachment: fixed;
  // position: static;
}
.marvel {
  #marvel_logo {
    background-image: url('../assets/MarvelLogoWithBorder.svg');
    background-color: #ed1d24;
    background-size: 70vw;
    // height: 100vh;
    z-index: 9999;
    position: fixed;
  }
  #marvels_logo_inverse {
    background-image: url('../assets/MarvelLogoWithBorderInverse.svg');
    background-size: 70vw;
    background-color: #ffffff;
    position: fixed;
    // position: fixed;
  }
  #avengers_logo {
    background-image: url('../assets/Avengers.svg');
    background-size: 70vw;
    background-color: #23262a;
  }
  #avengers_logo_inverse {
    background-image: url('../assets/AvengersInverse.svg');
    background-size: 70vw;
    background-color: #d3d3d3;
  }

  .heroes {
    // transition: width 2ms ease-in-out;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
    background-image: url('../assets/AvengersLogo.svg');
    background-attachment: fixed;
    background-size: 25vw;
    background-position-x: 10px;
    background-color: #23262a;
  }
  #IornManBelow {
    background-image: url('../assets/IornMan-01.jpg');
    #IornManAbove {
      background-image: url('../assets/IornMan-02.jpg');
    }
  }
  #CapOfAmericanBelow {
    background-image: url('../assets/CaptainOfAmerican-01.jpg');
    #CapOfAmericanAbove {
      background-image: url('../assets/CaptainOfAmerican-02.jpg');
    }
  }
}
</style>

