<template>
  <main class="flex-grow container mx-auto px-4 py-16 flex flex-col">
    <div class="flex flex-col md:flex-row xl:justify-center xl:p-0 md:p-7">
      <HomeAbout />
    </div>
    <div class="flex justify-center">
      <div
        class="flex flex-1 border-t flex-grow container mx-auto max-w-6xl p-8 gap-4 mt-10 xl:flex-row flex-col"
      >
        <HomeLatestBlogs class="max-w-xl" />
        <HomeContactForm />
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
