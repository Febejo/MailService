<template>
    <UForm :validate="validate" :state="state" class="sm:w-[600px] w-[400px] m-auto" @submit="onSubmit">
        <h1 class=" font-extrabold text-center text-4xl m-4">Send message with SMTP</h1>

        <div
            class="bg-BackgroundHighligtColor_Light dark:bg-BackgroundHighligtColor_Dark p-6 rounded-xl shadow-sm space-y-4 duration-150 [&>*]:duration-150">
            <section class="bg-BackgroundColor_Light dark:bg-BackgroundColor_Dark p-6 px-10 rounded-xl">
                <div class="sm:flex gap-4">
                    <UFormGroup label="Host" name="host">
                        <UInput v-model="state.host" />
                    </UFormGroup>

                    <div class="flex">
                        <UFormGroup label="Port" name="port" class="w-full">
                            <UInput v-model="state.port" type="number" />
                        </UFormGroup>

                        <UFormGroup label="Secure" name="Secure" class="flex flex-col items-center">
                            <UCheckbox v-model="state.secure" />
                        </UFormGroup>
                    </div>
                </div>

                <div class="sm:flex gap-4">
                    <UFormGroup label="User" name="user">
                        <UInput v-model="state.user" />
                    </UFormGroup>

                    <UFormGroup label="Password" name="password">
                        <UInput v-model="state.password" type="password" />
                    </UFormGroup>
                </div>
            </section>

            <section class="bg-BackgroundColor_Light dark:bg-BackgroundColor_Dark p-6 px-10 rounded-xl">
                <div class="sm:flex gap-4">
                    <UFormGroup label="Sender" name="sender">
                        <UInput v-model="state.sender" />
                    </UFormGroup>

                    <UFormGroup label="Reciver" name="reciver">
                        <UInput v-model="state.reciver" />
                    </UFormGroup>

                    <UFormGroup label="Subject" name="subject">
                        <UInput v-model="state.subject" />
                    </UFormGroup>
                </div>

                <UFormGroup label="Message" name="message">
                    <UTextarea v-model="state.message" placeholder="Message..." />
                </UFormGroup>
            </section>
            <div class="m-auto w-fit">
                <UButton type="submit" class="m-auto">
                    Send Message
                </UButton>
            </div>
        </div>
    </UForm>
</template>

<script setup>

const { messageSent } = defineProps(['messageSent'])

const state = reactive({
    host: undefined,
    port: undefined,
    secure: false,
    user: undefined,
    password: undefined,
    message: undefined,
    subject: undefined,
    reciver: undefined,
    sender: undefined,


})

function validate() {
    const errors = []
    if (!state.host) errors.push({ path: 'host', message: 'Required' })
    if (!state.port) errors.push({ path: 'port', message: 'Required' })
    if (!state.user) errors.push({ path: 'user', message: 'Required' })
    if (!state.password) errors.push({ path: 'password', message: 'Required' })
    if (!state.message) errors.push({ path: 'message', message: 'Required' })
    if (!state.subject) errors.push({ path: 'subject', message: 'Required' })
    if (!state.reciver) errors.push({ path: 'reciver', message: 'Required' })
    if (!state.sender) errors.push({ path: 'sender', message: 'Required' })
    return errors
}

async function onSubmit(event) {
    const body = event.data

    $fetch('/api/mail', {
        method: 'POST',
        body: { body }
    })
    messageSent()
}
</script>
