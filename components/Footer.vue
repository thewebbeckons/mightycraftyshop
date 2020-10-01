<template>
  <footer>
    <p></p>
    <p>Made with <font-awesome-icon :icon="['fas', 'heart']" class="red"/> in Toronto by <a href="http://thewebbeckons.ca">thewebbeckons</a></p>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
footer {
  padding: 1rem;
  margin: 0 auto;
  text-align: center;
  .red {
    color: $primary;
  }
  a {
    color: $primary;
    text-decoration: none;
  }
}
</style>