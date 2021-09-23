<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <!-- Header -->
    <div class="relative pb-32 bg-gray-800">
      <div class="absolute inset-0">
        <img class="object-cover w-full h-full" src="../assets/A4.jpg" alt="" />
        <div class="absolute inset-0 bg-gray-500 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div class="relative px-4 py-24 mx-auto max-w-7xl sm:py-32 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Nos services</h1>
        
      </div>
    </div>

    <!-- Overlapping cards -->
    <section class="relative z-10 px-4 pb-32 mx-auto -mt-32 max-w-7xl sm:px-6 lg:px-8" aria-labelledby="contact-heading">
      <h2 class="sr-only" id="contact-heading">Contact us</h2>
      <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
        <div v-for="link in supportLinks" :key="link.name" class="flex flex-col bg-white shadow-xl rounded-2xl">
          <div class="relative flex-1 px-6 pt-16 pb-8 md:px-8">
            <div class="absolute top-0 inline-block p-5 transform -translate-y-1/2 bg-indigo-600 shadow-lg rounded-xl">
              <component :is="link.icon" class="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <h3 class="text-xl font-medium text-gray-900">{{ link.name }}</h3>
            <p class="mt-4 text-base text-gray-500">{{ link.description }}</p>
          </div>
          <div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
            <a :href="link.href" class="text-base font-medium text-indigo-700 hover:text-indigo-600">Contactez-nous<span aria-hidden="true"> &rarr;</span></a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
//import { NewspaperIcon, PhoneIcon, SupportIcon } from '@heroicons/vue/outline'

const supportLinks = [
  {
    name: 'Vente des camions',
    href: '#',
    description:
      'Nous vendons de camions , voitures de luxe et d\'occasion a toute personne le desirant',
    //icon: PhoneIcon,
  },
  {
    name: 'Location de maison et appartement',
    href: '#',
    description:
      'Nous avons plusieurs maison et appartement que nous mettons en location pour servir la communaute',
   // icon: SupportIcon,
  },
  {
    name: 'Transport de marchandise',
    href: '#',
    description:
      'Nous sommes dans le service de transport entre Butembo-Kampala-Nairobi des packages de nos clients',
    //icon: NewspaperIcon,
  },
]

export default {
  data() {
    return {
      supportLinks,
    }
  },
}
</script>