import home from './home'
import me from './me'

export default {
  ...home,
  ...me,
  static: {
    common: {
      doNotDev: '此功能还没开发',
      changeLang: '切换语言成功',
    },
    tabBar: {
      home: '首页',
      me: '我的',
    },
    navBar: {
      info: '关于小程序',
    },
    language: {
      uyghur: '维文',
      chinese: 'دۆلەت تىلى',
    },
  },

}
