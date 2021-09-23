<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <footer class="bg-white">
    <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
        <div v-for="item in navigation.main" :key="item.name" class="px-5 py-2">
          <a :href="item.href" class="text-base text-gray-500 hover:text-gray-900">
            {{ item.name }}
          </a>
        </div>
      </nav>
      <!-- <div class="mt-8 flex justify-center space-x-6">
        <a v-for="item in navigation.social" :key="item.name" :href="item.href" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">{{ item.name }}</span>
          <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
        </a>
      </div> -->
      <p class="mt-8 text-center text-base text-gray-400">
        &copy; 2020 Workflow, Inc. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script>
import { defineComponent, h } from 'vue'

const navigation = {
  main: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Accessibility', href: '#' },
    { name: 'Partners', href: '#' },
  ],
 
}

export default {
  data() {
    return {
      navigation,
    }
  },
}
</script>