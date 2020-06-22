<template>
  <div class="bike-introduction">
    <el-row style="margin: 20px">
      <el-col :span="14">
        <el-image
          style="margin: 20px"
          src="static/img/components/introduction/5.jpg"
          fit="fill"
        ></el-image>
      </el-col>
      <el-col :span="10">
        <el-timeline style="margin-top: 20px">
          <el-timeline-item timestamp="2018/4/12" placement="top">
            <el-card>
              <h3>BikeSharing officially established .</h3>
              <p> Crayon submit at 2019/4/12 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2019/4/20" placement="top">
            <el-card>
              <h3>More than 10 million users !</h3>
              <p>Milepost at 2019/10/20 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2020/6/21" placement="top">
            <el-card>
              <h3>Introducing artificial intelligence.</h3>
              <p>Mark speak at 2020/6/21 20:46</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "Introduce",
    data() {
      return {
      };
    }
  }
</script>

<style scoped>
  .bike-introduction {
    width: auto;
    margin: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
</style>
