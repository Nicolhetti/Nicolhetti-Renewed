<script lang="ts" setup>
import { makeFirstCharUpper } from '@/utils/helper'

const { data } = await useAsyncData('all-game-post-for-category', () => queryContent('/games').sort({ _id: -1 }).find())

const allTags = new Map()

data.value?.forEach((game) => {
  const tags: Array<string> = game.tags || []
  tags.forEach((tag) => {
    if (allTags.has(tag)) {
      const cnt = allTags.get(tag)
      allTags.set(tag, cnt + 1)
    }
    else {
      allTags.set(tag, 1)
    }
  })
})

useHead({
  title: 'Categories',
  meta: [
    {
      name: 'description',
      content:
        'Below All the topics are listed on which either I have written a game or will write a game in near future.',
    },
  ],
})

// Generate OG Image
const siteData = useSiteConfig()
defineOgImage({
  props: {
    title: 'Categories',
    description: 'Below All the topics are listed on which either I have written a game or will write a game in near future.',
    siteName: siteData.url,
  },
})
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <CategoryHero />
    <div class="flex flex-wrap px-6 mt-12 gap-3">
      <CategoryCard
        v-for="topic in allTags"
        :key="topic[0]"
        :title="makeFirstCharUpper(topic[0])"
        :count="topic[1]"
      />
    </div>
  </main>
</template>
