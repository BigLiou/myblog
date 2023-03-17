<template>
  <div @click="chooseMode" class="color-picker" v-if="$themeConfig.modePicker !== false">
    <!-- <a class="color-button" @click.prevent="showMenu = !showMenu">
      <reco-icon icon="reco-color" />
		</a> -->
		<ModuleTransition :transform=" ['translate(-50%, 0)', 'translate(-50%, -10px)']">
			<div v-show="showMenu" class="color-picker-menu">
				<ModePicker />
			</div>
		</ModuleTransition>
    <lottie-com class="sunmoon" ref="lottie" :lottieJson="sunmoon" :loop="false" :autoplay="false"></lottie-com>
  </div>
</template>

<script>
import { RecoIcon, ModuleTransition } from '@vuepress-reco/core/lib/components'
import ClickOutside from 'vue-click-outside'
import ModePicker from './ModePicker'
import applyMode from './applyMode'
import LottieCom from '@theme/components/LottieCom'
import sunmoon from '@theme/assets/sunmoon.json'

export default {
  name: 'UserSettings',

  directives: {
    'click-outside': ClickOutside
  },

  components: {
    ModePicker,
    RecoIcon,
    ModuleTransition,
    LottieCom
  },

  data() {
    return {
      showMenu: false,
      sunmoon: sunmoon,
      mode: true,
    }
  },

  // 为了在保证 modePicker 在 SSR 中正确开关，并实现管理，Mode 组件将负责 modePicker 关闭的情况
  mounted() {
    // modePicker 关闭时默认使用主题设置的模式
    const themeMode = this.$themeConfig.mode || 'auto'
    const { modePicker } = this.$themeConfig
    if (modePicker === false) {
      // 为 'auto' 模式设置监听器
      if (themeMode === 'auto') {
        window.matchMedia('(prefers-color-scheme: dark)').addListener(() => {
          applyMode(themeMode)
        })
        window.matchMedia('(prefers-color-scheme: light)').addListener(() => {
          applyMode(themeMode)
        })
      }
      applyMode(themeMode)
    }
  },

  methods: {
    hideMenu() {
      this.showMenu = false
    },
    chooseMode() {
      this.mode = !this.mode
      this.mode
        ? this.$refs.lottie.animate.playSegments([77, 154], true)
        : this.$refs.lottie.animate.playSegments([0, 77], true)
      this.$refs.lottie.animate.setSpeed(2);
      this.$refs.lottie.animate.addEventListener('complete', () => {
        this.mode ? applyMode('light') : applyMode('dark')
      })
    },
  }
}
</script>

<style lang="stylus">
.color-picker {
	position: relative;
	margin-right: 2em;
  cursor pointer;
	.color-button {
		align-items: center;
		height: 100%;
		.iconfont {
			font-size 1.4rem
			color: $accentColor
		}
	}
  .sunmoon{
    height: 6em;
    width: 6em;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
	.color-picker-menu {
		position: absolute;
		top: 40px;
		left: 50%;
		z-index: 150;

		ul {
			list-style-type: none;
			margin: 0;
			padding: 0;
		}
	}
}

@media (max-width: $MQMobile) {
	.color-picker {
		margin-right: 1rem;
		.color-picker-menu {
			left: calc(50% - 35px);
			&::before {
				left: calc(50% + 35px);
			}
		}
	}
}
</style>
