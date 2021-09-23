<template>
  <div class="min-h-screen bg-gray-200">
  <div class="max-w-5xl pt-4 pb-10 mx-auto">
    <div class="px-4 py-5 mx-auto bg-white shadow sm:rounded-lg sm:p-6">
      <div class="flex items-center justify-between">
        <h2 class="font-semibold text-blue-700">Admin</h2>
        <div class="flex items-center space-x-4">
          <nuxt-link to="/admin/message">
            <a class="hover:text-blue-700 hover:font-semibold">Messages</a>
          </nuxt-link>
          <nuxt-link to="/admin/product">
            <a class="hover:text-blue-700 hover:font-semibold">Produits</a>
          </nuxt-link>
          <nuxt-link to="/admin/new">
            <a class="hover:text-blue-700 hover:font-semibold"
              >Nouveau produit</a
            >
          </nuxt-link>
        </div>
      </div>
    </div>
    <nuxt-child class="mt-4"/>
  </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>

