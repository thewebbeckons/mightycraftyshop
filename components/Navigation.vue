<template>
  <nav>
    <div class="nav-link"><nuxt-link to="/">Home</nuxt-link></div>
    <div class="nav-link"><nuxt-link to="/shop">Shop</nuxt-link></div>
    <div class="logo">
      <nuxt-link to="/"><Logo /></nuxt-link>
    </div>
    <div class="nav-link"><nuxt-link to="/contact">Contact</nuxt-link></div>
    <div class="nav-link">
      <nuxt-link to="/cart"
        >Cart
        <span v-if="this.$store.state.cart.length > 0">{{
          this.$store.state.cart.length
        }}</span></nuxt-link
      >
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style>
nav {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
}
nav div {
  text-align: center;
  font-family: 'Karla', Verdana, Geneva, Tahoma, sans-serif;
  font-size: clamp(18px, 5vw, 20px);
}
nav div.nav-link:nth-of-type(odd) {
  transform: rotate(-2deg);
}
nav div.nav-link:nth-of-type(odd):hover {
  transform: rotate(2deg);
}
nav div.nav-link:nth-of-type(even) {
  transform: rotate(1deg);
}
nav div.nav-link:nth-of-type(even):hover {
  transform: rotate(-3deg);
}
nav div .nuxt-link-exact-active {
  color: #e61c25;
}
nav div a {
  text-decoration: none;
  font-weight: bold;
  color: #444;
}
nav div a:hover {
  color: #e61c25;
}
nav div a span {
  display: inline-block;
  background: #e61c25;
  color: #fff;
  border-radius: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
  vertical-align: middle;
}
@media screen and (max-width: 1025px) {
  .logo {
    display: none;
  }
}
</style>
