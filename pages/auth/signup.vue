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
}, {
  name: 'password',
  label: 'Password',
  type: 'password',
  placeholder: 'Enter your password'
},
{
  name: 'passwordVerify',
  label: 'Verify Password',
  type: 'password',
  placeholder: 'Enter your password again'
}]

const validate = (state: any) => {
    const errors: FormError[] = []
    if (!state.email) errors.push({ path: 'email', message: 'Email is required' })
    if (!state.password) errors.push({ path: 'password', message: 'Password is required' })
    if (state.password != state.passwordVerify) errors.push({ path: 'passwordVerify', message: 'Passwords do not match' })
    return errors
}

const providers = []
const alert = reactive({show: false, title: '', description: '', color: 'rose'})

async function onSubmit (data: any) {
    try{
        loading.value = true;
        const response = await authStore.signup(data.email, data.password)
        loading.value = false
        alert.title = "Registration Success"
        alert.description = "Registration successful! Please check your email to confirm your account."
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
        Already have an account? <NuxtLink to="/auth/signin" class="text-primary font-medium">Sign in</NuxtLink>.
      </template>

      <template #footer>
        By signing in, you agree to our <NuxtLink to="/" class="text-primary font-medium">Terms of Service</NuxtLink>.
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

