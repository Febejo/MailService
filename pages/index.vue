<template>

    <head>
        <title>SMTP Mailer</title>
        <meta name="title" content="SMTP Mailer">
        <meta name="description"
            content="Free advanced online tool to send mails through your SMTP server. SMTP Mailer provides a full interface to mail from your Mail server on the fly.">

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="https://Febejo.com">
        <meta property="og:title" content="SMTP Mailer">
        <meta property="og:description"
            content="Free advanced online tool to send mails through your SMTP server. SMTP Mailer provides a full interface to mail from your Mail server on the fly.">
        <meta property="og:image" content="public\Send-Emails-with-Gmail-API_transparent.png">

        <!-- Twitter -->
        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:url" content="https://Febejo.com">
        <meta property="twitter:title" content="SMTP Mailer">
        <meta property="twitter:description"
            content="Free advanced online tool to send mails through your SMTP server. SMTP Mailer provides a full interface to mail from your Mail server on the fly.">
        <meta property="twitter:image" content="public\Send-Emails-with-Gmail-API_transparent.png">
    </head>

    <div
        class="h-[100vh] flex flex-col justify-center bg-BackgroundColor_Light dark:bg-BackgroundColor_Dark duration-150 m-auto overflow-hidden">


        <Transition name="fade" mode="out-in">
            <component :is="activeComponent" :messageSent="clickk"></component>
        </Transition>

        <div class="flex w-full justify-between p-4">
            <p
                class=" dark:text-BackgroundHighligtColor_Dark text-BackgroundHighligtColor_Light font-bold duration-100">
                A Febejo
                creation</p>
            <ClientOnly>
                <UButton :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" color="gray"
                    variant="ghost" aria-label="Theme" @click="isDark = !isDark" class=" w-fit" />
                <template #fallback>
                    <div class="w-8 h-8" />
                </template>
            </ClientOnly>
        </div>
    </div>
</template>

<script setup>
import { shallowRef } from 'vue'
import send from '/components/send.vue'
import sent from '/components/sent.vue'

const activeComponent = shallowRef(send)

function clickk() {
    activeComponent.value = sent

    setTimeout(() => {
        activeComponent.value = send
    }, 2000);
}

const colorMode = useColorMode()
const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
})
</script>

<style>
/* we will explain what these classes do next! */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>