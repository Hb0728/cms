<template>
    <el-col class="item_state modules_style">
        <el-row justify="space-between">
            <div class="modules-title">素材入库趋势</div>
            <div>
                <el-button :class="{ selected: day === 7 }" @click="chooseWeek" round>近7天</el-button>
                <el-button :class="{ selected: day === 30 }" @click="chooseMouth" round>近30天</el-button>
            </div>
        </el-row>
        <div id="echarts_picture"></div>
    </el-col>
</template>

<script>
import { ref } from 'vue';
import * as echarts from "echarts";
export default {
    name: '',
    mounted(){
        this.echarsiteminit();
    },
    setup() {
        // 默认选择近7天
        let day = ref(7);
        // 点击近7天调用方法
        function chooseWeek() {
            day.value = 7;
        }
        // 点击近8天调用方法
        function chooseMouth() {
            day.value = 30;
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
          },
        ],
      });
    }
        return {
            day,
            chooseWeek,
            chooseMouth,
            echarsiteminit,
        };
    },
    components: {}
};
</script>

<style scoped>
.modules-title {
    font-size: 18px;
    font-weight: bold;
    text-align: left;
}

.item_state {
    margin-right: 1.5%;
    max-width: 69.5%;
    flex: 0 0 71%;
    margin-bottom: 20px;
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
#echarts_picture {
  min-height: 300px;
}
</style>