<template>
    <div class="container" style="height:100%;">

      <!--页面上半部-->
      <div class="container-top">

        <!--分界条-->
        <div class="footer-span"></div>

        <!--上半部分左侧区-->
        <div class="container-top-left">
          
          <!--左部-->
          <div class="left">
            <ol>
              <li>
                <dl class="display-block badge ml-10">
                  <dt>1</dt>
                  <dd>tasks</dd>
                </dl>
              </li>
              <li class="tmd">
                <img class="w50ps" src="../../../assets/icon_project-management.png" alt="" />
              </li>
              <li class="tmd color-black fs-17">
                {{prj.prj_name}}
              </li>
              <li class="color-88 fs-13 tmd mt-30">
                <i class="iconfont">&#xe61c;</i>&nbsp;&nbsp;
                <span>Create time</span>&nbsp;&nbsp;
                <span class="color-black">
                  {{prj.create_time}}
                </span>
              </li>

              <li class="color-88 fs-13 tmd mt-15">
                <i class="iconfont">&#xe658;</i>&nbsp;&nbsp;
                <span>Founder</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="color-black pos-rel left-15">
                  {{prj.create_user}}
                </span>
              </li>
            </ol>
          </div>

          <!--右部-->
          <div id="lineArea" class="right">
            
          </div>
        </div>

        <!--上半部分右侧区-->
        <dl class="container-top-right">

          <!--区域标题-->
          <dt class="mt-15 ml-15 mr-15">
            <span class="fs-16 pos-rel top-5">Summary</span>&nbsp;&nbsp;
            <i class="iconfont color-99">&#xe663;</i>
            <span class="fs-10 pull-right color-99">{{prj.issuesCountView.issuesLastTime}}</span>
          </dt>

          <!--区域内容-->
          <dd class="ml-15 mr-15">
            <ol class="ml-10 mr-10">

              <li class="mt-10">
                <h1 class="display-block fs-14 color-55">Compliance</h1>
                <div class="justfiy">
                  <dl class="pull-left ml-15 mr-15 tmd">
                    <dt class="total-number h45">{{prj.issuesCountView.comp_sum_num}}</dt>
                    <dd class="fs-10 color-99">Total</dd>
                  </dl>
                  <dl class="pull-left tmd">
                    <dt class="new-number h45">{{prj.issuesCountView.comp_new_num}}</dt>
                    <dd class="fs-10 color-99">Added</dd>
                  </dl>
                  <dl class="pull-left  ml-15 mr-15 tmd">
                    <dt class="no-number h45">{{prj.issuesCountView.comp_unsolved_num}}</dt>
                    <dd class="fs-10 color-99">Unsolved</dd>
                  </dl>
                </div>
              </li>

              <li class="mt-10">
                <h1 class="display-block fs-14 color-55">UTest</h1>
                <div class="justfiy">
                  <div class="tmd fs-12 UTestE ml-20 color-99">
                    <dl>
                      <dt class="color-blue-2 fs-14">
                        {{parseInt(prj.issuesCountView.unit_success*100)}}%
                      </dt>
                      <dd>
                        Success
                      </dd>
                    </dl>
                  </div>
                  <div class="tmd fs-12 UTestE mr-20 color-99">
                    <dl>
                      <dt class="color-blue-2 fs-14">
                        {{parseInt(prj.issuesCountView.unit_coverage)*100}}%
                      </dt>
                      <dd>
                        Coverage
                      </dd>
                    </dl>
                  </div>
                </div>
              </li>

              <li class="mt-10">
                <h1 class="display-block fs-14 color-55">Security</h1>
                <div class="justfiy">
                  <dl class="pull-left ml-15 mr-15 tmd">
                    <dt class="total-number h45">{{prj.issuesCountView.security_sum_num}}</dt>
                    <dd class="fs-10 color-99">Total</dd>
                  </dl>
                  <dl class="pull-left tmd">
                    <dt class="new-number h45">{{prj.issuesCountView.security_new_num}}</dt>
                    <dd class="fs-10 color-99">Added</dd>
                  </dl>
                  <dl class="pull-left  ml-15 mr-15 tmd">
                    <dt class="no-number h45">{{prj.issuesCountView.security_unsolved_num}}</dt>
                    <dd class="fs-10 color-99">Coverage</dd>
                  </dl>
                </div>
              </li>
            </ol>
          </dd>
        </dl>
      </div>

      <!--页面下半部分-->
      <div class="container-bottom" :style="{height:pageBottomHeight+'px'}">
        <div class="ml-10 mr-10">

          <!--新任务创建按钮-->
          <div class="taskBut">
            <div class="pos-rel top-85">
              <img src="../../../assets/add.png" alt="" /><br/>
              Create A New Task
            </div>
          </div>

          <!--platform card-->
          <dl class="platformCard" v-for="task in tasks" :key="task.task_id" @mouseover="mouseInCard=true" :class="{boxShod:mouseInCard}" @mouseout="mouseInCard=false">
              <dt class="h45 ml-15 mr-15 fs-16">
                <span >{{task.task_name}}</span>
                <span class="fs-14 pull-right">
                  <font class="color-green-2">In Operation</font>
                </span>
              </dt>  
              <dd class="ml-15 mr-15">
                <ol>
                  <li class="justfiy">
                    <span class="fs-14">
                      <i class="iconfont fs-14 color-99">&#xe617;</i>
                      {{task.create_time}}
                    </span>
                    <span>
                      <i class="iconfont fs-14 color-99">&#xe665;</i>
                      Executions {{task.exec_num}}
                    </span>
                  </li>

                  <li class="color-55">
                    <table class="pull-left ml-10 w210">
                      <tr>
                        <td class="h40">
                          Unsolved <font class="color-red">( {{parseInt(task.security_unsolved) + parseInt(task.comp_unsolved)}} )</font>
                        </td>
                        <td>
                          Security <font class="color-blue-1">( {{task.security_issues_sum}} )</font>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Compliance <font class="color-blue-1">( {{task.comp_issues_sum}})</font>
                        </td>
                        <td>
                          Unit Test <font class="color-blue-1">( {{task.unit_success}} )</font>
                        </td>
                      </tr>
                    </table>
                    <table class="pull-right mr-10 tmd mt-15 w65">
                      <tr>
                        <td class="fs-25 color-blue-1 bb-db">
                          <font v-if="task.exec_num-task.failure_num != task.failure_num">{{parseInt((task.exec_num-task.failure_num)/task.exec_num*100)}}%</font>
                          <font v-if="task.exec_num-task.failure_num == task.failure_num">0%</font>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {{task.current_status | taskState}}
                        </td>
                      </tr>
                    </table>
                  </li>

                  <li class="justfiy pos-rel top-20 w100ps">
                    <dl class="z-top">
                      <dt>
                        <img src="../../../assets/right.png" alt="" class="w22 cursor-hand" />
                      </dt>
                      <dd class="fs-12">
                        Start
                      </dd>
                    </dl>
                    <dl class="tmd z-top" v-for="nodeViewVo in task.noteViewVos" :key="nodeViewVo.node_id">
                      <dt>
                        <img src="../../../assets/over.png" alt="" class="w22 cursor-hand" v-if="nodeViewVo.node_status == '0'" />
                        <img src="../../../assets/load.gif" alt="" class="w22 cursor-hand" v-if="nodeViewVo.node_status == '1'" />
                        <img src="../../../assets/right.png" alt="" class="w22 cursor-hand" v-if="nodeViewVo.node_status == '2'" />
                        <img src="../../../assets/error.png" alt="" class="w22 cursor-hand" @click.stop="showLogPop(task.task_id)" v-if="nodeViewVo.node_status == '3'" />
                      </dt>
                      <dd class="fs-12">
                        {{nodeViewVo.node_name}}
                      </dd>
                    </dl>
                    <dl class="tmd z-top">
                      <dt>
                        <img src="../../../assets/over.png"  alt="" class="w22 cursor-hand" v-if="task.noteViewVos[task.noteViewVos.length - 1].node_status != '2'" />
                        <img src="../../../assets/right.png"  alt="" class="w22 cursor-hand" v-if="task.noteViewVos[task.noteViewVos.length - 1].node_status == '2'" />
                      </dt>
                      <dd class="fs-12">
                        End
                      </dd>
                    </dl>
                    <hr class="hr" />
                  </li>
                </ol>
              </dd>
              <dt class="platformCard-foot">
                <div class="pull-left ml-15 color-88">
                  <i class="iconfont icon-user">&#xe66a;</i>
                  <p id="td0_task_create_emp"></p>
                </div>
                <div class="pull-right mr-15 color-88">
                  <i class="iconfont" title="Delete">&#xe671;</i>
                  <i class="iconfont ml-15" title="Edit">&#xe672;</i>
                  <i class="iconfont ml-15" title="Task details">&#xe652;</i>
                </div>
              </dt>
          </dl>

        </div>
      </div>
    </div>
</template>

<script>
  import Highcharts from '../../../../static/libs/highcharts.js'

  export default {
    name: 'ECSite',

    data() {
      return {
        prj:{issuesCountView:{}},
        tasks:[],
        mouseInCard:false
      }
    },

    created: function () {
      var self = this;
      this.$axios.post('/api/ciapp-server/taskview/prjview_'+this.$route.query.name).then(function (res) {
          self.prj = res.data;
      })

      this.$axios.post('/api/ciapp-server/taskview/taskallview_'+this.$route.query.name).then(function (res) {
          self.tasks = res.data;
      })

      //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
      window.onbeforeunload = function () {
        window.websocket.close();
      }
    },

    mounted: function () {
      let self = this;
      this.$axios.post('/api/ciapp-server/taskview/prjview_' + this.$route.query.name).then(function (res) {
          self.drawLine(res.data.codeSubmitVos);
      })
    },

    methods: {

      //绘制折线图
      drawLine(codeSubmitVos) {
        var categories = [];
        var data = [];
        for (var i = 0; i < codeSubmitVos.length; i++) {
            categories.push(codeSubmitVos[i].c_time);
            data.push(parseInt(codeSubmitVos[i].c_num));
        }
        //假数据开始
        //data=[4,10,40,10,1,60,18.3,100.1];
        //假数据结束

        Highcharts.setOptions({
            colors: ['#2196f3']
        });
        var chart = new Highcharts.Chart({
            chart: {
                renderTo: 'lineArea',
                borderWidth: 0,
                backgroundColor: 'rgba(0,0,0,0)' //设置背景色为透明
            },
            legend: {
                enabled: false  //折线名称
            },
            credits: {
                enabled: false
            },
            title: {
                align: "left",
                text: 'Submitted for the last seven days'
            },
            tooltip: {            //设置鼠标经过点提示框内容
                shared: true,
                useHTML: true,
                headerFormat: "<small style='font-size:12px;color:#333333'>{point.key}</small><table>",
                pointFormat: '<tr>' +
                '<td style="text-align: right;color:#333333"><b>{point.y}</b></td></tr>',
                footerFormat: '</table>',
                valueDecimals: 0
            },
            xAxis: {
                title: "",  //横线数据
                categories: categories
            },
            yAxis: {
                title: "",
                gridLineColor: '#d4dde4',
                gridLineDashStyle: 'Solid',
                minPadding: 0,
                allowDecimals: false
            },
            plotOptions: {
                series: {
                    marker: {
                        fillColor: '#FFFFFF',  //设置圆点的颜色
                        lineWidth: 2,
                        lineColor: null // inherit from series
                    }
                }
            },
            series: [{ //竖线数据
                data: data
            }]
        });
      },

      showLogPop(nodeId) {
        cicd.logPop.logPopContent = "";
        cicd.logPop.isShowLogPop = true;
        this.$axios.post('/api/ciapp-server/analyzeA/builddetail_'+nodeId).then(function (res) {

          cicd.logPop.logPopContent = res.data;
        })
      },

      webSocketStart() {
        //判断当前浏览器是否支持WebSocket
        if ('WebSocket' in window) {
            //本地
            window.websocket = new WebSocket(("ws://") + "192.168.1.220:18000" + "/websocket/" + this.$route.query.name + "/direct");
        }

        //连接发生错误的回调方法
        window.websocket.onerror = function () {

        };

        //连接成功建立的回调方法
        window.websocket.onopen = function (event) {
          console.log("success")
        }

        //接收到消息的回调方法
        window.websocket.onmessage = function (event) {
            console.log(event,"pprt")
        }

        //连接关闭的回调方法
        window.websocket.onclose = function () {

        }
      },

      webSocketStop(){
        window.websocket.close();
      }
    },

    computed: {

      // 计算属性的 getter
      pageBottomHeight() {

        let height = parseInt((this.tasks.length+1) / 3) * (267 + 20)
        if(parseInt(this.tasks.length+1 % 3) != 0) {
          return height + 267;
        }

        return height;
      }
    },

    filters: {
      taskState: function (value) {
        if (value == '2') {
          return 'Success';
        } 
        if (value == '3') {
          return 'Fail';
        }
        if (value == '1' || value == '4') {
          return 'Start up';
        }
        if (value == '0') {
          return 'Not starting';
        }

        return "";
      }
    }
  }

</script>

<style lang="scss" scoped>

  .fs-25 {
    font-size:18px;
  }

  /*--------------------------------定义风格样式开始-----------------------------*/
  .w22 {
    width:22px;
  }

  .w65 {
    width:65px;
  }

  .w210 {
    width:210px;
  }
  /*--------------------------------定义风格样式结束-----------------------------*/
  .container-top .container-top-left,
  .container-top .container-top-left .left,
  .container-top .container-top-left .right{
    float:left;
  }

  .container-top-right {
    position:absolute;
    left:820px;
  }

  
  /*--------------------------------定义页面上半部分样式开始-----------------------------*/
  .container-top {
    width:1081px;
    height:428px;
    position: relative;
  }

  .container-top .footer-span {
      position:absolute;
      z-index:999;
      left:10px;
      right:10px;
      height:11px;
      top:424px;
      background-image:url("../../../assets/icon_bg-line.png");
  }

  /*--左侧样式--*/
  .container-top-left {
    position:relative;
    padding-top:15px;
    padding-bottom:15px;
    height:398px;
    background-color:#fff;
    border-radius:6px;
    width:821px;
  }

  .container-top-left .left {
    position:relative;
    width:249px;
    height:398px;
    border:1px solid #dbdde5;
  }

  .container-top-left .left .badge {
    position:relative;
    top:-5px;
    width:40px;
    height:52px;
    background-image:url("../../../assets/icon_tips.png");
    background-size:40px 52px;
    background-repeat: no-repeat;
    color:#fff;
    text-align:center;
    font-size:10px;
    line-height:13px;
  }

  /*--微章样式--*/
  .container-top-left .left .badge dt {
    padding-top:8px;
  }

  .container-top-left .left .badge dd {
    margin-left:-2px;
  }

  /*--右侧样式--*/
  .container-top-left .right {
    width:569px;
    height:398px;
    border-top:1px solid #dbdde5;
    border-bottom:1px solid #dbdde5;
    border-right:1px solid #dbdde5;
    background: -webkit-linear-gradient(#e8f2fa, white,#e8f2fa);
  }

  .container-top-right {
    width:253px;
    height:428px;
    margin-left:5px;
    border:1px solid #dbdde5;
    border-radius:6px;
    background-color:#fff;
  }

  .container-top-right dt {
    border-bottom:1px solid #dbdbdb;
    height:35px;
  }

  .container-top-right dd ol li dl dt {
    height:auto;
  }
  /*--------------------------------定义页面上半部分样式结束-----------------------------*/

  /*--------------------------------定义页面下半部分样式开始-----------------------------*/
  .container-bottom {
    padding-top:20px;
    padding-bottom:20px;
    border-radius:6px;
    background-color:#fff;
    min-height:300px;
  }

  .taskBut {
    float:left;
    width:342px;
    height:264px;
    border: 2px dashed #acd9fd;
    border-radius: 8px;
    text-align:center;
    margin-right:5px;
  }

  .platformCard {
    position: relative;
    float:left;
    width:340px;
    height:267px;
    margin-bottom:20px;
    margin-left:5px;
    margin-right:5px;
    border-radius: 5px;
    border:1px solid #dbdbdb;
  }

  .platformCard-foot {
    position:absolute;
    width: 100%;
    background: #ececec;
    height: 38px;
    line-height:38px;
    bottom: 0px;
  }

  .hr {
    border:0px;
    height:0px;
    border-bottom: 2px solid #4a9900;
    position:absolute;
    left:0px;
    right:0px;
    top:10px;
    z-index:0;
  }

  .total-number {
    color: #6ed4e8;
    font-family: MicrosoftYaHei Regular;
    font-size: 34px;
    margin: 0 auto;
    text-align: center;
  }

  .new-number {
    color: #feb74b;
    font-family: MicrosoftYaHei Regular;
    font-size: 34px;
    text-align: center;
  }

  .no-number {
    color: #20cb48;
    font-family: MicrosoftYaHei Regular;
    font-size: 34px;
    text-align: center;
  }

  .UTestE{
    width:70px;
    height:70px;
    border:1px solid #6ed4e8;
    border-radius:80px;
  }

  .UTestE dl {
    width:55px;
    margin-left:7px;
    margin-top:10px;
  }

  .boxShod {
    -moz-box-shadow:2px 2px 19px #679BF5; 
    -webkit-box-shadow:2px 2px 19px #679BF5; 
    box-shadow:2px 2px 19px #679BF5;
  }
  /*--------------------------------定义页面下半部分样式结束-----------------------------*/
  
</style>
