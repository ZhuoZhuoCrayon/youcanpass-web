<template>
  <div id="bike-user">
    <el-row style="margin: 20px">
      <el-col :span="14">
        <message :id="id"></message>
      </el-col>
      <el-col :span="8">
        <info-card :id="id" style="margin-top: 34px"></info-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import InfoCard from "@/components/InfoCard";
  import Message from "@/components/Message";
  export default {
    name: "BikeUser",
    props: ["id"],
    components: {
      "info-card": InfoCard,
      "message": Message
    }
  }
</script>

<style scoped>

</style>
