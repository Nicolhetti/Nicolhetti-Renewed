<template>
  <article class="group border dark:border-neutral-800 m-2 rounded-2xl overflow-hidden shadow-lg text-zinc-700">
    <NuxtLink to="/">
      <div
        class="lg:h-96 md:h-36 w-full object-cover object-center group-hover:scale-[1.05] transition-all duration-500"
      >
        <LogoConfused />
      </div>
      <div class="p-5">
        <h2 class="text-3xl font-semibold text-black dark:text-zinc-300 pb-1 group-hover:text-sky-700 dark:group-hover:text-blue-500">
          No hay publicaciones disponibles
        </h2>

        <div class="flex group-hover:underline text-sky-700 dark:text-blue-500 items-center pt-2">
          <p>Regresar al Inicio</p>
          <LogoArrow />
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
