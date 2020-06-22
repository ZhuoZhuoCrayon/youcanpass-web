<template>
    <div id="reviews-page">
      <home-carousel></home-carousel>
      <div class="title">
        <h1>About the Review. </h1>
        <h3>Here are the review about the bike-sharing project,from both employees and employers.</h3>
      </div>
      <review-form></review-form>
    </div>
</template>

<script>
  import HomeCarousel from "@/components/HomeCarousel";
  import ReviewForm from "@/components/ReviewForm";
  export default {
    name: "ReviewsPage",
    components: {
      "home-carousel": HomeCarousel,
      "review-form": ReviewForm,
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
