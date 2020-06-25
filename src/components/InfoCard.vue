<template>
  <div id="info-card">
    <el-card class="box-card" >
      <div slot="header" class="box-card-header">
        <el-image v-if="id==='1'"
          style="margin: 20px"
          src="static/img/components/userinfo/userimage.jpg"
          fit="fill"
        ></el-image>
        <el-image v-else
                  style="margin: 20px"
                  src="static/img/components/userinfo/admin.jpg"
                  fit="fill"
        ></el-image>
        <div id="real-name" style="font-size:24px;display: flex;margin-bottom: 10px">
          <!--
          <i class="el-icon-postcard"></i>
          -->
          <span style="color:#303133;">{{ loginInfo.realName }}</span>

          <span id="role-info">
            <el-tag
              v-for="item in loginInfo.roleNames"
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
      props: ["id"],
      created() {
        if (this.id === "2") {
          this.loginInfo = this.adminInfo
        }
      },
      data() {
        return {
          loginInfo:{
            "username": "Cai-Crayon",
            "realName": "Caixiaoxin",
            "roleNames": [
              "User",
              "Annual membership"
            ],
            "departmentChains": {
              "id": 10,
              "departmentId": 7,
              "name": "| Joined BikeSharing for 67 days",
              "type": 3,
              "status": 1,
              "departmentChildList": [
                {
                  "id": 7,
                  "departmentId": 1,
                  "name": "Bike Card Vip",
                  "type": 2,
                  "status": 1,
                  "departmentChildList": [
                    {
                      "id": 1,
                      "departmentId": 0,
                      "name": "Shenzhen China",
                      "type": 1,
                      "status": 1,
                      "departmentChildList": []
                    }
                  ]
                }
              ]
            }
          },
          adminInfo:{
            "username": "BikeSharing-Mark",
            "realName": "Mark",
            "roleNames": [
              "CEO",
              "Annual membership"
            ],
            "departmentChains": {
              "id": 10,
              "departmentId": 7,
              "name": "| Joined BikeSharing for 600 days",
              "type": 3,
              "status": 1,
              "departmentChildList": [
                {
                  "id": 7,
                  "departmentId": 1,
                  "name": "Founder",
                  "type": 2,
                  "status": 1,
                  "departmentChildList": [
                    {
                      "id": 1,
                      "departmentId": 0,
                      "name": "Shenzhen China",
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
</style>
