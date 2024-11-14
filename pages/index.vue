<script>



// const appConfig = useAppConfig()
</script>
<template>
    <div>
        <!-- <UButton>Button</UButton>
        <AppAlert> on slot</AppAlert> -->

        <ULandingHero description="JRam Repair">
            <template #title>
                Professional Repair Services
            </template>
            <template #default>
        <img
            src="https://picsum.photos/640/360"
            class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
        />
    </template>

    </ULandingHero>
    <ULandingSection 
        title="Less Verbose Diagnostics"
        description="Even a <rank> can understand it!" 
        align="left" 
        icon="i-heroicons-rocket-launch"
    >
    <img
      src="https://picsum.photos/640/360"
      class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
    />
    </ULandingSection>

    <ULandingSection 
        title="We don't ask for passwords" 
        description="Unless you want a backup"
        align="right" 
        
        >
    <img
      src="https://picsum.photos/640/360"
      class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
    />
    </ULandingSection>
    </div>
</template>