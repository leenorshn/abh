import products from "~/data/product";
import Axios from "axios";

// const api=Axios({
//
// })

const baseUrl = "http://localhost:7000";

export const state = () => ({
  products: [],
  messages: []
});

export const mutations = {
  GET_PRODUCTS(state, products) {
    state.products = products;
  },
  ADD_PRODUCT(state, product) {
    state.products.unshift(product);
  },
  GET_MESSAGES(state, messages) {
    state.messages = [...messages];
  },
  ADD_MESSAGE(state, message) {
    state.messages.unshift(message);
  },
  DELETE_PRODUCT(state,id){
    state.products=state.products.filter(p=>p.id!==id)
  },
  DELETE_MSG(state,id){
    state.messages=state.messages.filter(p=>p.id!==id)
  }
};

export const actions = {
  async getProducts({ commit }) {
    const response = await Axios.get(baseUrl + "/products");
    const products = response.data;
    commit("GET_PRODUCTS", products);
  },
  async deleteProduct({ commit }, id) {
    const response = await Axios.delete(baseUrl + "/products/" + id);
    commit("DELETE_PRODUCT", id);
  },
  async addProduct({ commit }, product) {
    console.log(product);
    const response = await Axios.post(baseUrl + "/products", product);
    commit("ADD_PRODUCT", product);
  },
  async getMessages({ commit }) {
    const response = await Axios.get(baseUrl + "/messages");
    const messages = response.data;
    commit("GET_MESSAGES", messages);
  },
  async addMessage({ commit }, message) {
    const response = await Axios.post(baseUrl + "/messages", message);
    console.log(message);
    commit("ADD_MESSAGE", message);
  },
  async deleteMessage({ commit }, id) {
    const response = await Axios.delete(baseUrl + "/messages/" + id);
    commit("DELETE_MSG", id);
  }
};
