<script setup lang="ts">
import type { BlogPost } from '@/types/blog'
import { navbarData, seoData } from '~/data'

const { path } = useRoute()

const { data: articles, error } = await useAsyncData(`blog-post-${path}`, () => queryContent(path).findOne())

if (error.value)
  navigateTo('/404')

const data = computed<BlogPost>(() => {
  return {
    title: articles.value?.title || 'no-title available',
    description: articles.value?.description || 'no-description available',
    image: articles.value?.image || '/not-found.jpg',
    alt: articles.value?.alt || 'no alter data available',
    ogImage: articles.value?.ogImage || '/not-found.jpg',
    date: articles.value?.date || 'not-date-available',
    tags: articles.value?.tags || [],
    published: articles.value?.published || false,
    update: articles.value?.update || 'no-update',
    release: articles.value?.release || 'n/a',
    downloadLinks: articles.value?.downloadLinks || []
  }
})

useHead({
  title: data.value.title || '',
  meta: [
    { name: 'description', content: data.value.description },
    {
      name: 'description',
      content: data.value.description,
    },
    // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
    { property: 'og:site_name', content: navbarData.homeTitle },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    {
      property: 'og:url',
      content: `${seoData.mySite}/${path}`,
    },
    {
      property: 'og:title',
      content: data.value.title,
    },
    {
      property: 'og:description',
      content: data.value.description,
    },
    {
      property: 'og:image',
      content: data.value.ogImage || data.value.image,
    },
    // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
    { name: 'twitter:site', content: '@nicolhetti' },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:url',
      content: `${seoData.mySite}/${path}`,
    },
    {
      name: 'twitter:title',
      content: data.value.title,
    },
    {
      name: 'twitter:description',
      content: data.value.description,
    },
    {
      name: 'twitter:image',
      content: data.value.ogImage || data.value.image,
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: `${seoData.mySite}/${path}`,
    },
  ],
})

// Generate OG Image
defineOgImageComponent('Test', {
  headline: 'Saludos 👋',
  title: data.value.title || '',
  description: data.value.description || '',
  link: data.value.ogImage,

})

import { onMounted } from 'vue'

const disqusShortname = 'nicolhetti-projects';

onMounted(() => {
  if (window.DISQUS) {
    // Si Disqus ya está cargado, solo actualiza
    window.DISQUS.reset({
      reload: true,
      config: function () {
        this.page.url = window.location.href;
        this.page.identifier = window.location.pathname;
      },
    });
  } else {
    // Si Disqus no está cargado, añade el script
    const d = document, s = d.createElement('script');
    s.src = `https://${disqusShortname}.disqus.com/embed.js`;
    s.setAttribute('data-timestamp', (+new Date()).toString());
    (d.head || d.body).appendChild(s);
  }
});

</script>

<template>
  <div class="px-6 container max-w-5xl mx-auto sm:grid grid-cols-12 gap-x-12 ">
    <div class="col-span-12 lg:col-span-9">
      <BlogHeader
        :title="data.title"
        :image="data.image"
        :alt="data.alt"
        :date="data.date"
        :description="data.description"
        :tags="data.tags"
        :update="data.update"
        :release="data.release"
      />
      <div
        class="prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg
        prose-h1:no-underline max-w-5xl mx-auto prose-zinc dark:prose-invert prose-img:rounded-lg"
      >
        <ContentRenderer v-if="articles" :value="articles">
          <template #empty>
            <p>No se encontró contenido.</p>
          </template>
        </ContentRenderer>
      </div>

      <!-- Download Links -->
      <div v-if="data.downloadLinks.length > 0" class="mt-6 flex flex-col items-center space-y-4">
        <div v-for="(link, index) in data.downloadLinks" :key="index">
          <a
            :href="link.url"
            :style="{ backgroundColor: link.buttonColor || '#007BFF' }"
            class="inline-block px-6 py-3 text-lg font-semibold text-white rounded-lg shadow-lg transition transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ link.name }}
          </a>
        </div>
      </div>
      
      <!-- Agrega Disqus acá -->
      <div id="disqus_thread" class="mt-10"></div>
    </div>
    <BlogToc />
    <ScrollToTop />
    <div class="flex flex-row flex-wrap md:flex-nowrap mt-10 gap-2">
      <SocialShare
        v-for="network in ['facebook', 'twitter', 'reddit', 'whatsapp', 'email']"
        :key="network"
        :network="network"
        :styled="true"
        :label="true"
        class="p-1"
        aria-label="Compartir con {network}"
      />
    </div>
  </div>
</template>