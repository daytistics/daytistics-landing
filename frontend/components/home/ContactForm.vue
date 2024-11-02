<template>
  <div class="flex flex-col xl:ps-6">
    <h3 class="text-2xl font-bold mb-4">Contact Us</h3>
    <form class="ml-auo space-y-4">
      <input
        type="text"
        placeholder="Name"
        class="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
      />
      <input
        type="email"
        placeholder="Email"
        class="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
      />
      <input
        type="text"
        placeholder="Subject"
        class="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
      />
      <textarea
        placeholder="Message"
        rows="6"
        class="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-blue-500"
      ></textarea>
      <button
        type="button"
        class="text-white bg-primary hover:bg-primary-dark rounded-md text-sm px-4 py-3 w-full !mt-6"
      >
        Send
      </button>
    </form>
  </div>
</template>
