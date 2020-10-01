<template>
  <div class="hero">
    <img src="~/assets/featured.webp" class="hero__img" alt="Photo by Jo Szczepanska">        
    <div class="hero__content">
      <h1>About</h1>
      <p>
        Mighty Crafty Shop is where savvy shoppers of all interior styles discover an ever 
        changing and evolving selection of home decor, fashion wear, drinkware, and custom 
        signs, from far and wide. Our selection is unique, and there’s something for 
        everyone to enjoy.
      </p>
      <p>
        We believe that your home should reflect your own personal style. Each corner of your
         life should be eye-catching and unique, just like you. Mighty Crafty Shop is a homemade
          craft store, dedicated to helping our customers discover their own design personality.
           Browse through our wide selection today to find just what you have been searching for
            and have it customized just for you!
      </p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">  
.hero {
  width: 100%;
  margin: 10vh 0 15vh;
  position: relative;
  min-height: 100px;
  &__img {
    width: 100%;
    object-fit: contain;
    clip-path: polygon(2% 5%, 100% 0, 100% 100%, 5% 95%);
    transform: translateX(-20px); 
  }
  &__content {
    position: absolute;
    top:0;
    right:10%;
    background-color: $white;
    max-width: 40%;
    padding: 3rem;
    border: dashed 5px $primary;
    transform: rotate(-3deg) translateY(-20px);
    h1 {      
      transform: rotate(3deg);
      font-size: clamp(1.7rem, 5vw, 3rem);
      margin-bottom: 1rem;
    }
    p {
      line-height: 1.6rem;
      transform: rotate(3deg);      
      font-size: clamp(0.8rem, 15px, 1.5rem);
      &:first-of-type {
        margin-bottom: 1rem;
      }
    }
  }
}
@media screen and (max-width: 1025px) {
  .hero {
    width: 100%;
    margin: 10vh 0 10vh;
    &__img {
      width: 100%;
      object-fit: contain;
      clip-path: polygon(2% 5%, 100% 0, 100% 100%, 5% 95%);
      transform: translateX(-20px); 
    }
    &__scissors {
      position: absolute;
      color: $primary;
      bottom: 0;
      left: 5%;
      z-index: 1;
      font-size: 3rem;
    }
    &__content {    
      background-color: $white;
      max-width: 70%;
      padding: 2rem;
      border: dashed 5px $primary;
      transform: rotate(-3deg) translateY(-20px);
      h1 {      
        transform: rotate(3deg);
        margin-bottom: 1rem;
      }
      p {
        line-height: 1.6rem;
        transform: rotate(3deg); 
      }
    }
  }
}
@media screen and (max-width: 786px) {
    .hero {
    width: 100%;
    margin: 5vh 0 10vh;
    position: relative;
    &__img {
      position: initial;
      transform: translateX(-10px); 
    }
    &__scissors {
      display: none;
    }
    &__content {
      position: initial;
      max-width: 100%;
      transform: translateY(-40px);
      h1 {
        transform: none;
      }
      p {
        transform: none;
      }
    }
  }
}
</style>