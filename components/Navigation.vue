<template>
  <nav>
      <div class="nav-link"><nuxt-link to="/">Home</nuxt-link></div>
      <div class="nav-link"><nuxt-link to="/shop">Shop</nuxt-link></div>
      <div class="logo"><nuxt-link to="/"><Logo /></nuxt-link></div>
      <div class="nav-link"><nuxt-link to="/contact">Contact</nuxt-link></div>
      <div class="nav-link"><nuxt-link to="/cart">Cart <span v-if="this.$store.state.cart.length > 0">{{ this.$store.state.cart.length }}</span></nuxt-link></div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss">
nav {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  div {
    text-align: center;
    font-family: $font;
    font-size: clamp(18px, 5vw, 20px);
    &.nav-link {
      &:nth-of-type(odd) {
        transform: rotate(-2deg);
        &:hover {
          transform: rotate(2deg);
        }
      }
      &:nth-of-type(even) {
        transform: rotate(1deg);
        &:hover {
          transform: rotate(-3deg);
        }
      }
    }
    & .nuxt-link-exact-active {
      color: $primary;
    }
    a {
      text-decoration: none;
      font-weight: bold;
      color: $dark;
      &:hover {
        color: $primary;
      }
      & span {
        display: inline-block;
        background: $primary;
        color: $white;
        border-radius: 1rem;
        width: 1.5rem;
        height: 1.5rem;
        font-size: 1rem;
        line-height: 1.5rem;
        text-align: center;
        vertical-align: middle;
      }  
    }
  } 
}
@media screen and (max-width: 1025px) {
  .logo {
    display:none;
  }
}

</style>