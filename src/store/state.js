let defaultCity = '南京'
// 如果用户关闭浏览器的本地存储功能或者使用浏览器隐身模式，那么localStorage就没用了
// 这时很有可能会抛出异常，使得代码执行终端
// 在这里使用try...catch 当程序捕捉到错误时，会继续执行catch里的内容，而不是中断执行
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
