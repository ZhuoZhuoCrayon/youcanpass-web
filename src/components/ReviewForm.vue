<template>
  <div class="bike-review-form">
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
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="Platform">
            <el-select v-model="form.region" placeholder="Please select platform">
              <el-option label="IOS" value="ios"></el-option>
              <el-option label="Android" value="Android"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Time">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="Select date" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2" style="text-align: center">-</el-col>
            <el-col :span="11">
              <el-time-picker placeholder="Select time" v-model="form.date2" style="width: 100%;"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="Anonymous">
            <el-switch v-model="form.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="Cities">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="Beijing" name="type"></el-checkbox>
              <el-checkbox label="Shenzhen" name="type"></el-checkbox>
              <el-checkbox label="Shanghai" name="type"></el-checkbox>
              <el-checkbox label="Guangzhou" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="Product">
            <el-radio-group v-model="form.resource">
              <el-radio label="Bike"></el-radio>
              <el-radio label="Month Card"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="Text">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Submit</el-button>
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
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style scoped>
  .bike-review-form {
    width: auto;
    margin: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
</style>
