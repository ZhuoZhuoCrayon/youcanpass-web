<template>
  <div class="bike-mall">
    <el-row style="margin: 20px">
      <el-col :span="14">
        <el-image
          style="margin: 20px"
          src="static/img/components/introduction/5.jpg"
          fit="fill"
        ></el-image>
      </el-col>
      <el-col :span="10">
        <el-form ref="form" :model="form" label-width="80px" style="margin-top: 20px">
          <el-form-item label="Title">
            <el-input v-model="form.name"  placeholder="请输入内容" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="Platform">
            <el-select v-model="form.platform" placeholder="Please select platform">
              <el-option label="IOS" value="ios"></el-option>
              <el-option label="Android" value="Android"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Cities">
            <el-radio-group v-model="form.city">
              <el-radio label="Beijing" name="Beijing"></el-radio>
              <el-radio label="Shenzhen" name="Shenzhen"></el-radio>
              <el-radio label="Shanghai" name="Shanghai"></el-radio>
              <el-radio label="Guangzhou" name="Guangzhou"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="Time">
            <el-radio-group v-model="form.time" max="1">
              <el-radio label="Week" name="Week"></el-radio>
              <el-radio label="Month" name="Month"></el-radio>
              <el-radio label="6 Month" name="6 Month"></el-radio>
              <el-radio label="Year" name="Year"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="Total">
            <el-input v-model="'$' + form.total" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Pay</el-button>
            <el-button>Clear</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "ReviewForm",
    data() {
      return {
        form: {
          name: 'Buy Card',
          platform: 'ios',
          city: 'Beijing',
          time: 'Week',
          total: 0,
        },
        cityPrice: {
          "Beijing": 100,
          "Shenzhen": 80,
          "Shanghai": 70,
          "Guangzhou": 60,
        },
        timePrice: {
          "Week": 11.1,
          "Month": 20,
          "6 Month": 60.6,
          "Year": 108,
        },
        platformPrice: {
          "ios": 66.6,
          "Android": 56.6,
        }
      }
    },
    methods: {
      onSubmit() {
        let tot = 0;
        tot += this.cityPrice[this.form.city];
        tot += this.timePrice[this.form.time];
        tot += this.platformPrice[this.form.platform];
        this.form.total = tot;
      }
    }
  }
</script>

<style scoped>
  .bike-mall {
    width: auto;
    margin: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
</style>
