<template>
    <div class="upload_content_view">
        <el-row class="content-header" justify="space-between" align="middle">
            <div class="page_name">权限设置</div>
            <div class="page_address">当前位置：后台首页>权限管理>管理员\角色权限</div>
        </el-row>
        <div class="upload_content">
            <el-row class="tab huang" style="margin-bottom:24px">
                <div class="tabbar" @click="choose_first">
                    管理员列表
                </div>
                <div class="tabbar selected">
                    角色权限
                </div>
                <div class="tabbar" @click="choose_third">
                    外包相关
                </div>
                <el-button type="success" size="default" style="position:absolute;right:24px;top: 20px;">添加角色权限
                </el-button>
            </el-row>
            <div style="padding:0 24px">
                <el-table :header-cell-style="{ background: '#E6F1FF', color: '#666' }" :data="tableData" size="large"
                    style="width: 100%" @selection-change="handleSelectionChange">
                    <el-table-column align="center" property="id" label="ID" width="120" />
                    <el-table-column align="center" property="name" label="角色名称" width="120" />
                    <el-table-column align="center" property="permission" label="角色描述" />
                    <el-table-column align="center" property="lastlogintime" label="添加时间" />
                    <el-table-column align="center" property="status" label="状态">
                        <template #default="scope">
                            <el-switch v-if="scope.row.dosomething" v-model="scope.row.iswork" width="100" size="large"
                                inline-prompt active-text="开" inactive-text="关" />
                            <div v-if="!scope.row.dosomething">不可操作</div>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" property="" width="250" label="操作">
                        <el-button size="small" link>编辑</el-button>
                        <el-button size="small" link>删除</el-button>
                    </el-table-column>
                </el-table>
                <div class="demo-pagination-block" style="padding:16px">
                    <el-pagination v-model:currentPage="currentPage" v-model:page-size="pageSize" :background="true"
                        layout="prev, pager, next, jumper" :total="total" @current-change="handleCurrentChange" />
                </div>
                <el-row>
                    <div class="save_box">
                        <el-button size="default" type="primary">保存</el-button>
                        <el-button size="default">返回</el-button>
                    </div>
                </el-row>
            </div>
        </div>

    </div>
</template>

<script>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
export default {
    name: '',
    setup() {
        //  定义全局路由管理
        const router = useRouter();
        // 系列列表
        let succession = reactive([
            {
                value: '亲宝儿歌'
            },
            {
                value: '咕力咕力'
            },
            {
                value: '起司公主'
            },
            {
                value: '葫芦娃'
            },
        ])
        // 语言列表
        let language = reactive([
            {
                value: '中文'
            },
            {
                value: '英语'
            },
        ])
        let specialItem = reactive(['文库', '文档', '音乐'])
        // 翻页器start
        const currentPage = ref(5)
        const pageSize = ref(20)
        const small = ref(false)
        const disabled = ref(false)
        const total = ref(100)
        // 当前页码改变调用
        function handleCurrentChange() {
            console.log(222)
        }
        // 翻译器end
        let languageValue = ref('')
        // 系列选中
        let successionValue = ref('')
        //专题选中
        let specialItemValue = ref('')
        let voiceValue = ref('')
        let designValue = ref('')
        let textValue = ref('')
        const input3 = ref('')
        const checked1 = ref(true)
        const checked2 = ref(false)
        const checked3 = ref(false)
        const checked4 = ref(false)

        function choose_first() {
            router.push('/admin_list/')
        }
        function choose_third() {
            router.push('/about_outside/')
        }
        // ele表格
        const multipleSelection = ref([])
        const handleSelectionChange = val => {
            multipleSelection.value = val
        }

        const tableData = reactive([
            {
                date: '2016-05-03',
                name: 'huang',
                permission: '超级管理员',
                logintimes: 12,
                lastip: '231.156.173.102',
                id: '1',
                lastlogintime: '2022-04-15 13:50:21',
                phonenum: '17658853541',
                dosomething: true,
                vedio: false,
                design: false,
                text: false,
                iswork: false,
            },
            {
                date: '2016-05-02',
                name: 'Tom',
                permission: '超级管理员',
                logintimes: 12,
                lastip: '231.156.173.102',
                id: '1',
                lastlogintime: '2022-04-15 13:50:21',
                phonenum: '17658853541',
                dosomething: false,
                vedio: true,
                design: false,
                text: false,
                iswork: false,
            },
            {
                date: '2016-05-04',
                name: 'Tom',
                permission: '超级管理员',
                logintimes: 12,
                lastip: '231.156.173.102',
                id: '1',
                lastlogintime: '2022-04-15 13:50:21',
                phonenum: '17658853541',
                dosomething: true,
                vedio: false,
                design: true,
                text: false,
                iswork: true,
            },
            {
                date: '2016-05-01',
                name: 'Tom',
                permission: '超级管理员',
                logintimes: 12,
                lastip: '231.156.173.102',
                id: '1',
                lastlogintime: '2022-04-15 13:50:21',
                phonenum: '17658853541',
                dosomething: true,
                vedio: false,
                design: false,
                text: false,
                iswork: true,
            },
            {
                date: '2016-05-08',
                name: 'Tom',
                permission: '超级管理员',
                logintimes: 12,
                lastip: '231.156.173.102',
                id: '1',
                lastlogintime: '2022-04-15 13:50:21',
                phonenum: '17658853541',
                dosomething: true,
                vedio: false,
                design: false,
                text: false,
                iswork: true,
            },
            {
                date: '2016-05-06',
                name: 'Tom',
                permission: '超级管理员',
                logintimes: 12,
                lastip: '231.156.173.102',
                id: '1',
                lastlogintime: '2022-04-15 13:50:21',
                phonenum: '17658853541',
                dosomething: true,
                vedio: false,
                design: false,
                text: false,
                iswork: true,
            },
            {
                date: '2016-05-07',
                name: 'Tom',
                permission: '超级管理员',
                logintimes: 12,
                lastip: '231.156.173.102',
                id: '1',
                lastlogintime: '2022-04-15 13:50:21',
                phonenum: '17658853541',
                dosomething: true,
                vedio: false,
                design: false,
                text: false,
                iswork: true,
            },
        ])

        return {
            succession,
            successionValue,
            language,
            voiceValue,
            languageValue,
            input3,
            choose_first,
            choose_third,
            designValue,
            textValue,
            multipleSelection,
            handleSelectionChange,
            tableData,
            checked1,
            checked2,
            checked3,
            checked4,
            currentPage,
            pageSize,
            disabled,
            small,
            total,
            specialItem,
            specialItemValue,
            handleCurrentChange,
        };
    },
    components: {}
};
</script>

<style scoped>
/* 头部start*/
.content-header {
    padding: 20px 0;
}

.upload_content_view {
    margin-left: 235px;
    padding: 0 24px;
}

.page_name {
    font-size: 24px;
    font-weight: bold;
}

.page_address {
    margin-right: 50px;
}

/* 头部结束 */
.mb-3 {
    margin-bottom: 16px;
}

.upload_content {
    background: #fff;
    border-radius: 10px;
    width: 100%;
    min-height: 720px;

}

.tabbar {
    padding: 16px 0px;
    margin: 0 24px;
    cursor: pointer;
    color: #999
}

.selected {
    color: #0084ff;
    border-bottom: 2px solid #0084ff;
}

.select_row {
    text-align: start;
    padding: 16px 8px;
}

.el-select {
    padding: 0 8px;
    width: 100px;
}

.el-table__row {
    height: 50px;
}

.el-table th.el-table__cell {
    background: #E6F1FF;
}

/* 翻页器样式 */
.demo-pagination-block {
    margin-top: 16px;
    display: flex;
    justify-content: center;
}

.demo-pagination-block .el-pagination {
    margin-bottom: 16px;
}

.save_box {
    position: absolute;
    right: 32px;
}

/* 翻页器样式end */
.el-table {
    border: 1px solid #e6e8eb;
}
</style>