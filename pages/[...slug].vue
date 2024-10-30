<script setup lang="ts">
useHead({
  title: '404',
  meta: [
    {
      name: 'description',
      content: 'Página no encontrada',
    },
  ],
})

defineOgImageComponent('About', {
  headline: 'Wrong Path',
  title: '404',
  description: 'Página no encontrada',
})
</script>

<template>
  <div class="py-5">
    <div class="container max-w-xl   mx-auto">
      <Logo404 />
    </div>
  </div>
</template>
