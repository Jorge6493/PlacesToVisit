<script setup lang="ts">
import { ref } from 'vue'
import { useAnimations, useGLTF } from '@tresjs/cientos'

const { scene: model, animations } = await useGLTF(
  '/models/AkuAku.gltf', { draco: true }
  // '/models/housemodel.glb', { draco: true }
  // '/models/lidar.glb', { draco: true }
    // '/models/lidar2.glb', { draco: true }

)

const { actions } = useAnimations(animations, model)


</script>

<template>
  <primitive :object="model" />
</template>