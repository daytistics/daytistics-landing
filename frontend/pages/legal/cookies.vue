<template>
    <div v-html="imprint" class="prose"></div>
</template>

<script setup lang="ts">
import { parse } from "marked";

const { data } = await useAsyncData("author", () =>
    $fetch("/api/cms/legal", {
        method: "GET",
    }),
);

const imprint = parse(data.value.data.imprint);

definePageMeta({
    layout: "legal",
});
</script>
