import Item from "./Item";

const state: any = {
  items: Array<Item>()
};

const getters: any = {};

const mutations: any = {
  addItem(state: any, item: Item) {
    state.items.push(item);
  }
};

const actions: any = {
  addItem(context: any, item: Item) {
    context.commit("addItem", item);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations
};
