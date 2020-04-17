<template>
  <div id="message-area" style="min-height: 600px">
    <el-row v-for="(message,index) in messages" :key="index">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <h4>{{ message.title }}</h4>
          <div class="author-info">
            发布人：{{ message.realName }}
          </div>
          <div class="message-time">
            <time class="commit-time">发布时间：{{ message.commitDate }}</time>
            <time class="update-time">更新时间：{{ message.updateDate }}</time>
          </div>

        </div>

        <div class="message-content">
          {{ message.content }}
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<script>
    export default {
      name: "Message",
      data() {
        return {
          messages: [
            {
              "id": 1,
              "userId": 5,
              "commitDate": "2020-04-02T12:47:48.000+0000",
              "updateDate": "2020-04-02T12:47:48.000+0000",
              "status": 1,
              "title": "内测版发布公告",
              "content": "当前处于前端搭建阶段",
              "realName": "admin"
            },
            {
              "id": 2,
              "userId": 5,
              "commitDate": "2020-04-02T12:47:48.000+0000",
              "updateDate": "2020-04-02T12:47:48.000+0000",
              "status": 1,
              "title": "内测版发布公告",
              "content": "当前处于前端搭建阶段",
              "realName": "admin"
            },
            {
              "id": 3,
              "userId": 5,
              "commitDate": "2020-04-02T12:47:48.000+0000",
              "updateDate": "2020-04-02T12:47:48.000+0000",
              "status": 1,
              "title": "内测版发布公告",
              "content": "当前处于前端搭建阶段",
              "realName": "admin"
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
  .box-card {
    width: 900px;
  }
</style>
