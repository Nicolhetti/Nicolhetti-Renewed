<script setup lang="ts">
import { gamesPage } from '~/data'
</script>

<template>
  <div class="container mx-auto mb-5">
    <div class="grid grid-cols-1 sm:grid-cols-2 items-center">
      <div class="px-6">
        <h1 class="text-black dark:text-zinc-300 font-semibold leading-tight text-4xl md:text-5xl my-5">
          {{ gamesPage.title }}
        </h1>
        <p class="dark:text-zinc-300">
          {{ gamesPage.description }}
        </p>
      </div>
      <div class="px-6 justify-self-center">
        <LogoDogpow />
      </div>
    </div>
  </div>
</template>
