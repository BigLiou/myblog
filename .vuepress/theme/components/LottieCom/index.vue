<template>
  <div class="lottie" ref="lottie"></div>
</template>

<script>
import lottie from 'lottie-web'
export default {
  name: 'lottie',
  props: {
    lottieJson: {
      type: Object,
      required: true,
    },
    autoplay: {
      type: Boolean,
      required: false,
      default: true,
    },
    loop: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data() {
    return {
      animate: null,
    }
  },
  components: {},
  mounted() {
    this.initLottie()
  },
  beforeDestroy() {
    this.animate.destroy()
  },
  methods: {
    initLottie() {
      this.animate = lottie.loadAnimation({
        container: this.$refs.lottie, // the dom element that will contain the animation
        renderer: 'svg',
        loop: this.loop,
        autoplay: this.autoplay,
        animationData: this.lottieJson, // the path to the animation json
        //path: this.lottieJson,
      })
      let _this = this
      this.animate.addEventListener('DOMLoaded', function () {
        _this.$emit('ready')
      })
    },
  },
}
</script>

<style scoped lang="stylus">
.lottie{
  height: 100%;
  width: 100%;
}
</style>
