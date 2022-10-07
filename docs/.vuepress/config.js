const nav = require('./config/nav')
const sidebar = require('./config/sidebar')

module.exports = {
  title: 'BigLiou',
  description: "BigLiou's Blog",
  head: [
    //设置网站图标
    ['link', { rel: 'icon', href: '/avatar.jpg' }],
    //移动端优化
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
  ],

  //配置主题
  theme: 'reco',
  themeConfig: {
    noFoundPageByTencent: false,
    //首页设置为blog主题
    type: 'blog',
    //导航栏左侧logo
    logo: '/avatar.jpg',
    //首页右侧信息栏头像
    authorAvatar: '/avatar.jpg',
    //全局作者姓名
    author: 'BigLiou',
    //启用页面滚动效果
    smoothScroll: true,

    //导航栏及侧边栏
    nav,
    sidebar,
    subSidebar: 'auto',
    lastUpdated: 'Last Updated',

    blogConfig: {
      socialLinks: [
        // 信息栏展示社交信息
        { icon: 'reco-github', link: 'https://github.com/BigLiou' },
        { icon: 'reco-mayun', link: 'https://gitee.com/BigLiou' },
        {
          icon: 'reco-juejin',
          link: 'https://juejin.cn/user/2286586795931896',
        },
      ],
    },

    // 备案信息
    record: '蜀ICP备2021016238号',
    recordLink: 'https://beian.miit.gov.cn/#/Integrated/index',
    cyberSecurityRecord: '川公网安备51012402000688号',
    cyberSecurityLink:
      'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51012402000688',
    startYear: '2021',
  },
}
