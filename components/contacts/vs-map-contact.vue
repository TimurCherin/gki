<template>
  <div class="">
    <div id="nuxtMap" style="width: 100%; height: 600px;"></div>
  </div>
</template>

<script lang="ts">
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export default {
  props: {

  },
  async mounted() {
    await this.initMap();
  },
  methods: {
    initMap(): void {
      const map = new maplibregl.Map({
        container: 'nuxtMap',
        style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',
        center: [30.5164144, 50.4287160],
        zoom: 18,
      });
      map.on('load', this.onMapLoad);
      const marker = new maplibregl.Marker();
      marker.setLngLat([30.5164144, 50.4287160]);
      marker.addTo(map);
    },

  },
};
</script>

<style>
#map {
  overflow: hidden;
  height: 200px;
}
</style>
