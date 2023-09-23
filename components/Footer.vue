<template>
  <footer>
    <p></p>
    <p>
      Made with <font-awesome-icon :icon="['fas', 'heart']" class="red" /> in
      Toronto by <a href="http://thewebbeckons.ca">thewebbeckons</a>
    </p>
  </footer>
</template>

<script>
export default {}
</script>

<style>
footer {
  padding: 1rem;
  margin: 0 auto;
  text-align: center;
}
footer .red {
  color: #e61c25;
}
footer a {
  color: #e61c25;
  text-decoration: none;
}
</style>
