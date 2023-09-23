<template>
  <div class="hero">
    <img
      src="~/assets/featured.webp"
      class="hero__img"
      alt="Photo by Jo Szczepanska"
    />
    <div class="hero__content">
      <h1>About</h1>
      <p>
        Mighty Crafty Shop is where savvy shoppers of all interior styles
        discover an ever changing and evolving selection of home decor, fashion
        wear, drinkware, and custom signs, from far and wide. Our selection is
        unique, and there’s something for everyone to enjoy.
      </p>
      <p>
        We believe that your home should reflect your own personal style. Each
        corner of your life should be eye-catching and unique, just like you.
        Mighty Crafty Shop is a homemade craft store, dedicated to helping our
        customers discover their own design personality. Browse through our wide
        selection today to find just what you have been searching for and have
        it customized just for you!
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.hero {
  width: 100%;
  margin: 10vh 0 15vh;
  position: relative;
  min-height: 100px;
}
.hero__img {
  width: 100%;
  object-fit: contain;
  clip-path: polygon(2% 5%, 100% 0, 100% 100%, 5% 95%);
  transform: translateX(-20px);
}
.hero__content {
  position: absolute;
  top: 0;
  right: 10%;
  background-color: #fff;
  max-width: 40%;
  padding: 3rem;
  border: dashed 5px #e61c25;
  transform: rotate(-3deg) translateY(-20px);
}
.hero__content h1 {
  transform: rotate(3deg);
  font-size: clamp(1.7rem, 5vw, 3rem);
  margin-bottom: 1rem;
}
.hero__content p {
  line-height: 1.6rem;
  transform: rotate(3deg);
  font-size: clamp(0.8rem, 15px, 1.5rem);
}
.hero__content p:first-of-type {
  margin-bottom: 1rem;
}
@media screen and (max-width: 1025px) {
  .hero {
    width: 100%;
    margin: 10vh 0 10vh;
  }
  .hero__img {
    width: 100%;
    object-fit: contain;
    clip-path: polygon(2% 5%, 100% 0, 100% 100%, 5% 95%);
    transform: translateX(-20px);
  }
  .hero__scissors {
    position: absolute;
    color: #e61c25;
    bottom: 0;
    left: 5%;
    z-index: 1;
    font-size: 3rem;
  }
  .hero__content {
    background-color: #fff;
    max-width: 70%;
    padding: 2rem;
    border: dashed 5px #e61c25;
    transform: rotate(-3deg) translateY(-20px);
  }
  .hero__content h1 {
    transform: rotate(3deg);
    margin-bottom: 1rem;
  }
  .hero__content p {
    line-height: 1.6rem;
    transform: rotate(3deg);
  }
}
@media screen and (max-width: 786px) {
  .hero {
    width: 100%;
    margin: 5vh 0 10vh;
    position: relative;
  }
  .hero__img {
    position: initial;
    transform: translateX(-10px);
  }
  .hero__scissors {
    display: none;
  }
  .hero__content {
    position: initial;
    max-width: 100%;
    transform: translateY(-40px);
  }
  .hero__content h1 {
    transform: none;
  }
  .hero__content p {
    transform: none;
  }
}
</style>
