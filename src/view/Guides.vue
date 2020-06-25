<template>
  <div id="guides">
    <home-carousel></home-carousel>
    <div class="title">
      <h1>How to begin your trip?</h1>
      <h3>Are you an employer?</h3>
      <h3>If yes,then contact us for further coopreration!</h3>
      <h3> IF ont,then follow the guides here.</h3>
    </div>
    <bike-guides></bike-guides>
  </div>
</template>

<script>
  import HomeCarousel from "@/components/HomeCarousel";
  import BikeGuides from "@/components/BikeGuides";
  export default {
    name: "Guides",
    components: {
      "home-carousel": HomeCarousel,
      "bike-guides": BikeGuides,
    }
  }
</script>

<style scoped>
  .title {
    text-align: center;
    font-family: century gothic;
    font-size: 35px;
  }
</style>
