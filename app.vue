<script setup lang="ts">
</script>
<template>
  <UContainer class="flex flex-row justify-center">
      <ULink
      class="basis-1/4"
      to="/"
      active-class="text-primary"
      inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
    >
      Home
    </ULink>
    <ULink
    class="basis-1/4"
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
</template>
