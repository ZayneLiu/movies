<template>
  <div class="marvel" id="fullpage">
    <div class="scroll fullpage" id="marvels_logo_inverse"></div>
    <div class="scroll fullpage" id="marvel_logo"></div>

    <div class="scroll fullpage" id="avengers_logo_inverse"></div>
    <div class="scroll fullpage" id="avengers_logo"></div>
    <!-- <div class="section" id="marvels_logo_inverse"></div>
    <div class="section" id="marvel_logo"></div>

    <div class="section" id="avengers_logo_inverse"></div>
    <div class="section" id="avengers_logo"></div>-->
    <HeroItem :hero="'IornMan'"/>
    <HeroItem :hero="'CaptainOfAmerican'"/>
    <HeroItem :hero="'BlackWidow'"/>
    <HeroItem :hero="'Hulk'"/>
    <HeroItem :hero="'HawkEye'"/>
    <HeroItem :hero="'Thor'"/>
    <HeroItem :hero="'Loki'"/>
    <HeroItem :hero="'Vision'"/>
    <HeroItem :hero="'ScarletWitch'"/>
    <HeroItem :hero="'Thanos'"/>
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
})
export default class Marvel extends Vue {}
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
  // border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  background-repeat: no-repeat;
  background-position: center;
}
.scroll {
  background-attachment: fixed;
}
.marvel {
  #marvel_logo {
    background-image: url('../assets/MarvelLogoWithBorder.svg');
    background-color: #ed1d24;
    background-size: 70vw;
  }
  #marvels_logo_inverse {
    background-image: url('../assets/MarvelLogoWithBorderInverse.svg');
    background-size: 70vw;
    background-color: #ffffff;
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

