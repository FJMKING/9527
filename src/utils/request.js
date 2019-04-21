// 封装Promise用来请求wx.request
// url就是请求接口地址

function request (url, method = 'GET', data = {}, header = {}) {
  return new Promise((resolve, reject) => {
    // 显示加载中
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    wx.request({
      url: url,
      method: method,
      data,
      header,
      success: (res) => {
        resolve(res)
        // 隐藏加载中
        wx.hideLoading()
      }
    })
  })
}

// get请求
request.get = function (url, data) {
  return request(url, 'GET', data)
}

// post请求
request.post = function (url, data) {
  return request(url, 'POST', data)
}

// 需要授权的接口调用
request.auth = function (url, data) {
  // 如果本地没有token，跳转到首页
  if (!wx.getStorageSync('token')) {
    wx.navigateTo({
      url: '/pages/index/main'
    })

    // 注意： 创建promise必须添加参数
    return new Promise(() => {})
  }

  // 注意，在auth里面需要加上头信息
  return request(url, 'POST', data, {
    'Authorization': wx.getStorageSync('token')
  })
}

export default request
