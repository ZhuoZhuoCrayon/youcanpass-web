<template>
  <div class="amap-wrapper">
    <el-amap
      class="amap-box"
      :vid="'amap-vue'"
      :zoom="mapSettings.zoom"
      :center="mapSettings.center"
    >
      <el-amap-marker
        v-for="(maker, index) in mapMarkers"
        :key="index"
        :position="maker"></el-amap-marker>
    </el-amap>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        mapSettings: {
          zoom: 15,
          center: [113.944798, 22.530929]

        },
        mapMarkers: [
          [113.945229, 22.530137],
          [113.951059, 22.533475],
          [113.949227, 22.536404],
          [113.94911, 22.539225],
          [113.947637, 22.540218],
          [113.954149, 22.540718],
          [113.955353, 22.544958],
          [113.955892, 22.530988],
          [113.944798, 22.530929],
        ]
      }
    }
  }
</script>

<style>
  .amap-wrapper {
    width: 100%;
    height: 30vw;
  }
</style>
