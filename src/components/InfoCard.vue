<template>
  <div id="info-card">
    <el-card class="box-card" >
      <div slot="header" class="box-card-header">
        <div id="real-name" style="font-size:24px;display: flex;margin-bottom: 10px">
          <!--
          <i class="el-icon-postcard"></i>
          -->
          <span style="color:#303133;">{{ loginInfo.realName }}</span>

          <span id="role-info">
            <el-tag
              v-for="(item,index) in loginInfo.roleNames"
              size="medium"
              effect="plain"
              style="margin-left: 10px">{{ item }}</el-tag>
          </span>
        </div>
        <div id="user-info" style="font-size: 20px;">
          <div id="username">
            <!--
            <i class="el-icon-postcard"></i>
            -->
            <span style="color: #606266;font-weight: 200;">{{ loginInfo.username }}</span>
          </div>
        </div>
      </div>
      <div class="info-item">
        <div id="department">
          <i class="el-icon-location-outline"></i>
          <span>{{ getDepartment(loginInfo.departmentChains) }}</span>
        </div>
        <div id="major-class" style="margin-top: 10px">
          <i class="el-icon-connection"></i>
          <span>{{ getMajorClass(loginInfo.departmentChains) }}</span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
    export default {
      name: "InfoCard",
      data() {
        return {
          loginInfo:{
            "username": "2017151019",
            "realName": "蔡晓鑫",
            "roleNames": [
              "学生",
              "学生讲师"
            ],
            "departmentChains": {
              "id": 10,
              "departmentId": 7,
              "name": "2017-软件工程01",
              "type": 3,
              "status": 1,
              "departmentChildList": [
                {
                  "id": 7,
                  "departmentId": 1,
                  "name": "软件工程",
                  "type": 2,
                  "status": 1,
                  "departmentChildList": [
                    {
                      "id": 1,
                      "departmentId": 0,
                      "name": "计算机与软件学院",
                      "type": 1,
                      "status": 1,
                      "departmentChildList": []
                    }
                  ]
                }
              ]
            }
          }
        }

      },
      methods: {
        getDepartment(departmentChains) {
          let departments = [];
          while (departmentChains != null) {
            if (departmentChains.type <= 1) departments.push(departmentChains.name);
            departmentChains = departmentChains['departmentChildList'][0];
          }
          departments.reverse();
          return departments.reduce((x, y) => x + ' ' + y);
        },
        getMajorClass(departmentChains){
          let departments = [];
          while (departmentChains != null) {
            if (departmentChains.type > 1) departments.push(departmentChains.name);
            departmentChains = departmentChains['departmentChildList'][0];
          }
          departments.reverse();
          return departments.reduce((x, y) => x + ' ' + y);
        }
      }
    }
</script>

<style scoped lang="scss">
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  #info-card {
    margin: 35px 40px;
    width: 430px;
  }
</style>
