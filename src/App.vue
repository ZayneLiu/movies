<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/marvel">Marvel</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
:root,
body {
  height: 100%;

  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // padding: 50px 0 0 0;
}
#nav {
  // position: sticky;
  position: absolute;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  top: 0;
  // padding: 30px;

  // height: 50px;
  a {
    display: block;
    line-height: 50px;
    font-weight: bold;
    color: #2c3e50;
    &:hover {
    }
    &.router-link-exact-active {
      // color: #42b983;
    }
  }
}
</style>
