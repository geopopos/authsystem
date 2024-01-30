<script setup>
import { useAuthStore } from "../../stores/auth";

const authStore = useAuthStore();
const router = useRouter();

onMounted(() => {
  authStore.signout();
  router.push("/");
});
</script>

<template>
  <div></div>
</template>

<style lang="css" scoped></style>
