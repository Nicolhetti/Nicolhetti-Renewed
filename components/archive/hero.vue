<script setup lang="ts">
import { blogsPage } from '~/data'
</script>

<template>
  <div class="container mx-auto mt-8 mb-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 items-center">
      <div class="px-6">
        <h1 class="text-black dark:text-zinc-300 font-semibold leading-tight text-4xl md:text-5xl my-5">
          {{ blogsPage.title }}
        </h1>
        <p class="dark:text-zinc-300">
          {{ blogsPage.description }}
        </p>
      </div>
      <div class="sm:px-auto md:pl-[80px] lg:pl-[208px] xl:pl-[336px] 2xl:pl-[464px] justify-self-center">
        <LogoDog />
      </div>
    </div>
  </div>
</template>
