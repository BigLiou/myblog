<template>
  <div class="abstract-item" @click="$router.push(item.path)">
    <reco-icon v-if="item.frontmatter.sticky" icon="reco-sticky" />
    <div class="title">
      <reco-icon v-if="item.frontmatter.keys" icon="reco-lock" />
      <router-link :to="item.path">{{ item.title }}</router-link>
    </div>
    <div class="abstract" v-html="item.excerpt"></div>
    <PageInfo :pageInfo="item" :currentTag="currentTag">
    </PageInfo>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { RecoIcon } from '@vuepress-reco/core/lib/components'
import PageInfo from './PageInfo'
export default defineComponent({
  components: { PageInfo, RecoIcon },
  props: ['item', 'currentPage', 'currentTag']
})
</script>
<style>
.abstract p {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.abstract p {
  height: 50px;
  line-height: 25px;
  overflow: hidden;
  position: relative;
  margin: 5px 0;
}

.abstract p::after {
  content: "";
  position: absolute;
  height: 20px;
  width: 50px;
  background: linear-gradient(to right, transparent, white 80%);
  right: 0;
  bottom: 0;
}
</style>
<style lang="stylus" scoped>
.abstract-item
  position relative
  margin: 0 auto 20px;
  padding: 16px 20px;
  width 100%
  overflow: hidden;
  border-radius: $borderRadius
  box-shadow: var(--box-shadow);
  box-sizing: border-box;
  transition all .3s
  background-color var(--background-color)
  cursor: pointer;
  > * {
    pointer-events: auto;
  }
  .reco-sticky
    position absolute
    top 0
    left 0
    display inline-block
    color $accentColor
    font-size 2.4rem
  &:hover
    box-shadow: var(--box-shadow-hover)
    .title{
      a{
        color $accentColor
      }
      &:after{
        visibility visible
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
      }
    }
  .title
    position: relative;
    font-size: 1.28rem;
    line-height: 46px;
    display: inline-block;
    a
      color: var(--text-color);
    .reco-lock
      font-size 1.28rem
      color $accentColor
    &:after
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: $accentColor;
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      transition: .3s ease-in-out;
  .tags
    .tag-item
      &.active
        color $accentColor
      &:hover
        color $accentColor
@media (max-width: $MQMobile)
  .tags
    display block
    margin-top 1rem;
    margin-left: 0!important;
</style>
