<template>
  <div id="home-page">
    <home-carousel id="home-carousel"/>
    <bike-map id="bike-map"/>
    <bike-process id="bk-message"></bike-process>
    <bike-introduction id="bike-introductions"></bike-introduction>
  </div>
</template>

<script>
  import BikeMap from "@/components/BikeMap";
  import HomeCarousel from "@/components/HomeCarousel";
  import BikeProcess from "@/components/BikeProcess";
  import Introduction from "@/components/Introduction";
  export default {
    name: "HomePage",
    components: {
      "bike-map": BikeMap,
      "home-carousel": HomeCarousel,
      "bike-process": BikeProcess,
      "bike-introduction": Introduction,
    }
  }
</script>
<style scoped>
  #bike-map{
    margin-bottom: 100px;
    margin-top: 50px;
  }
</style>
