<template>
    <el-col class="cartoon-percent modules_style" :span="8">
        <el-row justify="space-between">
            <div class="modules-title">动画入库占比</div>
            <div>
                <el-button :class="{ selected: isSelected }" @click="chooseState" round>入库</el-button>
                <el-button :class="{ selected: !isSelected }" @click="chooseNoState" round>未入库</el-button>
            </div>
        </el-row>
        <div id="circle_picture"></div>
    </el-col>
</template>

<script>
import { ref } from "vue";
import * as echarts from "echarts";
export default {
    name: "",
    mounted() {
        this.echarsinit();
    },
    components: {},
    setup() {
        // 判断入库还是未入库的变量
        let isSelected = ref(true);

        // 点击入库按钮调用方法
        function chooseState() {
            isSelected.value = true;
        }
        // 点击未入库按钮调用方法
        function chooseNoState() {
            isSelected.value = false;
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
        return {
            isSelected,
            chooseState,
            chooseNoState,
            echarsinit,
        };

    },
};
</script>

<style scoped>
.modules-title {
  font-size: 18px;
  font-weight: bold;
  text-align: left;
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
</style>
