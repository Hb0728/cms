<template>
  <el-row class="">
    <el-col :span="3" class="meau-place"> 111 </el-col>
    <el-col :span="21" class="index-view">
      <el-row class="content-header" justify="space-between" align="middle">
        <div class="page_name">主页</div>
        <div class="page_address">当前位置：主页</div>
      </el-row>
      <el-row>
        <el-col class="cartoon-percent modules_style" :span="8">
          <el-row justify="space-between">
            <div class="modules-title">动画入库占比</div>
            <div>
              <el-button
                :class="{ selected: isSelected }"
                @click="chooseState"
                round
                >入库</el-button
              >
              <el-button
                :class="{ selected: !isSelected }"
                @click="chooseNoState"
                round
                >未入库</el-button
              >
            </div>
          </el-row>
          <div id="circle_picture"></div>
        </el-col>
        <el-col class="download_record modules_style" :span="8">
          <div class="modules-title">下载记录</div>
        </el-col>
        <el-col class="item-watch modules_style" :span="7">
          <div class="modules-title">项目审核</div>
        </el-col>
        <el-col class="item_state modules_style" :span="16">
          <el-row justify="space-between">
            <div class="modules-title">素材入库趋势</div>
            <div>
              <el-button
                :class="{ selected: day === 7 }"
                @click="chooseWeek"
                round
                >近7天</el-button
              >
              <el-button
                :class="{ selected: day === 30 }"
                @click="chooseMouth"
                round
                >近30天</el-button
              >
            </div>
          </el-row>
          <div id="echarts_picture"></div>
        </el-col>
        <el-col class="modules_style" :span="7">
          <div class="modules-title">项目审核</div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import { ref } from "vue";
import * as echarts from "echarts";
export default {
  name: "",
  components: {},
  mounted() {
    this.echarsinit();
    this.echarsiteminit();
  },
  setup() {
    // 判断入库还是未入库的变量
    let isSelected = ref(true);
    // 默认选择近7天
    let day = ref(7);
    // 点击入库按钮调用方法
    function chooseState() {
      isSelected.value = true;
    }
    // 点击未入库按钮调用方法
    function chooseNoState() {
      isSelected.value = false;
    }

    // 点击近7天调用方法
    function chooseWeek() {
      day.value = 7;
    }
    // 点击近8天调用方法
    function chooseMouth() {
      day.value = 30;
    }
    // init动画入库占比的echarts视图
    function echarsinit() {
      let myChart = echarts.init(document.getElementById("circle_picture"));
      myChart.setOption({
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "14",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "咕力咕力系列" },
              { value: 735, name: "咖宝车神系列" },
              { value: 580, name: "亲宝儿歌系列" },
              { value: 484, name: "起司公主系列" },
            ],
          },
        ],
      });
    }
    // init动画
    function echarsiteminit() {
      let showChart = echarts.init(document.getElementById("echarts_picture"));
      showChart.setOption({
        color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
        title: {
          text: "Gradient Stacked Area Chart",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          data: ["Line 1", "Line 2", "Line 3", "Line 4", "Line 5"],
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "Line 1",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(128, 255, 165)",
                },
                {
                  offset: 1,
                  color: "rgb(1, 191, 236)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [140, 232, 101, 264, 90, 340, 250],
          }
        ],
      });
    }
    return {
      day,
      isSelected,
      chooseState,
      chooseNoState,
      chooseWeek,
      chooseMouth,
      echarsinit,
      echarsiteminit,
    };
  },
};
</script>

<style scoped>
.index-view {
  padding: 0 16px;
}
.content-header {
  padding: 24px 0;
}
.page_name {
  font-size: 24px;
  font-weight: bold;
}
.page_address {
  margin-right: 100px;
}
.modules-title {
  font-size: 18px;
  font-weight: bold;
  text-align: left;
}
.cartoon-percent {
  margin-right: 1%;
  margin-bottom: 16px;
}
.download_record {
  margin-right: 1%;
  margin-bottom: 16px;
}
.item-watch {
  margin-bottom: 16px;
}
.item_state {
  margin-right: 1%;
  max-width: 67.666667%;
  flex: 0 0 67.666667%;
}
.modules_style {
  padding: 16px;
  background-color: #fff;
  box-shadow: rgb(152 149 149) 0px 2px 6px 0px;
  border-radius: 8px;
}
.selected {
  background-color: #f56c6c;
  color: #fff;
}
.el-button:hover {
  background-color: #f56c6c;
  color: #fff;
  border-color: #f56c6c;
}
#circle_picture {
  min-height: 400px;
}
#echarts_picture{
  min-height:300px
}
</style>
