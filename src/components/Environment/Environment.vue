 <template>
  <div class="main-content" :scrollTop.prop="scrollTop">
    <!-- Environment -->
    <div class="content-info" id="content-info">
      <div class="item item1" id="code">
        <div class="item-title clear">
          <font class="iconfont icon-compiled1"></font>
          <span class="tittle fl">Code</span>
          <div class="fr">
            <button>添加</button>
          </div>
        </div>
        <div class="content clear">
          <div class="codeInfo">
            <div class="infoItem Management clear">
              <div class="info-title">
                <ul>
                  <li>Name</li>
                  <li>Creater</li>
                  <li>Enable</li>
                </ul>
              </div>
              <div class="p-team-info">
                <ul class="fl">
                  <li>GitLab</li>
                  <li>Administrator</li>
                  <li class="is_default">is_default</li>
                </ul>
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
            <button>添加</button>
          </div>
        </div>
        <div class="content clear">
          <div class="codeInfo">
            <div class="infoItem Management clear">
              <div class="info-title">
                <ul>
                  <li>Name</li>
                  <li>Creater</li>
                  <li>Enable</li>
                </ul>
              </div>
              <div class="p-team-info">
                <ul class="fl">
                  <li>GitLab</li>
                  <li>Administrator</li>
                  <li class="is_default">is_default</li>
                </ul>
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
            <button>添加</button>
          </div>
        </div>
        <div class="content clear">
          <div class="codeInfo">
            <div class="infoItem Management clear">
              <div class="info-title">
                <ul>
                  <li>Name</li>
                  <li>Creater</li>
                  <li>Enable</li>
                </ul>
              </div>
              <div class="p-team-info">
                <ul class="fl">
                  <li>GitLab</li>
                  <li>Administrator</li>
                  <li class="is_default">is_default</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="anchor">
      <el-row class="tac">
        <el-col>
          <el-menu default-active="2" class="el-menu-vertical-demo">
            <el-menu-item class="menu-title"  @click="jump(index)" :index="index.toString()" :key="index" v-for="(item,index) in titles">
              <a slot="title" >{{item}}</a>
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
        titles: ["Code", "Compile", "Compliance", "Test"],
        scrollTop: ''
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
    },
    mounted: function () {
        // this.$axios({
        //   method: 'POST',
        //   url: 'api/ciapp-server/dict/type_TOOLS_TYPE'
        // }).then(data => {
        //   console.log(data)
        // })
    },

    methods: {
      jump(index) {
        let jump = document.querySelectorAll('.item')
        // 获取需要滚动的距离
        let total = jump[index].offsetTop - 70;
        // document.getElementsByClassName('el-main main')[0].scrollTop = total
        let distance = document.getElementsByClassName('el-main main')[0].scrollTop
        let step = total / 50
        if(total>distance){
            smoothDown()
        }else{
            let newTotal = distance -total
            step = newTotal/50
            smoothUp()
        }
        function smoothDown () {
          if (distance < total) {
            distance += step
　　　　　　　document.getElementsByClassName('el-main main')[0].scrollTop = distance
            setTimeout(smoothDown, 10)
          } else {
            document.getElementsByClassName('el-main main')[0].scrollTop = total
          }
        }
        function smoothUp () {
          if (distance > total) {
            distance -= step
　　　　　　　document.getElementsByClassName('el-main main')[0].scrollTop = distance
            setTimeout(smoothUp, 10)
          } else {
            document.getElementsByClassName('el-main main')[0].scrollTop = total
          }
       } 
      },
    }
  }
</script>
<style scoped lang="scss">
  .main-content {
    margin-left: 20px;
    margin-right: 15px;
    height: 100%;
    padding-top: 20px;
    .content-info {
      width: 83%;
      height: 100%;
      min-width: 860px;
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
        padding-top: 28px;
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
        position: relative;
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
    left: 89%;
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