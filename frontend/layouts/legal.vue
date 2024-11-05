<template>
    <Navbar />
    <div class="min-h-screen flex flex-col font-inter">
        <div
            class="min-h-48 w-full bg-gradient-to-tr from-green-400 to-blue-500"
        ></div>
        <main
            class="px-4 flex w-screen max-w-screen-xl md:mx-auto md:flex-row md:items-center mt-10 mb-16"
        >
            <slot></slot>
        </main>
    </div>
    <Footer />
</template>
