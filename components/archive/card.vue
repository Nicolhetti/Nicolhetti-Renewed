<script lang="ts" setup>
interface Props {
  path?: string
  title?: string
  date?: string
  description?: string
  image?: string
  alt?: string
  ogImage?: string
  tags?: Array<string>
  published?: boolean
  update?: string
  release?: string
}

withDefaults(defineProps<Props>(), {
  path: '/',
  title: 'no-title',
  date: 'no-date',
  description: 'no-description',
  image: '/blogs-img/blog.jpg',
  alt: 'no-alt',
  ogImage: '/blogs-img/blog.jpg',
  tags: () => [],
  published: false,
  update: 'no-update',
  release: 'n/a'
})
</script>

<template>
  <article class="group border dark:border-neutral-800 m-2 rounded-2xl overflow-hidden shadow-sm text-zinc-700 dark:text-zinc-300 transition-all duration-300 hover:scale-105 hover:shadow-lg transform">
    <NuxtLink :to="path" class="grid grid-cols-1 sm:grid-cols-10 gap-1">
      <div class="relative sm:col-span-3 overflow-hidden rounded-t-2xl sm:rounded-l-2xl sm:rounded-t-none">
        <NuxtImg
          class="h-80 w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          width="300"
          :src="image"
          :alt="alt"
        />
        <div class="absolute bottom-2 left-2 bg-blue-700 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md">
          <p>Release By: {{ release }}</p>
        </div>
        <div class="absolute top-2 right-2 bg-blue-700 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md">
          {{ update }}
        </div>
        <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500"></div>
      </div>
      <div class="sm:col-span-7 p-5">
        <h2 class="text-xl font-semibold text-black dark:text-zinc-300 pb-1 group-hover:text-sky-700 dark:group-hover:text-blue-500 transition-colors duration-300">
          {{ title }}
        </h2>
        <p class="text-ellipsis line-clamp-4">
          {{ description }}
        </p>
        <div class="text-black dark:text-blue-500 text-sm mt-4 mb-4 md:flex md:space-x-6">
          <div class="flex items-center">
            <LogoDate />
            <p> {{ date }}</p>
          </div>
        </div>
        <div class="text-black dark:text-zinc-300 text-sm mt-2 mb-2 md:flex md:space-x-6">
          <div class="flex items-center gap-1 flex-wrap">
            <LogoTag />
            <p v-for="tag in tags" :key="tag" class="bg-gray-200 dark:bg-neutral-900 rounded-md px-2 py-1 font-semibold">
              {{ tag }}
            </p>
          </div>
        </div>
        <div class="flex group-hover:underline text-sky-700 dark:text-blue-500 items-center pt-2 transition-colors duration-300">
          <p>Leer más</p>
          <LogoArrow />
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
