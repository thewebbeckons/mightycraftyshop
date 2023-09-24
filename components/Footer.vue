<template>
  <footer>
    <p></p>
    <p>
      Made with <font-awesome-icon :icon="['fas', 'coffee']" class="brown" /> in
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
footer .brown {
  color: #3e3737;
}
footer a {
  color: #e61c25;
  text-decoration: none;
}
</style>
