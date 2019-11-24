import Mock from 'mockjs'

export default [

  {
    url: '/configs',
    type: 'get',
    response: config => {
      return { sinaShortUrlAppKey: ['123'] }
    }
  },

  {
    url: '/configs',
    type: 'post',
    response: config => {
    }
  },

]
