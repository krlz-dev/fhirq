<style scoped src="./Main.css"></style>
<template>
  <div>
    <Card msg="Welcome Main!!"/>
  </div>
</template>
<script>
import Card from '../../card/Card'
import store from '../../../store'

export default {
  name: 'Main',
  store,
  components: {
    Card
  }
}
</script>