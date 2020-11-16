<template>
  <div id="app">
    <NavBar/>
    <b-container class="text-left">
      <router-view/>
    </b-container>
    <div v-if="loading" class="loading">
      <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>      
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator';
  import NavBar from '@/components/navbar/navbar.vue';
  import { Getter } from 'vuex-class';

  @Component({
    components: {
      NavBar
    }
  })
  export default class App extends Vue {
    @Getter loading!: boolean;
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.loading{
  position:fixed;
  background:rgba(0,0,0,0.6);
  top:0;
  left:0;
  width:100%;
  height:100%;
  display:flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
</style>
