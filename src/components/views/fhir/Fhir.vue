<style scoped src="./Fhir.css"></style>
<template>
  <div>
    <Card msg="Fhir resource"/>
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