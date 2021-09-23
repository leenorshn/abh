<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <div class="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-xl font-bold text-gray-900">Customers also bought</h2>

      <div class="grid grid-cols-1 mt-8 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="product in p" :key="product.id">
          <div class="relative">
            <div class="relative w-full overflow-hidden rounded-lg h-72">
              <img :src="product.imageSrc" :alt="product.imageAlt" class="object-cover object-center w-full h-full" />
            </div>
            <div class="relative mt-4">
              <h3 class="text-sm font-medium text-gray-900">{{ product.name }}</h3>
              <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
            </div>
            <div class="absolute inset-x-0 top-0 flex items-end justify-end p-4 overflow-hidden rounded-lg h-72">
              <div aria-hidden="true" class="absolute inset-x-0 bottom-0 opacity-50 h-36 bg-gradient-to-t from-black" />
              <p class="relative text-lg font-semibold text-white">{{ product.price }}</p>
            </div>
          </div>
          <div class="mt-6">
            <a :href="product.href" class="relative flex items-center justify-center px-8 py-2 text-sm font-medium text-gray-900 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200"
              >Add to bag<span class="sr-only">, {{ product.name }}</span></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState,mapActions } from "vuex";

export default {
  computed:{
    ...mapState(["products"]),
    p(){
      return this.products;
    }
  },
  methods:{
    ...mapActions(["getProducts"])
  },
  mounted(){
    this.getProducts();
  }
}
</script>