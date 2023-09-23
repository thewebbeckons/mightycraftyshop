<template>
  <div class="card">
    <img
      :src="product.img"
      :alt="product.title"
      @click="$router.push({ path: `/product/${product.slug}` })"
    />
    <h1>
      <span>{{ product.title }}</span>
    </h1>
    <p>
      <span>From ${{ product.price | currency }}</span>
    </p>
    <p @click="addToCart(product)"><span>Add to Cart</span></p>
  </div>
</template>

<script>
export default {
  props: ['product'],
  filters: {
    currency(value) {
      const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
      })
      return formatter.format(value)
    },
  },
  methods: {
    addToCart(product) {
      this.$store.commit('addToCart', product)
    },
  },
}
</script>

<style>
.card {
  position: relative;
  text-align: center;
  cursor: pointer;
}
.card img {
  object-fit: contain;
  max-width: 100%;
}
.card h1 {
  font-family: 'Karla', Verdana, Geneva, Tahoma, sans-serif;
  top: 0px;
  transform: rotate(-2deg) translateY(-10px);
  position: absolute;
  width: 100%;
  left: 0px;
  margin: 0px;
  font-size: clamp(12px, 5vw, 20px);
  color: #444;
}
.card h1 span {
  padding: 3px 10px;
  background-color: #fff;
  border: dashed 3px #e61c25;
  box-shadow: 0 3px 5px 0 rgba(206, 205, 205, 0.5);
  margin: 0px;
  display: inline;
  line-height: 1;
}
.card p:nth-of-type(1) {
  font-size: clamp(12px, 5vw, 20px);
  position: absolute;
  transform: rotate(2deg) translateY(10px);
  bottom: 0;
  left: 0px;
  color: #444;
}
.card p:nth-of-type(1) span {
  padding: 5px 15px;
  background-color: #fff;
  box-shadow: 0 5px 10px 0 #f9f9f9;
  line-height: 1;
}
.card p:nth-of-type(2) {
  font-size: clamp(12px, 5vw, 20px);
  position: absolute;
  transform: rotate(-2deg) translateY(10px);
  bottom: 0;
  right: 0px;
  color: #fff;
}
.card p:nth-of-type(2) span {
  padding: 5px 15px;
  background-color: #e61c25;
  box-shadow: 0 5px 10px 0 #f9f9f9;
  line-height: 1;
}
</style>
