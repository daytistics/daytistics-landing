<template>
    <div v-html="privacy" class="prose"></div>
</template>

<script setup lang="ts">
import { parse } from "marked";

const { data } = await useAsyncData("author", () =>
    $fetch("/api/cms/legal/?fields=privacy", {
        method: "GET",
    }),
);

const privacy = parse(data.value.data.privacy);

definePageMeta({
    layout: "legal",
});
</script>
