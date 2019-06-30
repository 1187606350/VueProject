
const state = {
  bannerList: [] // beats轮播图数据
}

const mutations = {
  setBannerList (state, list) {
    state.bannerList = list
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
