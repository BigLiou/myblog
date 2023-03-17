<template>
  <div class="loading-page">
    <lottie-com
      ref="lottie"
      :lottieJson="Mario"
      :loop="true"
      :autoplay="true"
    ></lottie-com>
  </div>
</template>

<script>
import LottieCom from '@theme/components/LottieCom'
import Mario from '@theme/assets/Mario.json'
export default {
  name: 'LoadingPage',
  components: {
    LottieCom,
  },
  data() {
    return {
      Mario: Mario,
    }
  },
}
</script>

<style lang="stylus" scoped>
.loading-page{
  background var(--background-color)
}
</style>
