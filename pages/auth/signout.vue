<script setup>
const authStore = useAuthStore();
const router = useRouter();

onMounted(() => {
    authStore.signout();
    router.push('/');
});

</script>

<template>
    <div>
        
    </div>
</template>

<style lang="css" scoped>

</style>