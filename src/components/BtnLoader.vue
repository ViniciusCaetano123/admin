<template>
  <div>
      <span v-if="!$store.state.spiner"> {{nome}} </span>  <b-spinner v-else variant="success" label="Spinning" style="color: #fff !important;width: 20px;height: 20px;" ></b-spinner> 
  </div>
</template>

<script>

export default {
props:['nome']
}
</script>

<style>

</style>