<template>
  <CommonDialog
    title="🚧 Daytistics is on its way!"
    :open="isOpen"
    @close="closeDialog()"
  >
    <p>
      We're working tirelessly to bring Daytistics to life and can't wait to
      share it with you. If you'd like to follow our journey or be among the
      first to know when Daytistics launches, subscribe to our newsletter! Thank
      you for your patience.
    </p>
    <form @submit.prevent="form.submit" class="flex flex-col gap-3 mt-6">
      <div class="flex flex-row gap-2">
        <input
          required
          type="email"
          placeholder="Email"
          class="input"
          v-model="form.email.value"
        />
        <button v-if="!loading" type="submit" class="button">Subscribe</button>
        <Loader v-else class="w-10 h-auto" />
      </div>
      <p
        :class="{
          'text-red-500': failed,
          'text-green-500': !failed,
        }"
      >
        {{ message }}
      </p>
    </form>
  </CommonDialog>
</template>

<script setup lang="ts">
import { loadNuxtConfig } from "nuxt/kit";

const emit = defineEmits(["close"]);

const form = useForm();

const isOpen = ref<boolean>(false);
const loading = ref<boolean>(false);
const failed = ref<boolean>(false);
const message = ref<string>("");

const props = defineProps<{
  open: boolean;
}>();

onUpdated(() => {
  isOpen.value = props.open;
});

function closeDialog() {
  isOpen.value = false;
  emit("close");
}

function useForm() {
  const email = ref<string>("");

  const submit = async () => {
    await $fetch("/api/newsletter-registrations", {
      method: "POST",
      body: {
        data: {
          email: email.value,
        },
      },
      onRequest: () => {
        loading.value = true;
      },
      onResponse: ({ response }) => {
        loading.value = false;
        if (response.status === 201) {
          failed.value = false;
          message.value = "You have successfully subscribed to the newsletter.";
        }
      },
    }).catch((error) => {
      failed.value = true;
      message.value = "An error occurred while subscribing to the newsletter.";
    });
  };

  return {
    email,
    submit,
  };
}
</script>
