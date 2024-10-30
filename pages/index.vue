<script lang="ts" setup>
import { navbarData } from '~/data'

useHead({
  title: 'Inicio',
  meta: [
    {
      name: 'description',
      content:
        'Bienvenido a mi sitio de juegos. Obtenga juegos gratuitos y seguros',
    },
  ],
})

// Generate OG Image
defineOgImageComponent('About', {
  headline: 'Saludos 👋',
  title: navbarData.homeTitle,
  description: 'Sumérgete en ésta web llena de juegos gratuitos y seguros.',
  link: '/logo.png',
})
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <MainHero />
    <MainRecent />
    <MainTrending />
  </main>
</template>
