<style scoped src="./App.css"></style>

<template>
  <div id="app">
    <Menu/>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import Menu from './menu/Menu.vue'
import store from '../store'
import VueRouter from 'vue-router'
import Main from "./views/main/Main";
import Vue from 'vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/main', component: Main},
  ]
});

export default {
  name: 'App',
  store,
  router,
  components: {
    Menu
  }
}
</script>
