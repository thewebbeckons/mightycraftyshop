<template>
  <div class="container index-page">
    <HeroSection />
    <BoxSection />
    <h1 class="featured__heading">Featured Products</h1>
    <div class="featured__section">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        :addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products.filter(
        (product) => product.featured === true
      )
    },
  },
  methods: {
    addToCart() {
      this.$store.commit('addToCart')
    },
  },
}
</script>

<style>
.index-page {
  text-align: center;
}
.featured__heading {
  margin-bottom: 5rem;
  font-size: clamp(3rem, 5vh, 20px);
}
.featured__section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: auto;
  gap: 3rem;
  row-gap: 5rem;
  margin-bottom: 5rem;
  width: 100%;
}
</style>
