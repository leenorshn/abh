import products  from "~/data/product" 
import Axios from 'axios'

// const api=Axios({
//   
// })

const baseUrl="http://localhost:7000";

export const state = () => ({
    products:[],
    messages:[]
  })

  export const mutations = {
    GET_PRODUCTS(state,products){
        state.products=products;
    },
    ADD_PRODUCT(state,product){
        state.products.unshift(product)
    },
    GET_MESSAGES(state,messages){
        state.messages=[...messages]
    },
    ADD_MESSAGE(state,message){
        state.messages.unshift(message);
    }
  }

  export const actions = {
   async getProducts({commit}){
    const response=await  Axios.get(baseUrl+"/products")
      const products=response.data;
      commit("GET_PRODUCTS",products);
    },
   async addProduct({commit},product){
     console.log(product);
      const response= await Axios.post(baseUrl+"/products",
        product
      )
        commit("ADD_PRODUCT",product)
    },
    async getMessages({commit}){
      const response=await  Axios.get(baseUrl+"/messages")
      const messages=response.data;
      commit("GET_MESSAGES",messages)
    },
    async addMessage({commit},message){
      const response= await Axios.post(baseUrl+"/messages",
        message
      )
      console.log(message);
        commit("ADD_MESSAGE",message)
    },
  }


