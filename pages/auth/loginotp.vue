<script setup>

const route = useRoute();
const code = route.query.code;

console.log(code)

const authStore = useAuthStore();
const router = useRouter();

try {
    await  authStore.verifyOtp('recovery', code)
    console.log(data)
    router.push('/auth/reset_password')
} catch (error) {
    console.log(error)
}


</script>

<template>
    <div>
        
    </div>
</template>

<style lang="css" scoped>

</style>