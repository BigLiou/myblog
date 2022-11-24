<template>
  <div class="loading-page">
    <lottie-com
      ref="lottie"
      :lottieJson.sync="lottieJson"
      :loop="true"
      :autoplay="true"
    ></lottie-com>
  </div>
</template>

<script>
import LottieCom from '@theme/components/lottie/LottieCom'
export default {
  name: 'LoadingPage',
  components: {
    LottieCom,
  },
  data() {
    return {
      lottieJson: 'https://img.bigliou.com/lottieJson/Mario.json',
    }
  },
}
</script>

<style lang="stylus" scoped>
.loading-page{
  background var(--background-color)
}
</style>
