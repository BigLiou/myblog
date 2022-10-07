<template>
  <div class="lottie" ref="lottie"></div>
</template>

<script>
import lottie from 'lottie-web'
import planeJson from './plane.json'
export default {
  name: 'lottie',
  data() {
    return {}
  },
  components: {},
  mounted() {
    this.initLottie()
  },
  methods: {
    initLottie() {
      lottie.loadAnimation({
        container: this.$refs.lottie, // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: planeJson, // the path to the animation json
      })
    },
  },
}
</script>

<style scoped lang="scss"></style>
