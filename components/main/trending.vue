<script lang="ts" setup>
// Get Last 6 Publish Post from the content/blog directory
const { data } = await useAsyncData('trending-post', () =>
  queryContent('/games').limit(6).sort({ date: 1 }).find(),
)

const formattedData = computed(() => {
  return data.value?.map((articles) => {
    return {
      path: articles._path,
      title: articles.title || 'no-title available',
      description: articles.description || 'no-description available',
      image: articles.image || '/not-found.jpg',
      alt: articles.alt || 'no alter data available',
      ogImage: articles.ogImage || '/not-found.jpg',
      date: articles.date ? new Date(articles.date).toLocaleDateString('es-AR', {timeZone: 'UTC', day: 'numeric', month: 'long', year: 'numeric' }) : 'not-date-available',
      tags: articles.tags || [],
      published: articles.published || false,
      update: articles.update || 'no-update',
      release: articles.release || 'n/a',
    }
  })
})

useHead({
  title: 'Inicio',
  meta: [
    {
      name: 'description',
      content:
        'Bienvenido a mi sitio de juegos. Obtenga juegos gratuitos y seguros.',
    },
  ],
})
</script>

<template>
  <div class="px-4">
    <div class="flex flex-row items-center space-x-3 pt-5 pb-3">
      <Icon name="mdi:star-three-points-outline" size="2em" class="text-black dark:text-zinc-300  " />
      <h2 class="text-4xl font-semibold text-black dark:text-zinc-300  ">
        Publicaciones en tendencia
      </h2>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5 px-4">
      <template v-for="post in formattedData" :key="post.title">
        <ArchiveCard
          :path="post.path"
          :title="post.title"
          :date="post.date"
          :description="post.description"
          :image="post.image"
          :alt="post.alt"
          :og-image="post.ogImage"
          :tags="post.tags"
          :published="post.published"
          :update="post.update"
          :release="post.release"
        />
      </template>
      <template v-if="data?.length === 0">
        <BlogEmpty />
      </template>
    </div>
  </div>
</template>
