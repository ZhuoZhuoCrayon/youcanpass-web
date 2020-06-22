<template>
  <div id="cost-page">
    <home-carousel></home-carousel>
    <div class="title">
      <h1>The Price of Cycling.</h1>
      <h3>You can choose to pay for every single ride or join us to become a member</h3>
    </div>
    <cost-form></cost-form>
  </div>
</template>

<script>
  import HomeCarousel from "@/components/HomeCarousel";
  import BikeMall from "@/components/BikeMall";
  export default {
    name: "ReviewsPage",
    components: {
      "home-carousel": HomeCarousel,
      "cost-form": BikeMall,
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
