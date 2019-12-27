<template>
  <div id="product-list-two">
    <h2> Product List Two </h2>
    <ul>
        <li v-for="(product,index) in products" :key="index"> 
            <span class="name">{{ product.name }} </span>
            <span class="price">{{ product.price }} </span>
        </li>
    </ul>
  </div>
</template>

<script>


export default {
  name: 'app',
  computed: {
      products() {
          return this.$store.state.products
      }
  }
}
</script>

<style scoped>
#product-list-two {
  width: 500px;
  height: auto;
  background-color: cadetblue;
  padding: 5px;
  margin: 0 auto;
  margin-top: 20px;
}
li {
  list-style-type: none;
}
</style>
