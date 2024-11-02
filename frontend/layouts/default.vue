<template>
  <Navbar />
  <div class="min-h-screen flex flex-col font-inter">
    <div
      class="min-h-48 w-full bg-gradient-to-tr from-green-400 to-blue-500"
    ></div>
    <slot></slot>
  </div>
  <Footer />
</template>
