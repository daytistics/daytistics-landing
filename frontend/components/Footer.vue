<template>
  <footer class="bg-gray-100">
    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="text-sm text-gray-600 mb-4 md:mb-0 flex flex-col gap-2">
          <div>Made with ❤️ by <b>Daytistics</b> - &copy; 2024 Daytistics</div>
          <div class="flex justify-center md:justify-start">
            <a href="#" class="text-primary hover:text-primary-dark">Imprint</a>
          </div>
        </div>
        <ClientOnly>
          <div class="flex space-x-4">
            <NuxtLink
              to="#"
              class="text-gray-600 hover:text-primary transition-colors duration-200"
            >
              <YoutubeIcon />
            </NuxtLink>
            <NuxtLink
              to="#"
              class="text-gray-600 hover:text-primary transition-colors duration-200"
            >
              <LinkedinIcon />
            </NuxtLink>
            <NuxtLink
              to="#"
              class="text-gray-600 hover:text-primary transition-colors duration-200"
            >
              <GithubIcon />
            </NuxtLink>
          </div>
        </ClientOnly>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { GithubIcon, LinkedinIcon, YoutubeIcon } from "lucide-vue-next";
</script>
