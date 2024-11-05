<template>
    <div class="pe-6">
        <div class="flex flex-row items-center gap-2 mb-4">
            <h2 class="text-2xl font-bold">Latest Blogs</h2>
            <NuxtLink
                to="/blog"
                class="flex flex-row gap-1 items-center text-primary"
            >
                <Eye class="w-5" />
                <span>More</span>
            </NuxtLink>
        </div>
        <Loader v-if="status === 'pending'" />
        <ol
            v-if="status === 'success'"
            class="relative border-s border-gray-500"
        >
            <li class="mb-10 ms-4" v-for="blog in latestBlogs">
                <NuxtLink :to="`/blog/${blog.documentId}`">
                    <div
                        class="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -start-1.5 border border-white"
                    ></div>
                    <span
                        class="mb-1 text-sm font-normal leading-none text-gray-400"
                    >
                        {{ new Date(blog.date).toLocaleDateString() }}
                    </span>
                    <h3 class="text-lg font-semibold text-gray-900">
                        {{ blog.title }}
                    </h3>
                    <p class="mb-4 text-base font-normal text-gray-500">
                        {{ blog.preview }}
                    </p>
                </NuxtLink>
                {{ blog.author }}
            </li>
        </ol>
        <div v-else class="min-w-xl">Blogs are currently not available</div>
    </div>
</template>

<script setup lang="ts">
import { Eye } from "lucide-vue-next";
import type { Blog } from "~/types/blog-types";

const { data, status } = await useAsyncData("blogs", () =>
    $fetch(
        "/api/cms/blogs?pagination[page]=1&pagination[pageSize]=3&sort=date",
        {
            method: "GET",
        },
    ),
);

const latestBlogs = computed(() => data.value?.data ?? []);
</script>
