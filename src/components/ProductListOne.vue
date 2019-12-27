<template>
  <div id="product-list-one">
    <h2> Product List One </h2>
    <ul>
        <li v-for="(product,index) in saleProducts" :key="index"> 
            <span class="name">{{ product.name }} </span>
            <span class="price">{{ product.price }} </span>
        </li>
    </ul>
    <button @click="reducePrice(4)">Reduce Price</button>
  </div>
</template>

<script>


export default {
  name: 'app',
  computed: {
      products() {
          return this.$store.state.products
      },
      saleProducts() {
          return this.$store.getters.saleProducts
      }
  },
  methods: {
    reducePrice: function(amount) {
      this.$store.dispatch('reducePrice', amount)
    }
  }
}
</script>

<style>
#product-list-one {
  width: 500px;
  height: auto;
  background-color: coral;
  padding: 5px;
  margin: 0 auto;
  margin-top: 20px;
}
li {
  list-style-type: none;
}
</style>
