<template>
    <div class="m-auto flex flex-col items-center duration-150">
        <UIcon name="i-heroicons-envelope-solid" class=" size-14" />
        <h1 class="font-extrabold text-center text-4xl m-4">Message sent!</h1>
    </div>
</template>

<script setup>
const { messageSent } = defineProps(['messageSent'])

</script>
