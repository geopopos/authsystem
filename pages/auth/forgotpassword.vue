<script setup lang="ts">
import type { FormError } from '#ui/types'
import { errorMessages } from 'vue/compiler-sfc';

const authStore = useAuthStore();
const loading = ref(false);

const fields = [{
  name: 'email',
  type: 'text',
  label: 'Email',
  placeholder: 'Enter your email'
}]

const validate = (state: any) => {
    const errors: FormError[] = []
    if (!state.email) errors.push({ path: 'email', message: 'Email is required' })
    return errors
}

const providers = []
const alert = reactive({show: false, title: '', description: '', color: 'rose'})

async function onSubmit (data: any) {
    try{
        loading.value = true;
        await authStore.sendPasswordResetEmail(data.email)
        loading.value = false
        alert.title = "Password Reset"
        alert.description = "Password Reset Request Successful! Check your email and click the link to reset your password"
        alert.show = true
        alert.color = "green"
        
    } catch (error) {
        loading.value = false;
        console.log("ERROR" + error)
        alert.title = "Signin Error"
        alert.description = error.message
        alert.show = true
        alert.color = "rose"
    }
}
</script>

<!-- eslint-disable vue/multiline-html-element-content-newline -->
<!-- eslint-disable vue/singleline-html-element-content-newline -->
<template>
  <UCard class="max-w-sm w-full">
    <UAuthForm
      :fields="fields"
      :validate="validate"
      :providers="providers"
      title="Welcome back!"
      align="top"
      icon="i-heroicons-lock-closed"
      :ui="{ base: 'text-center', footer: 'text-center' }"
      @submit="onSubmit"
      :loading="loading"
    >
      <template #description>
        Remember Your Password? <NuxtLink to="/auth/signin" class="text-primary font-medium">Sign in</NuxtLink>.
      </template>

      <template #footer>
        
      </template>
    </UAuthForm>
    <UAlert
        icon="i-heroicons-command-line"
        :color="alert.color"
        variant="solid"
        :title="alert.title"
        :description="alert.description"
        v-show="alert.show"
    />
    

  </UCard>
</template>

