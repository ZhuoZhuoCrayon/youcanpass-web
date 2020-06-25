<template>
  <div class="bike-guides">
    <el-row style="margin: 20px">
      <el-col :span="14">
        <el-image
          style="margin: 20px"
          src="static/img/components/bikeguides/1.jpg"
          fit="fill"
        ></el-image>
      </el-col>
      <el-col :span="10">
        <div class="step-title" style="font-family: century gothic;margin-left: 20px">
          <h1>Further cooperation</h1>
          <h3>Financial Aspects.</h3>
        </div>

        <div style="height: 500px;margin: 20px">
          <el-steps direction="vertical" :active="1">
            <el-step title="Step 1" description="Register an corporate account and certify relevant information."></el-step>
            <el-step title="Step 2" description=" Choose you package."></el-step>
            <el-step title="Step 3" description="Tell your employers to commute by bike!"></el-step>
          </el-steps>
        </div>
      </el-col>
    </el-row>
    <el-row style="margin: 20px">
      <el-col :span="10">
        <div class="step-title" style="font-family: century gothic;margin-left: 20px">
          <h1>Detailed Steps</h1>
          <h3>Legislation and insurance information. </h3>
        </div>

        <div style="height: 500px;margin: 20px">
          <el-steps direction="vertical" :active="1">
            <el-step
              title="Step 1: SEE COST HERE"
              description="Join Become a personal member online or purchase a short-term pass at a kiosk to use the Bikeshare system.">
            </el-step>
            <el-step
              title="Step 2: FIND BIKES"
              description="Find an available bike nearby, and get a ride code or use your bike key to unlock it.">
            </el-step>
            <el-step
              title="Step 3"
              description="Take as many short trips as you want while your pass or membership is active.">
            </el-step>
            <el-step
              title="Step 4"
              description="Return your bike to any station, and wait for the green light on the dock to make sure it's locked.">
            </el-step>
          </el-steps>
        </div>
      </el-col>
      <el-col :span="14">
        <el-image
          style="margin: 20px"
          src="static/img/components/bikeguides/2.jpg"
          fit="fill"
        ></el-image>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "BikeGuides",
    data() {
      return {
      };
    }
  }
</script>

<style scoped>
  .bike-guides {
    width: auto;
    margin: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
</style>
