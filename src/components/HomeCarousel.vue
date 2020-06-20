<template>
  <el-carousel height="42vw">
    <el-carousel-item v-for="(src, index) in homeImages" :key="index">
      <el-image
        :src="src"
        fit="fill"
        style="height:42vw;width: 100%"
        :preview-src-list="homeImages"
      ></el-image>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  export default {
    name: "HomeCarousel",
    data() {
      return {
        homeImages: [
          "static/img/components/home/2.jpg",
          "static/img/components/home/3.jpg",
          "static/img/components/home/4.jpg",
        ]
      }
    }
  }
</script>

<style scoped>

</style>
