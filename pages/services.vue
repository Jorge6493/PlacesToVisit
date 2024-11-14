<template>
  <div>
    <ULandingCTA
      title="Order here"
      description="See our available services"
      align="center"
      :card="false"
    >
      <ULandingGrid>
        <ULandingCard
        class="col-span-6 row-span-2"
        title="Desktop Cleanup"
        description="Whole desktop cleanup and Thermal paste replacement"
        icon="i-heroicons-photo"
        color="primary"
        orientation="horizontal"
      >
      <img
        src="https://picsum.photos/640/360?grayscale"
        class="w-full rounded-md"
      />
      </ULandingCard>
      <ULandingCard
        class="col-span-6 row-span-2"
        title="Laptop Cleanup"
        description="Whole laptop cleanup and Thermal paste replacement"
        icon="i-heroicons-photo"
        color="primary"
        orientation="horizontal"
      >
      <img
        src="https://picsum.photos/640/360?grayscale"
        class="w-full rounded-md"
      />
      </ULandingCard>
      </ULandingGrid>
    </ULandingCTA>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>