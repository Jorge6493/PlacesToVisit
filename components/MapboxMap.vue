<script setup>
    import { ref, onMounted } from 'vue'
    import mapboxgl from 'mapbox-gl';
    const runtimeConfig = useRuntimeConfig()
    const mapContainerref = ref();

    onMounted(() => {
        //console.log("maptoken: ", mapconfig);
        mapboxgl.accessToken = runtimeConfig.public.maptoken;

        const map = new mapboxgl.Map({
            style: "mapbox://styles/mapbox/streets-v12", // Replace with your preferred map style
            center: [-71.224518, 42.213995],
            zoom: 9,
            container: mapContainerref.value
        })
        console.log('mapvalue ', mapContainerref)

        
    })

</script>
<template>
    <div id='' class="mapContainer" ref="mapContainerref"></div>
</template>
<style>
@import url("mapbox-gl/dist/mapbox-gl.css");
.mapContainer {
    height: 500px; width: 100%;
}
</style>