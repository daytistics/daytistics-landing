<template>
  <section class="bg-white">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div
        v-if="blogsStatus != 'success' || authorsStatus != 'success'"
        class="w-full flex flex-row justify-center"
      >
        <Loader />
      </div>
      <div v-else class="grid gap-8 lg:grid-cols-2">
        <article
          v-for="blog in blogs"
          class="p-6 bg-white rounded-lg border border-gray-200 shadow-md"
        >
          <div class="flex justify-between items-center mb-5 text-gray-500">
            <span
              class="bg-primary text-white text-xs font-medium inline-flex items-center px-3 py-1 rounded-xl"
            >
              {{ blog.category }}
            </span>
            <span class="text-sm">{{
              new Date(blog.date).toLocaleDateString()
            }}</span>
          </div>
          <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            <NuxtLink :to="`/blog/${blog.documentId}`">{{
              blog.title
            }}</NuxtLink>
          </h2>
          <p class="mb-5 font-light text-gray-500">
            {{ blog.preview }}
          </p>
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-4">
              <img
                class="w-7 h-7 rounded-full"
                :src="`${useRuntimeConfig().public.mediaAddress}${
                  authors.find(
                    (author) => author.documentId === blog.author.documentId
                  )?.avatar.url
                }`"
                :alt="`${blog.author.name}\'s avatar`"
              />
              <span class="font-medium">
                {{ blog.author.name }}
              </span>
            </div>
            <NuxtLink
              :to="`/blog/${blog.documentId}`"
              class="inline-flex items-center font-medium text-primary-600 hover:underline"
            >
              Read more
              <svg
                class="ml-2 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Author, Blog } from "~/types/blog-types";

const { data: blogsData, status: blogsStatus } = await useAsyncData(
  "blogs",
  () =>
    $fetch(
      "/api/blogs?pagination[page]=1&pagination[pageSize]=3&sort=date&populate=*",
      {
        method: "GET",
      }
    )
);

const blogs = blogsData.value.data as Blog[];

// Fetching the data again because Strapi does not support deep populating :(
const { data: authorsData, status: authorsStatus } = await useAsyncData(
  "authors",
  () => {
    const filters = blogs
      .map((blog) => blog.author.documentId)
      .reduce((acc, id, index) => {
        if (index > 0) acc += "&"; // Add & between elements but not at the start
        return acc + `filters[documentId][$in]=${encodeURIComponent(id)}`;
      }, "")
      .toString();

    return $fetch(`/api/authors/?${filters}&populate=avatar`, {
      method: "GET",
    });
  }
);

const authors = authorsData.value.data as Author[];
</script>
