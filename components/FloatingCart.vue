<template>
  <div v-if="this.$store.state.cart.length > 0" class="cart" @click="$router.push({name: 'cart'})">
    <div class="cart__container">
      <font-awesome-layers class="fa-3x">
        <font-awesome-icon :icon="['fas', 'circle']"/>
        <font-awesome-icon :icon="['fas', 'shopping-bag']" transform="shrink-8" :style="{ color: 'white' }"/>
      </font-awesome-layers>    
      <span>{{ this.$store.state.cart.length }}</span>
    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.cart {
  position: fixed;
  z-index: 99;
  bottom: 30px;
  right: 30px;
  color: #0e0e0e;
  transition: opacity 0.5s ease-in;
  cursor: pointer;
  &__container {
    position: relative;
    span {
      position: absolute;
      top:-0.5rem;
      right:-0.5rem;
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
</style>
