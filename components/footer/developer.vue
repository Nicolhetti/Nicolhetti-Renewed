<script setup lang="ts">
import { footerData } from '~/data'
</script>

<template>
  <div>
    <p class="text-black dark:text-zinc-300   text-2xl py-1 font-semibold">
      {{ footerData.author }}
    </p>
    <p class="py-2 dark:text-zinc-300  ">
      {{ footerData.aboutAuthor }}
    </p>
    <div class="my-3 space-x-3 pb-3">
      <NuxtLink
        to="hhttps://github.com/Nicolhetti"
        target="_blank"
        class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
        aria-label="Github"
      >
        <Icon name="iconoir:github" size="1em" />
      </NuxtLink>
      <NuxtLink
        to="https://discord.gg/JnxZPSJvSf"
        target="_blank"
        class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
        aria-label="Discord"
      >
        <Icon name="iconoir:discord" size="1em" />
      </NuxtLink>
      <NuxtLink
        to="https://twitter.com/nicolhetti"
        target="_blank"
        class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
        aria-label="Twitter"
      >
        <Icon name="iconoir:twitter" size="1em" />
      </NuxtLink>
      <NuxtLink
        to="https://instagram.com/nico.nctt"
        target="_blank"
        class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
        aria-label="Instagram"
      >
        <Icon name="iconoir:instagram" size="1em" />
      </NuxtLink>
    </div>
  </div>
</template>
