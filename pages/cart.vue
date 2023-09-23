<template>
  <div class="container">
    <div v-if="this.$store.state.cart.length === 0">
      Your cart is empty!
      <nuxt-link to="/shop">Go add some products!</nuxt-link>
    </div>
    <ul>
      <li
        v-for="(product, index) in this.$store.state.cart"
        :key="product.slug"
      >
        {{ product.slug }} - {{ product.price }} -
        <font-awesome-icon
          :icon="['far', 'trash-alt']"
          @click="removeFromCart(index)"
        />
      </li>
    </ul>
    <h2 v-if="this.$store.state.cart.length > 0">Total: ${{ total }}</h2>
  </div>
</template>

<script>
export default {
  computed: {
    total() {
      return this.$store.state.cart.reduce(
        (total, product) => total + product.price,
        0
      )
    },
  },
  methods: {
    removeFromCart(index) {
      this.$store.dispatch('removeItem', index)
    },
  },
}
</script>

<style scoped>
h2 {
  margin-top: 2rem;
}
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
  padding: 0.5rem 0;
}
</style>
