<script lang="ts" setup>
interface Props {
  path: string
  title: string
  date: string
  description: string
  image: string
  alt: string
  ogImage: string
  tags: Array<string>
  published: boolean
  update: string
  release: string
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
  <article class="group border dark:border-neutral-800 m-2 overflow-hidden rounded-2xl shadow-sm text-zinc-700 dark:text-zinc-300 transition-all duration-300 hover:scale-105 hover:shadow-lg transform">
    <NuxtLink :to="path">
      <div class="relative overflow-hidden rounded-t-2xl">
        <NuxtImg
          class="lg:h-96 md:h-36 w-full object-fill object-center transition-transform duration-500 group-hover:scale-110"
          width="300"
          :src="image"
          :alt="alt"
        />
        <div class="absolute top-2 right-2 bg-blue-700 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md">
          {{ update }}
        </div>
        <div class="absolute bottom-2 left-2 bg-blue-700 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md">
          <p>Release By: {{ release }}</p>
        </div>
        <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500"></div>
      </div>
      <div class="px-3 pb-4">
        <div class="text-black dark:text-blue-500 pt-3 pb-2">
          <div class="flex items-center">
            <LogoDate />
            {{ date }}
          </div>
        </div>
        <div class="text-black dark:text-zinc-300 pt-2 pb-2">
          <div class="flex items-center gap-1 flex-wrap">
            <LogoTag />
            <template v-for="tag in tags" :key="tag">
              <span class="bg-gray-200 dark:bg-neutral-900 rounded-md px-2 py-1 font-semibold">{{ tag }}</span>
            </template>
          </div>
        </div>
        <h2 class="text-xl font-semibold text-black dark:text-zinc-300 pb-1 group-hover:text-sky-700 dark:group-hover:text-blue-500 transition-colors duration-300">
          {{ title }}
        </h2>
        <p class="text-ellipsis line-clamp-4 text-base">
          {{ description }}
        </p>
        <div class="flex group-hover:underline text-sky-700 dark:text-blue-500 items-center py-2 transition-colors duration-300">
          <p>Leer más</p>
          <LogoArrow />
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
