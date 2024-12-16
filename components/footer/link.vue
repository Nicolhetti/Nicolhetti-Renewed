<template>
  <div class="flex flex-col dark:text-zinc-300 my-5 md:my-0 md:justify-self-center">
    <p class="text-black dark:text-zinc-300 text-base font-semibold">
      Links rápidos
    </p>
    <NuxtLink to="/" class="hover:underline">
      Inicio
    </NuxtLink>
    <NuxtLink to="/games" class="hover:underline">
      Juegos
    </NuxtLink>
    <NuxtLink to="/categories" class="hover:underline">
      Categorías
    </NuxtLink>
    <NuxtLink to="/about" class="hover:underline">
      Sobre
    </NuxtLink>
  </div>
</template>
