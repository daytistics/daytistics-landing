<template>
    <main
        class="px-4 flex w-screen max-w-screen-xl md:mx-auto md:flex-row md:items-center mt-10"
    >
        <div v-html="imprint" class="prose"></div>
    </main>
</template>

<script setup lang="ts">
import { parse } from "marked";

const { data } = await useAsyncData("author", () =>
    $fetch("/api/legal", {
        method: "GET",
    }),
);

const imprint = parse(data.value.data.imprint);
</script>
