<template>
    <el-col  class="modules_style count_material text-left">
        <div  class="modules-title mb-4">素材资源统计</div>
        <div class="mb-3"><span class="text">{{all_count}}</span><span class="font-14">资源总数</span></div>
        <el-row class="mb-4" style="height:20px;border-radius:3px;overflow:hidden;">
            <div v-for="item in colorful_count" :style="'width:'+item.percent+';background:'+item.colorful">
            
            </div>
        </el-row>
        <el-row class="colorful_row" v-for="item in colorful_count" justify="space-between">
            <div class="d-flex">
                <span class="colorful_box" :style="'background:'+item.colorful"></span>
                <span>{{item.name}}</span>
            </div>
            <div class="item_num">{{item.num}}</div>
        </el-row>
    </el-col>
</template>

<script>
import { ref,reactive,computed } from 'vue';
export default {
    name: '',
    setup() {
        let all_count=ref(1000)
        let count = reactive([
            {
                name:'视频',
                num: 500,
                percent: '50%'
            },
            {
                name:'音频',
                num: 200,
                percent:'20%'
            },
            {
                name:'设计',
                num: 150,
                percent:'15%'
            },
            {
                name:'剧本',
                num: 100,
                percent:'10%'
            },
            {
                name:'其他',
                num: 50,
                percent:'5%'
            },
        ])
        let colorful =['#5867DD','#FD397A','#1DC9B7','#FFB822','#333']
        let colorful_count = computed({
            get: () => { 
                return count.map((value, index) => { 
                        value.colorful = colorful[index]
                    return value
                })
            }
        })
        return {
            all_count,
            colorful_count
        }
    }
}
</script>

<style scoped>
.colorful_row{
    margin-bottom:12px;
    padding:8px 0
}
.d-flex{
    display: -ms-flexbox!important;
    display: flex!important;
}
.text-left{
    text-align:left;
}
.modules-title {
    font-size: 18px;
    font-weight: bold;
    text-align: left;
}
.mb-4{
    margin-bottom: 20px;
}
.mb-3{
    margin-bottom:16px
}
.text{
    font-weight: 700;
    margin-right:12px;
    font-size:18px
}
.font-14{
    font-size:14px
}
.colorful_box{
    width: 20px;
    height:20px;
    margin-right:12px;
    border-radius: 3px;
}
.item_num{
    font-size: 14px;
    color: #999;
}
</style>