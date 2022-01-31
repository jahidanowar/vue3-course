<template>
  <div class="product">
    <img :src="image" />
    <h3>{{ title }}</h3>
    <p class="price">${{ price }}</p>
    <slot></slot>
    <button class="btn" @click="handleAddToCart">Add to cart</button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Title not found",
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    id: Number,
  },
  methods: {
    handleAddToCart() {
      // console.log(this.id);
      this.$emit("cartclicked", this.id);
    },
  },
};
</script>

<style>
.product {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 10px;
  border-radius: 5px;
}
.product h3 {
  font-size: 0.8rem;
}
.product img {
  width: 100%;
  height: 200px;
}
.product .price {
  font-size: 0.7rem;
  font-weight: bold;
  margin: 0.5rem 0;
  color: #5936f4;
}
.btn {
  width: 100%;
  background: #5936f4;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
