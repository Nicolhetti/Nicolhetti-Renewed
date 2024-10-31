<script lang="ts" setup>
const { data } = await useAsyncData('home', () => queryContent('/games').sort({ _id: -1 }).find());

const elementPerPage = ref(5);
const pageNumber = ref(1);
const searchTest = ref('');

const formattedData = computed(() => {
  return data.value?.map((articles) => {
    return {
      path: articles._path,
      title: articles.title || 'no-title available',
      description: articles.description || 'no-description available',
      image: articles.image || '/not-found.jpg',
      alt: articles.alt || 'no alter data available',
      ogImage: articles.ogImage || '/not-found.jpg',
      date: articles.date || 'not-date-available',
      tags: articles.tags || [],
      published: articles.published || false,
    };
  }) || [];
});

// Computed property to filter data based on search input
const searchData = computed(() => {
  const searchValue = searchTest.value.toLowerCase();
  if (!searchValue) return formattedData.value; // Return all items if search is empty
  return formattedData.value.filter((data) => data.title.toLowerCase().includes(searchValue));
});

// Computed property to handle pagination
const paginatedData = computed(() => {
  const startInd = (pageNumber.value - 1) * elementPerPage.value;
  const endInd = pageNumber.value * elementPerPage.value;
  return searchData.value.filter((_, idx) => idx >= startInd && idx < endInd);
});

// Watch to reset page number when search input changes
watch(searchTest, () => {
  pageNumber.value = 1;
});

// Function to go to the previous page
function onPreviousPageClick() {
  if (pageNumber.value > 1) pageNumber.value -= 1;
}

// Total pages based on filtered search data
const totalPage = computed(() => {
  const ttlContent = searchData.value.length || 0;
  return Math.ceil(ttlContent / elementPerPage.value);
});

// Function to go to the next page
function onNextPageClick() {
  if (pageNumber.value < totalPage.value) pageNumber.value += 1;
}

// Set the page metadata
useHead({
  title: 'Juegos',
  meta: [
    {
      name: 'description',
      content: 'Here you will find all the game posts I have written & published on this site.',
    },
  ],
});

// Generate OG Image
const siteData = useSiteConfig();
defineOgImage({
  props: {
    title: 'Juegos',
    description: 'Aquí encontrarás todas las publicaciones de juegos que he escrito y publicado en este sitio.',
    siteName: siteData.url,
  },
});
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <ArchiveHero />

    <div class="px-6">
      <input
        v-model="searchTest"
        placeholder="Search"
        type="text"
        class="block w-full bg-[#F1F2F4] dark:bg-slate-900 dark:placeholder-zinc-500 text-zinc-300  rounded-md border-gray-300 dark:border-gray-800 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      >
    </div>

    <ClientOnly>
      <div v-auto-animate class="space-y-5 my-5 px-4">
        <template v-for="post in paginatedData" :key="post.title">
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
          />
        </template>

        <ArchiveCard
          v-if="paginatedData.length <= 0"
          title="No se encontró ninguna publicación"
          image="/not-found.jpg"
        />
      </div>

      <template #fallback>
        <!-- this will be rendered on server side -->
        <gameLoader />
        <gameLoader />
      </template>
    </ClientOnly>

    <div class="flex justify-center items-center space-x-6 ">
      <button :disabled="pageNumber <= 1" @click="onPreviousPageClick">
        <Icon name="mdi:code-less-than" size="30" :class="{ 'text-sky-700 dark:text-sky-400': pageNumber > 1 }" />
      </button>
      <p>{{ pageNumber }} / {{ totalPage }}</p>
      <button :disabled="pageNumber >= totalPage" @click="onNextPageClick">
        <Icon name="mdi:code-greater-than" size="30" :class="{ 'text-sky-700 dark:text-sky-400': pageNumber < totalPage }" />
      </button>
    </div>
  </main>
</template>
