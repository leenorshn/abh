<template>
  <div class="">
    <div class="max-w-5xl py-6 mx-auto space-y-6">
      <div class="px-4 py-5 bg-white shadow sm:rounded-lg sm:p-6">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Information Vehicule
            </h3>
            <p class="mt-1 text-sm text-gray-500">
              Ici nous decrivons les caracteristique de notre vehicule.
            </p>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="first-name"
                    class="block text-sm font-medium text-gray-700"
                    >Nom du vehicule</label
                  >
                  <input
                    v-model="product.name"
                    type="text"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="last-name"
                    class="block text-sm font-medium text-gray-700"
                    >Market</label
                  >
                  <input
                    v-model="caracteristique.marke"
                    type="text"
                    name="last-name"
                    id="last-name"
                    autocomplete="family-name"
                    class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div class="col-span-6 sm:col-span-4">
                  <label
                    for="email-address"
                    class="block text-sm font-medium text-gray-700"
                    >Prix</label
                  >
                  <input
                    v-model.number="product.price"
                    type="number"
                    name="email-address"
                    id="email-address"
                    class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="country"
                    class="block text-sm font-medium text-gray-700"
                    >Annee production</label
                  >
                  <select
                    v-model="caracteristique.anneeFab"
                    id="country"
                    name="country"
                    autocomplete="country"
                    class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>Annee de product</option>
                    <option>2000</option>
                    <option>2001</option>
                    <option>2002</option>
                    <option>2003</option>
                    <option>2004</option>
                    <option>2005</option>
                    <option>2006</option>
                    <option>2007</option>
                    <option>2008</option>
                    <option>2009</option>
                    <option>2010</option>
                    <option>2011</option>
                    <option>2012</option>
                    <option>2013</option>
                    <option>2014</option>
                    <option>2015</option>
                    <option>2016</option>
                    <option>2017</option>
                    <option>2018</option>
                    <option>2019</option>
                    <option>2020</option>
                  </select>
                </div>

                <div class="col-span-6">
                  <label
                    for="street-address"
                    class="block text-sm font-medium text-gray-700"
                    >Numero du chassis</label
                  >
                  <input
                    v-model="caracteristique.nChassi"
                    type="text"
                    name="street-address"
                    id="street-address"
                    autocomplete="street-address"
                    class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label
                    for="city"
                    class="block text-sm font-medium text-gray-700"
                    >Couleur</label
                  >
                  <select
                    v-model="caracteristique.color"
                    id="country"
                    name="country"
                    autocomplete="country"
                    class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>Couleur camion</option>
                    <option>Blanche</option>
                    <option>Noir</option>
                    <option>Griz</option>
                    <option>Metalic</option>
                    <option>Rouge</option>
                  </select>
                </div>

                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    for="state"
                    class="block text-sm font-medium text-gray-700"
                    >Nombre de kilometre</label
                  >
                  <input
                    v-model="caracteristique.nKm"
                    type="number"
                    name="state"
                    id="state"
                    class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    for="postal-code"
                    class="block text-sm font-medium text-gray-700"
                    >Model</label
                  >
                  <input
                    v-model="caracteristique.modelProd"
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autocomplete="postal-code"
                    class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div class="col-span-6 my-6">
                <label
                  for="street-address"
                  class="block text-sm font-medium text-gray-700"
                  >URL de l'image</label
                >
                <input
                  v-model="product.imgUrl"
                  type="text"
                  name="street-address"
                  id="street-address"
                  autocomplete="street-address"
                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div class="flex justify-end">
                <button
                  type="button"
                  class="px-12 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Annuler
                </button>
                <button
                  @click.prevent="createProduct"
                  type="submit"
                  class="inline-flex justify-center px-12 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Enregistrer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      product: {},
      caracteristique: {},
    };
  },
  
  
  methods: {
    ...mapActions(["addProduct"]),
    createProduct() {
      this.addProduct({
        name: this.product.name,
        price: this.product.price,
        imgUrl: this.product.imgUrl,
        inStock: true,
        caracteristique: {
          marke: this.caracteristique.marke,
          nChassis: this.caracteristique.nChassis,
          color: this.caracteristique.color,
          nKm: this.caracteristique.nKm,
          modelProd: this.caracteristique.modelProd,
          anneeFab: this.caracteristique.anneeFab,
        },
      });
      this.product = {};
    },
  },
};
</script>