<template>
  <div class="product container">
    <div class="product__image">
      <img :src="product.img" :alt="product.title">    
    </div>
    <div class="product__content">
      <h1>{{ product.title }}</h1>
      <h2>From ${{ product.price | currency }}</h2>
      <p>Available Attributes</p>
      <ul>
        <li v-for="attribute in product.attributes" :key="attribute">{{ attribute }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    currency (value) {
      const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2
      })
      return formatter.format(value)
    }
  },
  computed: {
    product () {
      return this.$store.state.products.find(product => product.slug === this.$route.params.slug)
    },
    theProduct () {
      return this.$route.params.slug
    }
  }
}
</script>

<style lang="scss">
.product {
  padding: 5rem 0;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 3rem;
  &__image {
    object-fit: contain;    
    img {
      width: 100%;
    }
  }
  &__content {
    h1 {
      color: $white;
      background-color: $primary;
      text-align: center;
      padding: 0.5rem 1rem;
      transform: rotate(-3deg);
      margin-bottom: 1.5rem;
    }
    h2 {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
  }
}
</style>