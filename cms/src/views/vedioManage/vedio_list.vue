<template>
    <el-row style="margin-left:235px">
        <div class="text_view">
            <el-row class="content-header" justify="space-between" align="middle">
                <div class="page_name">视频管理</div>
                <div class="page_address">当前位置：后台首页>内容管理>已上传内容</div>
            </el-row>
            <div class="text_list" style="width:100%">
                <el-row class="tab">
                    <div class="tabbar selected" @click="choose_first">
                        项目列表
                    </div>

                    <el-button type="success" size="default" style="position:absolute;right:20px;top: 20px;">添加视频项目
                    </el-button>
                </el-row>
                <el-row class="select_row" justify="space-between">
                    <div class="mb-3">
                        <el-select v-model="content_data.successionValue" class="m-2" placeholder="视频负责人" size="default">
                            <el-option v-for="item in content_data.succession" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                        <el-select v-model="content_data.statusValue" class="m-2" placeholder="状态" size="default">
                            <el-option value="有">进行中</el-option>
                            <el-option value="无">已完成</el-option>
                        </el-select>
                        <el-select v-model="content_data.makerValue" class="m-2" placeholder="创建人" size="default">
                            <el-option v-for="item in content_data.succession" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </div>
                    <div class="mb-3">
                        <el-input v-model="content_data.searchValue" clearable placeholder="请输入搜索内容" size="default"
                            class="input-with-select">
                            <template #append>
                                <el-button>
                                    <el-icon>
                                        <Search />
                                    </el-icon>
                                </el-button>
                            </template>
                        </el-input>
                    </div>
                </el-row>
                <el-table :header-cell-style="{ background: '#E6F1FF',color:'#666'}" :data="content_data.tableData" size="large" style="width: 100%"
                    @selection-change="content_data.handleSelectionChange">
                    <el-table-column align="center" type="selection" />
                    <el-table-column align="center" property="num" label="序号"  />
                    <el-table-column align="center" property="title" label="项目标题"  />
                    <el-table-column align="center" property="title" label="音频负责人"  />
                    <el-table-column align="center" property="title" label="剧本关联"  />
                    <el-table-column align="center" property="name" label="已上传音频数">
                        <template #default="scope">
                            <div style="color:#27d33d">{{scope.row.name}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" property="name" label="审核通过"  >
                        <template #default="scope">
                            <div style="color:#fd7575">{{scope.row.name}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" property="title" label="状态" />
                    <el-table-column align="center" property="name" label="附件/备注">
                        <template #default="scope">
                            <div style="margin-bottom:8px"><el-button type="primary">附件</el-button></div>
                            <div><el-button type="primary">备注</el-button></div>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" property="address" label="操作">
                        <template #default="scope">
                            <el-button v-if="scope.row.type===1" type="info"  @click="content_data.makeClick">制作中</el-button>
                            <el-button v-if="scope.row.type===2"  type="warning"  @click="content_data.watchClick">审核</el-button>
                            <el-button v-if="scope.row.type===3"  type="danger" >入库</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </el-row>
</template>

<script>
import { ref, reactive } from 'vue';
export default {
    name: '',
    setup() {
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
            makerValue:[
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
                    tag: 'Home',
                    type:1,
                },
                {
                    date: '2016-05-02',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036',
                    tag: 'Office',
                    type:2,
                },
                {
                    date: '2016-05-04',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036',
                    tag: 'Home',
                    type:3,
                },
                {
                    date: '2016-05-01',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036',
                    tag: 'Office',
                    type:1,
                },
            ],
            successionValue: '',
            statusValue: '',
            watchValue: '',
            contentValue: '',
            searchValue: '',
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
</style>