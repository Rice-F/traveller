export default {
  checkoutCity (state, city) {
    state.city = city
    try {
      // 把当前选中的城市保存在localStorage.city，这样每次刷新页面依然会保存之前选好的城市
      localStorage.city = city
    } catch (e) {}
  }
}
