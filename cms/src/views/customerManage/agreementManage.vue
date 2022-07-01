<template>
    <el-row style="margin-left:235px">
        <div class="text_view">
            <el-row class="content-header" justify="space-between" align="middle">
                <div class="page_name">客户管理</div>
                <div class="page_address">当前位置：后台首页>内容管理>已上传内容</div>
            </el-row>
            <div class="text_list" style="width:100%">
                <el-row class="tab">
                    <div class="tabbar "  @click="content_data.choose_first">
                        客户列表
                    </div>
                    <div class="tabbar selected">
                        合同管理
                    </div>
                    <el-button type="success" size="default" style="position:absolute;right:20px;top: 20px;">添加合同
                    </el-button>
                </el-row>
                <el-row style="padding:24px">
                    <el-input class="search_input m-2" v-model="content_data.searchValue" size="default" placeholder="请输入搜索内容" />
                    <el-select v-model="content_data.selectSearch" class="m-2" placeholder="Select" size="default">
                        <el-option v-for="item in content_data.options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                    <el-button type="primary" size="default">
                        <el-icon>
                            <Search />
                        </el-icon>
                    </el-button>
                    <el-button type="primary" size="default">清除搜索</el-button>
                </el-row>
                <el-table :header-cell-style="{ background: '#E6F1FF', color: '#666' }" :data="content_data.tableData"
                    size="large" style="width: 100%" @selection-change="content_data.handleSelectionChange">
                    <el-table-column align="center" type="selection" />
                    <el-table-column align="center" property="num" label="ID" />
                    <el-table-column align="center" property="title" label="对方单位" />
                    <el-table-column align="center" property="title" label="对方身份" />
                    <el-table-column align="center" property="title" label="合同编号" />
                    <el-table-column align="center" property="title" label="签订时间" />
                    <el-table-column align="center" property="name" label="打款情况">
                        <template #default="scope">
                            <el-switch v-model="scope.row.iswork" width="100" size="large" inline-prompt active-text="开"
                                inactive-text="关" />
                        </template>
                    </el-table-column>
                    <el-table-column align="center" property="name" label="发票情况">
                        <template #default="scope">
                            <el-switch v-model="scope.row.isopen2" width="100" size="large" style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" inline-prompt active-text="开"
                                inactive-text="关" />
                        </template>
                    </el-table-column>
                    <el-table-column align="center" property="name" label="合同状态">
                        <template #default="scope">
                            <el-switch v-model="scope.row.isopen" width="100" size="large" style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" inline-prompt active-text="开"
                                inactive-text="关" />
                        </template>
                    </el-table-column>
                    <el-table-column align="center" property="address" label="操作">
                        <template #default="scope">
                            <el-button type="primary" @click="content_data.makeClick">查看</el-button>
                            <el-button type="danger" @click="content_data.makeClick">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-row style="padding:24px" justify="space-between" align="middle">
                    <el-button type="primary">批量删除</el-button>
                    <div class="demo-pagination-block">
                        <el-pagination v-model:currentPage="content_data.currentPage" :page-size="content_data.pageSize"
                             :background="true" layout="prev, pager, next, jumper"
                            :total="content_data.total" @current-change="content_data.handleCurrentChange" />
                    </div>
                </el-row>
            </div>
        </div>
    </el-row>
</template>

<script>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
export default {
    name: '',
    setup() {
        //定义路由管理器
        const router = useRouter();
        const content_data = reactive({
            succession: [
                {
                    value: '张三'
                },
                {
                    value: '李四'
                },
                {
                    value: '王五'
                }
            ],
            select: '',
            searchValue: '',
            makerValue: [
                {
                    value: '张三'
                },
                {
                    value: '李四'
                },
                {
                    value: '王五'
                }
            ],
            tableData: [
                {
                    date: '2016-05-03',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036',
                    isopen: true,
                    isopen2: true,
                    iswork: false,
                    tag: 'Home',
                    type: 1,
                    imgurl: 'https://picsum.photos/id/67/50/50',
                },
                {
                    date: '2016-05-02',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036',
                    isopen: true,
                    isopen2: true,
                    iswork: false,
                    tag: 'Office',
                    type: 2,
                    imgurl: 'https://picsum.photos/id/68/50/50',
                },
                {
                    date: '2016-05-04',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036',
                    isopen: true,
                    isopen2: true,
                    iswork: false,
                    tag: 'Home',
                    type: 3,
                    imgurl: 'https://picsum.photos/id/69/50/50',
                },
                {
                    date: '2016-05-01',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036',
                    isopen: true,
                    iswork: false,
                    tag: 'Office',
                    type: 1,
                    imgurl: 'https://picsum.photos/id/70/50/50',
                },
            ],
            options: [{
                label: '腾讯',
                value:1
            }, {
                label: '爱奇艺',
                value:2
            }, {
                label: '芒果',
                value:3,
                }],
            selectSearch:'',
            currentPage: 1,
            pageSize:20,
            total:99,
            handleCurrentChange:function() { 
                console.log(111)
            },
            choose_first: function () {
                router.push('/customer_list')
            },
            handleSelectionChange: function () {
                console.log('我调用了')
            },
            watchClick: function () {
                console.log('审核');
            },
            makeClick: function () {
                console.log('入库');
            }
        })
        return {
            content_data
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

.text_view {
    width: 100%;
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

.text_list {
    background: #fff;
    border-radius: 10px;
    width: 100%;
    min-height: 600px;
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

.search_input {
    width: auto;
}
</style>