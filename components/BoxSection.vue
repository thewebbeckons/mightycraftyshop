<template>
  <div class="boxes">
    <div class="box">
      <div class="box__icon">
        <font-awesome-icon :icon="['far', 'calendar-check']" class="fa-3x" />
      </div>
      <h2 class="box__title">24/7 Customer Service</h2>
      <p class="box__content">Call us anytime!</p>
      <font-awesome-icon :icon="['fas', 'cut']" class="box__scissors" />
    </div>
    <div class="box">
      <div class="box__icon">
        <font-awesome-icon :icon="['fas', 'laptop-medical']" class="fa-3x" />
      </div>
      <h2 class="box__title">Easy Online Returns</h2>
      <p class="box__content">Send within 30 days</p>
      <font-awesome-icon :icon="['fas', 'cut']" class="box__scissors" />
    </div>
    <div class="box">
      <div class="box__icon">
        <font-awesome-icon :icon="['fas', 'shipping-fast']" class="fa-3x" />
      </div>
      <h2 class="box__title">Free shipping in Ontario</h2>
      <p class="box__content">Delivery in 4 days!</p>
      <font-awesome-icon :icon="['fas', 'cut']" class="box__scissors" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.boxes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: auto;
  gap: 3rem;
  row-gap: 5rem;
  margin-bottom: 5rem;
  width: 100%;
}
.box {
  border: dashed 3px #444;
  padding: 2rem;
  position: relative;
}
.box__icon {
  color: #e61c25;
  margin-bottom: 1rem;
}
.box__scissors {
  position: absolute;
  bottom: -14px;
  left: 15px;
  font-size: 25px;
  color: #444;
}
.box__title {
  text-transform: uppercase;
  font-size: 1.4rem;
  margin-bottom: 1rem;
}
.box__content {
  font-size: 1rem;
  margin-bottom: 1rem;
}
</style>
