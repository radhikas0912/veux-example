<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
      <ProductListOne v-bind:products="products"></ProductListOne>
      <ProductListTwo v-bind:products="products"></ProductListTwo>
  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne.vue'
import ProductListTwo from './components/ProductListTwo.vue'

export default {
  name: 'app',
  data() {
    return {
     
    }
  },
  components: {
    ProductListOne, ProductListTwo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
