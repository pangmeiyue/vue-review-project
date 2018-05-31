<template>
  <div class="main-content" :scrollTop.prop="scrollTop">
    <!-- Environment -->
    <div class="content-info" id="content-info">
      <div class="item item1" id="code">
        <div class="item-title clear">
          <font class="iconfont icon-compiled1"></font>
          <span class="tittle fl">Code</span>
          <div class="fr">
            <router-link to="/Code">添加</router-link>
          </div>
        </div>
        <div class="content clear">
          <div class="codeInfo" :key="key" v-for="(data,key) in codeDatas">
            <div class="infoItem Management clear">
              <div class="info-title">
                <ul :key="key" v-for="(item,key) in codetitle">
                  <li>{{item}}</li>
                </ul>
                <div class="p-team-info clear">
                  <ul>
                    <li>{{data.code_tool_name}}</li>
                    <li>{{data.create_emp}}</li>
                    <li class="is_default">{{data.status}}</li>
                  </ul>
                  <div class="infoItemModify fr">
                    <div class="fr deleteBox">
                      <i class="el-icon-delete"></i>
                    </div>
                    <div class="fr editBox">
                      <i class="el-icon-edit"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="item item2" id="compile">
        <div class="item-title clear">
          <i></i>
          <span class="tittle fl">Compile</span>
          <div class="fr">
            <router-link to="/Compile">添加</router-link>
          </div>
        </div>
        <div class="content clear">
          <div class="codeInfo" :key="key" v-for="(data,key) in compliedDatas">
            <div class="infoItem Management clear">
              <div class="info-title">
                <ul :key="key" v-for="(item,key) in codetitle">
                  <li>{{item}}</li>
                </ul>
                <div class="p-team-info">
                  <ul class="fl">
                    <li>{{data.build_name}}</li>
                    <li>{{data.create_emp}}</li>
                    <li class="is_default">{{data.status}}</li>
                  </ul>
                   <div class="infoItemModify fr">
                    <div class="fr deleteBox">
                      <i class="el-icon-delete"></i>
                    </div>
                    <div class="fr editBox">
                      <i class="el-icon-edit"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="item item3">
        <div class="item-title clear">
          <i></i>
          <span class="tittle fl">Compliance</span>
          <div class="fr">
            <router-link to="/Compliance">添加</router-link>
          </div>
        </div>
        <div class="content clear">
          <div class="codeInfo" :key="key" v-for="(data,key) in complianceDatas">
            <div class="infoItem Management clear">
              <div class="info-title">
                <ul :key="key" v-for="(item,key) in codetitle">
                  <li>{{item}}</li>
                </ul>
                <div class="p-team-info">
                  <ul class="fl">
                    <li>{{data.build_name}}</li>
                    <li>{{data.create_emp}}</li>
                    <li class="is_default">{{data.status}}</li>
                  </ul>
                   <div class="infoItemModify fr">
                    <div class="fr deleteBox">
                      <i class="el-icon-delete"></i>
                    </div>
                    <div class="fr editBox">
                      <i class="el-icon-edit"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="item item4">
        <div class="item-title clear">
          <i></i>
          <span class="tittle fl">Test</span>
          <div class="fr">
            <router-link to="/Test">添加</router-link>
          </div>
        </div>
        <div class="content clear">
          <div class="codeInfo" :key="key" v-for="(data,key) in testDatas">
            <div class="infoItem Management clear">
              <div class="info-title">
                <ul :key="key" v-for="(item,key) in codetitle">
                  <li>{{item}}</li>
                </ul>
                <div class="p-team-info">
                  <ul class="fl">
                    <li>{{data.unittest_name}}</li>
                    <li>{{data.create_emp}}</li>
                    <li class="is_default">{{data.status}}</li>
                  </ul>
                   <div class="infoItemModify fr">
                    <div class="fr deleteBox">
                      <i class="el-icon-delete"></i>
                    </div>
                    <div class="fr editBox">
                      <i class="el-icon-edit"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <div class="anchor">
      <el-row class="tac">
        <el-col>
      <el-menu v-if="sidenames.length" :key="index" v-for="(item,index) in sidenames" :default-active="active" class="side-menu">
        <el-menu-item class="menu-title" @click="jump(index,item.type_id)" :index="(item.type_id).toString()">
          <a slot="title">{{item.name}}</a>
        </el-menu-item>
      </el-menu>
       </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Environment',
    data() {
      return {
        scrollTop: '',
        active: '1',
        sidenames: [], //右侧导航名字
        codetitle: ['Name', 'Creater', 'Enable'],
        codeDatas: [], //code数据
        compliedDatas: [],
        complianceDatas: [],
        testDatas: [],
        btnVisible: false
      }
    },
    created: function () {
      cicd.captionBar.caption = [{
          text: "Configure Manage",
          url: ""
        },
        {
          text: " System Configure",
          url: "/Environment"
        }
      ]
      this.$nextTick(function () {
        window.addEventListener('scroll', this.onScroll, true)
      })
      this.getSideNames() //右侧导航
      this.getCodeDatas()
      this.getCompliedDatas()
      this.getComplianceDatas()
      this.getTestDatas()
    },

    methods: {
      jump(index,id) {
        let jump = document.querySelectorAll('.item')
        // 获取需要滚动的距离
        let total = jump[index].offsetTop - 50;
        // document.getElementsByClassName('el-main main')[0].scrollTop = total
        let distance = document.getElementsByClassName('el-main main')[0].scrollTop
        let step = total / 10
        if (total > distance) {
          smoothDown()
        } else {
          let newTotal = distance - total
          step = newTotal / 50
          smoothUp()
        }

        function smoothDown() {
          if (distance < total) {
            distance += step
            document.getElementsByClassName('el-main main')[0].scrollTop = distance
            setTimeout(smoothDown, 10)
          } else {
            document.getElementsByClassName('el-main main')[0].scrollTop = total
          }
        }

        function smoothUp() {
          if (distance > total) {
            distance -= step
            document.getElementsByClassName('el-main main')[0].scrollTop = distance
            setTimeout(smoothUp, 10)
          } else {
            document.getElementsByClassName('el-main main')[0].scrollTop = total
          }
        }
      },
      onScroll() {
        let scrolled = document.getElementsByClassName('el-main main')[0].scrollTop
        if (scrolled >= 1928) {
          this.active = '5'
        } else if (scrolled >= 1268) {
          this.active = '3'
        } else if (scrolled < 1368 && scrolled >= 605) {
          this.active = '2'
        } else {
          this.active = '1'
        }
      },
      getSideNames() {
        this.$axios({
          method: 'POST',
          url: 'api/ciapp-server/dict/type_TOOLS_TYPE'
        }).then(data => {
          this.sidenames = data.data
        })
      },
      getCodeDatas() {
        this.$axios({
          method: 'POST',
          url: 'api/ciapp-server/systool/code_page_show',
          data: {
            sEcho: '1',
            iDisplayLength: '10'
          }
        }).then(data => {
          if (data.status === 200) {
            this.codeDatas = data.data.aaData
          }
        })
      },
      getCompliedDatas() {
        this.$axios({
          method: 'POST',
          url: 'api/ciapp-server/systool/build_page_show',
          data: {
            sEcho: '1',
            iDisplayLength: '10'
          }
        }).then(data => {
          if (data.status === 200) {
            this.compliedDatas = data.data.aaData

          }
        })
      },
      getComplianceDatas() {
        this.$axios({
          method: 'POST',
          url: 'api/ciapp-server/systool/compliance_page_show',
          data: {
            sEcho: '1',
            iDisplayLength: '10'
          }
        }).then(data => {
          if (data.status === 200) {
            this.complianceDatas = data.data.aaData
          }
        })
      },
      getTestDatas() {
        this.$axios({
          method: 'POST',
          url: 'api/ciapp-server/systool/unittest_page_show',
          data: {
            sEcho: '1',
            iDisplayLength: '10'
          }
        }).then(data => {
          if (data.status === 200) {
            this.testDatas = data.data.aaData
          }
        })
      }
    }
  }

</script>
<style scoped lang="scss">
  .main-content {
    padding-left: 30px;
    box-sizing: border-box;
    margin-right: 15px;
    height: 100%;
    width: 100%;
    padding-top: 20px;
    .content-info {
      width: 83%;
      height: 100%;
      min-width: 860px;
      .infoItemModify {
        width: 15%;
        height: 100%;
        display: none;
        i{
          color: #000;
          font-size: 18px;
        }
        .editBox {
          margin-right: 20px;
        }
      }
      .infoItem:hover .infoItemModify{
        display: block;
      }
      .item {
        padding-bottom: 110px;
        border: 1px solid #ececec;
        background-color: #fff;
        min-height: 500px;
        -webkit-border-radius: 6px;
        -moz-border-radius: 6px;
        border-radius: 6px;
        font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        margin-bottom: 40px;
        position: relative;
      }
      .content {
        width: 100%;
        padding-bottom: 2px;
        background-color: #fff;
        .infoItem>.p-team-info {
          width: 100%;
          height: 62px;
          line-height: 50px;
          cursor: pointer;
          position: relative;
        }
        .p-team-info li.is_default {
          color: #2b8815;
        }
        .p-team-info li {
          font-size: 14px;
          font-weight: 500;
          color: #3d3935;
          font-size: 16px;
        }
      }
      .codeInfo {
        position: relative;
        border-bottom: 1px solid #ececec;
      }
      .infoItem {
        width: 100%;
        padding: 28px;
        box-sizing: border-box;
      }
      .info-title {
        margin-bottom: 20px;
        color: #8C8C8C;
        font-size: 14px;
      }
      ul {
        width: 85%;
        margin: 0;
        height: 100%;
        margin-top: 10px;
      }
      li {
        float: left;
        width: 33.33%;
        height: 100%;
        text-align: center;
        position: relative;
      }
    }
    .item-title {
      height: 68px;
      line-height: 68px;
      padding: 0 28px 0 20px;
      border-bottom: 1px solid #ececec;
      position: relative;
      background: #EdEbE6;
      color: #555;
      font-family: Microsoft YaHei, Regular;
      position: relative;
      margin-bottom: 5px;
      span {
        margin-left: 46px;
        font-size: 22px;
      }
    }
  }

  .anchor {
    padding: 14px 0;
    box-shadow: 0 3px 10px #ccc;
    background-color: #fff;
    position: fixed;
    margin-top: 20px;
    top: 130px;
    z-index: 1000; // left: calc(80% + 144px);
    left: 88%;
    min-width: 136px;
    .side-menu .menu-title {
      text-align: center;
      font-size: 14px; // padding: 12px 30px;
      cursor: pointer;
      /* min-width: 116px; */
      // position: relative;
    }
    .el-menu-item.is-active {
      background-color: #f7f7f7;
    }
    .el-menu-item.is-active {
      color: #2b8815;
      border-right: 2px solid #2b8815;
    }
    .el-menu-item:focus,
    .el-menu-item:hover {
      background-color: #f7f7f7;
    }
  }

</style>
