<template>
  <div class="max-w-6xl mx-auto">
    <div>
      <!-- This example requires Tailwind CSS v2.0+ -->

  <div class="relative bg-indigo-800">
    <div class="absolute inset-0">
      <img class="object-cover w-full h-full" src="../assets/m.jpg" alt="" />
      <div class="absolute inset-0 " aria-hidden="true" />
    </div>
    <div class="relative px-4 py-24 mx-auto max-w-7xl sm:py-32 sm:px-6 lg:px-8">
      <h1 class="text-6xl font-semibold tracking-tight text-blue-500 sm:text-5xl lg:text-6xl">AUBIN BUSINESS HOUSE</h1>
      <p class="max-w-3xl mt-6 text-xl text-indigo-500">Your satisfaction, our concern</p>
    </div>
  </div>


    </div>
    <div>
      <Product ></Product>
    </div>
  </div>
</template>

<script>
import Product from "~/components/Product.vue";
export default {}
</script>
