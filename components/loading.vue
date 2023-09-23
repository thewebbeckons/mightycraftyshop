<template>
  <div class="loading-page" v-if="loading">
    <div class="lds-heart">
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>

<style>
.loading-page {
  position: fixed;
  border: solid 10px #e61c25;
  min-height: 100vh;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background: rgba(255, 255, 255, 1);
  text-align: center;
  font-size: 30px;
  font-family: sans-serif;
  transition: all 0.5 ease-out;
}
.lds-heart {
  display: inline-block;
  position: relative;
  top: 50%;
  width: 80px;
  height: 80px;
  transform: rotate(45deg);
  transform-origin: 40px 40px;
}
.lds-heart div {
  top: 32px;
  left: 32px;
  position: absolute;
  width: 32px;
  height: 32px;
  background: #e61c25;
  animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
}
.lds-heart div:after,
.lds-heart div:before {
  content: ' ';
  position: absolute;
  display: block;
  width: 32px;
  height: 32px;
  background: red;
}
.lds-heart div:before {
  left: -24px;
  border-radius: 50% 0 0 50%;
}
.lds-heart div:after {
  top: -24px;
  border-radius: 50% 50% 0 0;
}
@keyframes lds-heart {
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(1.1);
  }
  39% {
    transform: scale(0.85);
  }
  45% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.9);
  }
}
</style>
