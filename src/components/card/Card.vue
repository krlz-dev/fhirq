<style scoped src="./Card.css"/>

<template>
  <div class="card-container">
    <div class="project-card">
      <div class="card-project-preview">
      </div>
      <div class="card-project-content">
        <h4 class="card-project-title">{{ msg }}</h4>
        <p class="card-project-description">Lorem ipsum dolor sit amet, consetetur sadips<br>
          elitr, sed diam nonumy eirmod.</p>
        <button class="btn-primary" v-on:click="increment">
          View case {{ count }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import {mapState, mapMutations} from "vuex";

export default {
  name: 'Card',
  props: {
    msg: String
  },
  computed: mapState([
    'count'
  ]),
  methods: mapMutations([
    'increment'
  ])
}
</script>
