<script setup lang="ts">
import type { FormError } from "#ui/types";

const client = useSupabaseClient();
const user = useSupabaseUser();
const router = useRouter();
const route = useRoute();

const fields = [
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
  {
    name: "passwordConfirm",
    label: "Confirm Password",
    type: "password",
    placeholder: "Confirm your password",
  },
];

const validate = (state: any) => {
  const errors: FormError[] = [];
  if (!state.password)
    errors.push({ path: "password", message: "Password is required" });
  if (!state.passwordConfirm)
    errors.push({ path: "passwordConfirm", message: "Password is required" });
  if (state.password !== state.passwordConfirm)
    errors.push({ path: "passwordConfirm", message: "Passwords do not match" });

  return errors;
};

async function onSubmit(data: any) {
  try {
    const { data: updateData, error } = await client.auth.updateUser({
      password: data.password,
    });
    console.log("Submitted", data);
    console.log(updateData);
    if (error) {
      console.log(error);
      throw error;
    }
    router.push("/app");
  } catch (error) {
    console.log(error);
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
      title="Set Your New Password Here"
      align="top"
      icon="i-heroicons-lock-closed"
      :ui="{ base: 'text-center', footer: 'text-center' }"
      @submit="onSubmit"
    >
      <template #footer>
        By signing in, you agree to our
        <NuxtLink to="/" class="text-primary font-medium"
          >Terms of Service</NuxtLink
        >.
      </template>
    </UAuthForm>
  </UCard>
</template>
