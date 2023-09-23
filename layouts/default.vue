<template>
  <div v-if="this.$store.state.loaded" class="content">
    <Navigation />
    <transition
      name="fade"
      mode="out-in"
      @beforeLeave="beforeLeave"
      @enter="enter"
      @afterEnter="afterEnter"
    >
      <Nuxt />
    </transition>
    <Footer />
    <FloatingCart />
  </div>
</template>

<script>
export default {
  data() {
    return {
      prevHeight: 0,
    }
  },
  mounted() {
    if (!this.$store.state.loaded) {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        this.loaded()
        setTimeout(() => this.$nuxt.$loading.finish(), 1000)
      })
    }
  },
  methods: {
    loaded() {
      this.$store.commit('loaded')
    },
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height
    },
    enter(element) {
      const { height } = getComputedStyle(element)

      element.style.height = this.prevHeight

      setTimeout(() => {
        element.style.height = height
      })
    },
    afterEnter(element) {
      element.style.height = 'auto'
    },
  },
}
</script>

<style>
html {
  font-family: 'Karla', Verdana, Geneva, Tahoma, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.container {
  margin: 0 auto;
  max-width: 1200px;
}
.content {
  padding: 3rem 1rem;
  border: solid 10px #e61c25;
  min-height: 100vh;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
