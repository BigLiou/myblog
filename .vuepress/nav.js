module.exports = [
  {
    text: '首页',
    link: '/',
    icon: 'reco-home',
  },
  {
    text: '系统化笔记',
    icon: 'reco-document',
    items: [
      {
        text: '前端',
        items: [
          {
            text: 'HTML',
            link: '/docs/前端/HTML',
          },
          {
            text: 'CSS',
            link: '/docs/前端/CSS',
          },
          {
            text: 'JavaScript',
            link: '/docs/前端/JavaScript',
          },
          {
            text: 'Vue',
            link: '/docs/前端/Vue',
          },
        ],
      },
      {
        text: '后端',
        items: [
          {
            text: 'Java',
            link: '/docs/后端/Java',
          },
          {
            text: 'Python',
            link: '/docs/后端/Python',
          },
        ],
      },
    ],
  },
  {
    text: 'TimeLine',
    link: '/timeline/',
    icon: 'reco-date',
  },
]
