<template>
  <div class="bike-process">
    <div class="title">
      <h1>We are always on the road. </h1>
    </div>
    <el-row style="margin-left: 18vw">
      <el-col :span="8">
        <div class="bike-cover">
          <el-progress
            type="circle"
            :percentage="70">
          </el-progress>
          <h2 class="process-font">Coverage</h2>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="bike-use">
          <el-progress
            type="circle"
            color="green"
            :percentage="81">
          </el-progress>
          <h2 class="process-font" style="margin-left: 28px">Usage</h2>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="bike-use">
          <el-progress
            type="circle"
            color="red"
            :percentage="8">
          </el-progress>
          <h2 class="process-font" style="margin-left: 30px">Scrap</h2>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "BikeProcess"
  }
</script>

<style scoped lang="scss">
  .bike-process{
    width: auto;
  }
  .title {
    text-align: center;
    font-family: century gothic;
    font-size: 35px;
  }
  .process-font{
    font-family: century gothic;
  }
</style>
