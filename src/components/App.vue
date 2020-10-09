<style scoped src="./App.css"></style>

<template>
  <div id="app">
    <Menu/>
    <router-link :to="'/'">Main</router-link>
    <router-link :to="'fhir'">Fhir</router-link>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import VueRouter from 'vue-router'
import Vue from 'vue'
import Menu from '@/components/menu/Menu.vue'
import store from '@/store'
import routes from '@/routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes
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
