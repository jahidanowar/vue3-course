<template>
  <span>{{ cart.length }}</span>

  <div class="grid">
    <product
      v-for="product in products"
      :key="product.id"
      :title="product.title"
      :image="product.image"
      :price="product.price"
      :id="product.id"
      @cartclicked="addTocart"
    >
    </product>
  </div>
</template>

<script>
import axios from "axios";
import Product from "./../components/Product.vue";

export default {
  components: {
    Product,
  },
  data() {
    return {
      products: [],
      cart: [],
    };
  },
  mounted() {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        this.products = res.data;
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  },
  methods: {
    addTocart(id) {
      this.cart.push(id);
    },
  },
};
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  padding: 20px;
}
</style>
