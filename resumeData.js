global.resumeData = {
  // 网页tilte
  name: '赵朋承', 
  // 头部信息
  headerData: {
    name: '赵朋承',
    englishName: 'Zhao PengCheng',
    job: 'Web前端工程师',
    jobNote: '/实习',
    school: [
      '男 ｜ 1999.10',
      '本科 ｜ 2021年毕业',
      '重庆邮电大学 ｜ 软件工程专业 | CET6'
    ],
    home: 'https://zhaopengcheng.varbee.com',
    email: 'square2mikuzi@gmail.com',
    github: 'https://github.com/Squares4',
    phone: '18048916710'
  },
  // 左栏文章信息
  sectionDataLeft: [
    {
      title: '实践经验',
      items: [
        {
          name: '勤奋峰科技·前端组',
          time: '2018.06至今',
          tag: '创业团队',
          content: [
            `<strong>团队介绍</strong>
            勤奋峰科技是一个互联网初创团队，涵盖前端、后台、移动、设计等部门。团队拥有校园说、校招导师、团队拥有校园说、校招导师、零食蜂等多个产品，先后参加比赛并获得了多个国家级奖项。其中，校招导师产品运营的工作号超过<em>15k</em>的用户，日平均浏览量达<em>1k</em>。`,
            `<strong>WEB前端组</strong>
            负责团队项目的开发、维护。参与团队建设、日常技术分享以及培养新的团队成员，期间积累了各类项目开发经验和<em>团队合作经验</em> 。`
          ]
        }
      ]
    },
    {
      title: '专业能力',
      items: [
        {
          content: [
            `<i></i>掌握web开发基本技能，熟悉<em>W3C标准</em>、<em>页面架构布局</em>、<em>前端语义化</em>，重视<em>用户体验</em>和<em>代码可维护性</em>，有一定<em>审美</em>。有近<em>1年</em>前端开发经验。`,
            `<i></i>能够熟练使用<em>React及其相关技术栈</em>进行开发，了解过React底层，并对<em>Ant Design</em>、<em>Taro</em>框架有较深的实践。`,
            `<i></i>熟悉<em>ES6+</em>规范，熟悉<em>TypeScript</em>的使用，了解<em>前端工程化</em>，能够编写<em>Webpack</em>的基本配置，对<em>性能优化</em>有一定的思考。`,
            // `<i></i>有一定全栈经验，能够使用<em>Koa</em>、<em>Eggjs</em>配合数据库<em>mysql</em>、<em>Redis</em>开发web服务端。能够高效地与后台定位问题，高效地进行开发。`,
            `<i></i>有一定全栈经验，能够使用<em>EggJs</em>配合数据库开发web服务端。能够高效地与后台定位问题，高效地进行开发。`,
            `<i></i>对<em>数据结构</em>、<em>计算机网络</em>、<em>网络安全</em>有一定的思考。`,
            `<i></i>熟练使用<em>Git</em>进行版本控制和代码托管、<em>Markdown</em>进行文档编写，了解项目常规开发流程、<em>开发调试</em>技巧、<em>发布部署</em>步骤，掌握<em>类Unix</em>服务器基本运维能力，能够使用<em>Nginx</em>进行页面部署，能够使用<em>Jenkins</em>进行简单的自动化部署。`,
          ]
        }
      ]
    },
    {
      title: '自我评价',
      items: [
        {
          content: [
            `<i></i>本人拥有对新技术的<em>好奇心</em>，关注业内前沿技术，有一定的创造精神和探索精神，能够<em>积极执行</em>工作，<em>有责任心</em>，具有良好的<em>沟通合作</em>能力、<em>分析解决问题</em>能力以及较强的<em>学习能力</em>。`
          ]
        }
      ]
    }
  ],
  sectionDataRight: [
    {
      title: '项目经验',
      items: [
        {
          name: '果然邮你',
          time: '2019.04 ~ 2019.05',
          tag: '小程序｜Web后台',
          content: [
            `<strong>项目介绍</strong>
            果然邮你是专注于为在校大学生服务，对客户进行水果、零食配送的小程序。`,
            `<i></i><em>全栈项目</em>，使用<em>Typescript</em>组织代码， 使用<em>Taro</em>框架进行小程序页面开发，配合<em>Redux</em>进行数据管理，使用阿里开源后台框架<em>EggJs</em>进行后台开发。`,
            `<i></i>使用<em>WebSocket</em>构建商家顾客的交流通道，使用心跳机制维持会话稳定性。`,
            // `<i></i>用户登录时，判断小程序用户缓存中token的存在。不存在则调用小程序登录接口，获取解密的用户信息并随机生成随机字符串值作为key，将用户信息作为value存入redis，将key作为token与登录结果返回给前端；存在则用token换取用户信息。`
          ]
        },
        {
          name: '云印蜂',
          time: '2019.07 ~ 2019.09',
          tag: 'H5｜管理端',
          content: [
            `<strong>项目介绍</strong>
            云印蜂是一款为学生服务的云打印平台，涵盖小程序、APP和H5网页，并有配套的商家管理端。`,
            `<i></i>使用<em>Typescript</em>组织代码，使用<em>Taro</em>进行H5页面开发并适配多端。管理端使用<em>Ant Design Pro</em>进行搭建。`,
            `<i></i>支持对文件的<em>分片上传</em>、<em>断点续传</em>，保障文件上传的稳定性。`,
            `<i></i>在管理端中，实现了<em>权限管理</em>、<em>mock数据</em>等功能，方便项目的维护以及后续迭代。`,
            `<i></i>使用<em>Token</em>和<em>Cookie-Session</em>分别维护H5和管理端用户的<em>登陆态</em>，避免用户重复验证登陆。`
          ]
        },
        {
          name: '每日情话',
          time: '2019.08',
          tag: '小程序',
          content: [
            `<strong>项目介绍</strong>
            每日情话是一款在线分享图片文字并生成自定义图片海报的工具小程序。`,
            `<i></i>使用类Vue小程序框架mpx进行开发，对其中的特性有一定理解。`,
            `<i></i>利用<em>Canvas</em>实现了小程序上的基本图形绘制以及图像处理，自行封装了绘制工具函数，涵盖对小程序Canvas的基本操作和错误处理，能够绘制简单Canvas图像并生成海报并将其保存至手机。`,
          ]
        }
      ]
    }
  ]
}