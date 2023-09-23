<template>
  <div class="container">
    <h1 class="shop__heading">Placeholder for filters</h1>
    <div class="shop__section">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filters: null,
      activeFilter: null,
    }
  },
  computed: {
    products() {
      if (this.filters) {
        return this.$store.state.products.includes(
          (product) => product.category === this.activeFilter
        )
      }
      return this.$store.state.products
    },
  },
}
</script>

<style>
.shop__heading {
  margin: 5rem 0;
  font-size: clamp(3rem, 5vh, 20px);
}
.shop__section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: auto;
  gap: 3rem;
  row-gap: 5rem;
  margin-bottom: 5rem;
  width: 100%;
}
</style>
