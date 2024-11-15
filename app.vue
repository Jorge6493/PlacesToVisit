<!-- <script setup lang="ts">
</script>
<template>
    <UContainer class="flex space-x-4 justify-center">
      <ULink
      class=""
      to="/"
      active-class="text-primary"
      inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
    >
      Home
    </ULink>
    <ULink
    class=""
      to="/NewPage"
      active-class="text-primary"
      inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
    >
      Map
    </ULink>
  </UContainer>
  <UContainer>
    <NuxtPage />
  </UContainer>
</template> -->

<script setup lang="ts">
const links = [{
  label: 'Home',
  icon: 'i-heroicons-book-open',
  to: '/'
}, {
  label: 'Services',
  to: '/services'
}, {
  label: 'Map',
  icon: 'i-simple-icons-stackblitz',
  // target: '_blank',
  to: '/map'
},{
  label: '3D Model',
  to: '/3dmodel'
}, {
  label: 'Blog',
  to: '/blog'
}]
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <Logo class="w-auto h-6">Title/Logo here</Logo>
    </template>

    <template #right>
      <UColorModeButton />

      <!-- <UButton icon="i-simple-icons-github" to="https://github.com/nuxt/nuxt" target="_blank" color="gray" variant="ghost" /> -->
    </template>
  </UHeader>

  <UMain>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UMain>

  <UFooter>
    <template #left>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        Copyright © 2016-{{ new Date().getFullYear() }} Nuxt - <NuxtLink class="hover:underline" to="https://github.com/nuxt/nuxt/blob/main/LICENSE" target="_blank">
          MIT License
        </NuxtLink>
      </p>
    </template>

    <template #right>
      <UButton to="https://x.com/nuxt_js" target="_blank" icon="i-simple-icons-x" color="gray" variant="ghost" />
      <UButton to="https://discord.com/invite/ps2h6QT" target="_blank" icon="i-simple-icons-discord" color="gray" variant="ghost" />
      <UButton to="https://github.com/nuxt/nuxt" target="_blank" icon="i-simple-icons-github" color="gray" variant="ghost" />
    </template>
  </UFooter>
  <UNotifications />
</template>
