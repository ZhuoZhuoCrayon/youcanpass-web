<template>
  <div id="message-area" style="min-height: 600px">
    <el-row v-for="(message,index) in messages" :key="index">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <div>
            <h4>{{ message.title }}</h4>
            <el-button v-if="id==='2'" type="text" style="display: inline;float: right">Edit</el-button>
          </div>

          <div class="author-info">
            publisher: {{ message.realName }}
          </div>
          <div class="message-time">
            <time class="commit-time">release time: {{ message.commitDate }}</time>
            <time class="update-time">Update time: {{ message.updateDate }}</time>
          </div>

        </div>
        <div class="message-content">
          <el-image
            v-if="index===1"
            style="margin: 20px"
            src="static/img/components/userinfo/bikecard.jpg"
            fit="fill"
          ></el-image>
          {{ message.content }}
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<script>
    export default {
      name: "Message",
      props: ["id"],
      data() {
        return {
          messages: [
            {
              "id": 1,
              "userId": 5,
              "commitDate": "2020-06-02T12:47:48.000+0000",
              "updateDate": "2020-06-04T12:47:48.000+0000",
              "status": 1,
              "title": "Your first day at BikeShare",
              "content": "Hello World",
              "realName": "BikeShare"
            },
            {
              "id": 2,
              "userId": 5,
              "commitDate": "2020-06-20T12:47:48.000+0000",
              "updateDate": "2020-06-21T12:47:48.000+0000",
              "status": 1,
              "title": "Welcome to buy cycling card",
              "content": "",
              "realName": "admin"
            },
            {
              "id": 3,
              "userId": 5,
              "commitDate": "2020-06-23T12:47:48.000+0000",
              "updateDate": "2020-06-23T12:47:48.000+0000",
              "status": 1,
              "title": "For all",
              "content": "Provide purchase of riding card, you can travel as you like",
              "realName": "mark"
            },
          ]
        }
      }
    }
</script>

<style scoped lang="scss">
  .el-row {
    margin: 35px 40px;
  }
  .text {
    font-size: 14px;
  }
  .el-card__header{
    padding-bottom: 5px;
  }
  .clearfix{
    h4{
      margin: 0 0 10px 0;
      font-size: 18px;
    }
    .author-info{
      font-size: 13px;
      color: #606266;
      margin-bottom: 5px;
    }
    .message-time{
      .update-time{
        margin-left: 50px;
      }
      font-size: 12px;
      color: #909399;
    }
  }
</style>
