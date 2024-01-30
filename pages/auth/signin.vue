<script setup lang="ts">
import { useAuthStore } from "../../stores/auth";
import type { FormError } from "#ui/types";
import { errorMessages } from "vue/compiler-sfc";
import { useRouter } from "vue-router";
import { reactive, ref } from "vue";

const authStore = useAuthStore();
const router = useRouter();

const loading = ref(false);

const fields = [
  {
    name: "email",
    type: "text",
    label: "Email",
    placeholder: "Enter your email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
];

const validate = (state: any) => {
  const errors: FormError[] = [];
  if (!state.email)
    errors.push({ path: "email", message: "Email is required" });
  if (!state.password)
    errors.push({ path: "password", message: "Password is required" });
  return errors;
};

const providers = [];
const errorAlert = reactive({ show: false, title: "", description: "" });

async function onSubmit(data: any) {
  try {
    loading.value = true;
    await authStore.signin(data.email, data.password);
    loading.value = false;
    router.push("/app");
  } catch (error) {
    loading.value = false;
    console.log("ERROR" + error);
    errorAlert.title = "Signin Error";
    errorAlert.description = error.message;
    errorAlert.show = true;
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
        Don't have an account?
        <NuxtLink to="/auth/signup" class="text-primary font-medium"
          >Sign up</NuxtLink
        >.
      </template>

      <template #password-hint>
        <NuxtLink to="/auth/forgotpassword" class="text-primary font-medium"
          >Forgot password?</NuxtLink
        >
      </template>

      <template #footer>
        By signing in, you agree to our
        <NuxtLink to="/" class="text-primary font-medium"
          >Terms of Service</NuxtLink
        >.
      </template>
    </UAuthForm>
    <UAlert
      icon="i-heroicons-command-line"
      color="rose"
      variant="solid"
      :title="errorAlert.title"
      :description="errorAlert.description"
      v-show="errorAlert.show"
    />
  </UCard>
</template>
