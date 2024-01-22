<script setup lang="ts">
    import type { NavItem } from '@nuxt/content/dist/runtimes/types'

    const navigation = inject<Ref<NavItem[]>>('navigation', ref([]))

    const links = [
        {
            label: 'Home',
            to: '/'
        },
        {
            label: 'About',
            to: '/about'
        },
        {
            label: 'Contact',
            to: '/contact'
        }
    
    ]
</script>

<template>
    <UHeader :links="links" class="mb-10">
        <template #logo>
            <Logo class="w-auto h-6" />
        </template>
        <template #right>
            <UButton to="/auth/signout" variant="link">Sign Out</UButton>
            <UButton to="/app/profile">Profile</UButton>
        </template>
    </UHeader>

    <div class="flex justify-center items-center">
        <slot />
    </div>
</template>