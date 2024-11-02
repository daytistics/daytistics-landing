<template>
  <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white antialiased">
    <div class="flex justify-between px-4 mx-auto max-w-screen-xl">
      <article
        class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue"
      >
        <header class="mb-4 lg:mb-6 not-format border-b pb-6">
          <address class="flex items-center mb-6 not-italic">
            <div class="inline-flex items-center mr-3 text-sm text-gray-900">
              <img
                class="mr-4 w-16 h-16 rounded-full"
                :src="`${useRuntimeConfig().public.mediaAddress}${
                  author.avatar.url
                }`"
                :alt="author.name"
              />
              <div>
                <a
                  href="#"
                  rel="author"
                  class="text-xl font-bold text-gray-900"
                  >{{ author.name }}</a
                >
                <p class="text-base text-gray-500">
                  {{ author.position }}
                </p>
                <p class="text-base text-gray-500">
                  <span>{{ new Date(blog.date).toLocaleDateString() }}</span>
                </p>
              </div>
            </div>
          </address>
          <h1
            class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl"
          >
            {{ blog.title }}
          </h1>
          <h2 class="text-lg">{{ blog.preview }}</h2>
        </header>
        <div v-html="marked.parse(blog.entry)" class="prose"></div>
      </article>
    </div>
  </main>
</template>

<script setup lang="ts">
import { marked } from "marked";
import type { Author, Blog } from "~/types/blog-types";

const id = useRoute().params.id;

const { data: blogData, status: blogStatus } = await useAsyncData("blog", () =>
  $fetch(`/api/blogs/${id}?populate=author`, {
    method: "GET",
  })
);
const blog = ref<Blog>(blogData.value.data as Blog);

const { data: authorData, status: authorStatus } = await useAsyncData(
  "author",
  () =>
    $fetch(`/api/authors/${blog.value.author.documentId}?populate=avatar`, {
      method: "GET",
    })
);

const author = authorData.value.data as Author;
</script>
