<script setup>
import { TresCanvas } from '@tresjs/core';
import { OrbitControls } from '@tresjs/cientos';
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three'


const gl = {
  clearColor: '#82DBC5',
  shadows: true,
  alpha: true,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
  windowSize: true,
}
</script>
<template>
  <div>
    <ULandingSection
    headline="Pro"
    title="The freedom to build anything"
    description="Nuxt UI Pro ships with an extensive set of advanced components that cover a wide range of use-cases."
    align="center"
  >
      <TresCanvas v-bind="gl" >
    <TresPerspectiveCamera
    :position="[11, -1, 11]"
    :look-at="[0, 20, 0]"
  />
    <OrbitControls />
    <Suspense>
      <ActualModel />
    </Suspense>
    <TresDirectionalLight 
    :position="[-4, 8, 4]" 
    :intensity="1.5" 
    cast-shadow />
    <TresAmbientLight :intensity="2" />
  </TresCanvas>
    </ULandingSection>
  </div>

  
</template>