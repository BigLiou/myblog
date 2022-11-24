const nav = require('./nav')
const sidebar = require('./sidebar')

module.exports = {
  title: "BigLiou's Blog",
  description: "BigLiou's Blog",
  head: [
    // 设置网站图标
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
    // 移动端优化
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
  ],

  // 配置reco主题
  theme: 'reco',
  themeConfig: {
    type: 'blog', // 首页设置为blog主题
    nav,
    sidebar,
    subSidebar: 'auto',
    noFoundPageByTencent: false, //取消404页面显示腾讯公益
    // blog首页相关配置
    blogConfig: {
      // 信息栏展示社交信息
      socialLinks: [
        { icon: 'reco-github', link: 'https://github.com/BigLiou' },
        { icon: 'reco-mayun', link: 'https://gitee.com/BigLiou' },
        {
          icon: 'reco-juejin',
          link: 'https://juejin.cn/user/2286586795931896',
        },
        {
          icon: 'reco-mail',
          link: 'mailto:bigliou@qq.com',
        },
      ],
      category: {
        location: 3,
        text: '技术日常',
        icon: 'reco-blog',
      },
      tag: {
        location: 4,
        text: '标签',
      },
    },
    author: 'BigLiou', // 信息栏作者名称
    authorAvatar: '/avatar.jpg', // 信息栏作者头像
    logo: '/avatar.jpg', // 导航栏左侧logo
    search: true, // 是否启用搜索栏
    searchMaxSuggestions: 10, // 最大搜索结果条数
    lastUpdated: 'Last Updated',
    // 备案信息
    record: '蜀ICP备2021016238号',
    recordLink: 'https://beian.miit.gov.cn/#/Integrated/index',
    cyberSecurityRecord: '川公网安备51012402000688号',
    cyberSecurityLink:
      'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51012402000688',
    startYear: '2021',
    //评论
    valineConfig: {
      appId: 'uWstEt36Wbz3rD1ehanKZ8iy-gzGzoHsz',
      appKey: '9RkRkD9py6sZLqhm7ANz8hBr',
      placeholder: '一起讨论吧！',
      recordIP: true,
      avatar: 'mp',
      pageSize: 10,
    },
    markdown: {
      lineNumbers: true,
    },
  },
}
