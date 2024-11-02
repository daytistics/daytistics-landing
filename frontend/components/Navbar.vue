<template>
  <SoonDialog
    @close="comingSoonModalOpen = false"
    :open="comingSoonModalOpen"
  />

  <div class="relative bg-purple-50 text-gray-900">
    <div
      class="relative flex w-screen max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center"
      id="top"
    >
      <NuxtLink
        to="/"
        class="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black uppercase text-transparent bg-gradient-to-tr bg-clip-text from-primary to-primary-dark lg:hover:scale-110 transition"
      >
        Daytistics
      </NuxtLink>
      <input type="checkbox" class="peer hidden" id="navbar-open" />
      <label
        class="absolute top-5 right-7 cursor-pointer md:hidden"
        for="navbar-open"
      >
        <span class="sr-only">Toggle Navigation</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </label>
      <nav
        aria-label="Header Navigation"
        class="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start"
        :class="{ isRoot: isRoot }"
      >
        <ul
          class="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0"
        >
          <li class="md:mr-12">
            <button
              type="button"
              class="button"
              @click="comingSoonModalOpen = true"
            >
              Application
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const isRoot = ref(false);
const comingSoonModalOpen = ref<boolean>(false);

onMounted(() => {
  isRoot.value = router.currentRoute.value.path === "/";
});

watch(comingSoonModalOpen, (value) => {
  console.log(value);
});
</script>
