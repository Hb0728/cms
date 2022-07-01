<template>
    <el-row style="margin-left:235px">
        <div class="text_view">
            <el-row class="content-header" justify="space-between" align="middle">
                <div class="page_name">发布管理</div>
                <div class="page_address">当前位置：后台首页>内容管理>已上传内容</div>
            </el-row>
            <div class="text_list" style="width:100%">
                <el-row class="tab">
                    <div class="tabbar ">
                        专辑发布
                    </div>
                    <div class="tabbar selected" @click="content_data.choose_second">
                        专辑编辑
                    </div>
                    <el-button type="success" size="default" style="position:absolute;right:20px;top: 20px;">新建专辑
                    </el-button>
                </el-row>
                <el-table :header-cell-style="{ background: '#E6F1FF', color: '#666' }" :data="content_data.tableData"
                    size="large" style="width: 100%" @selection-change="content_data.handleSelectionChange">
                    <el-table-column align="center" type="selection" />
                    <el-table-column align="center" property="num" label="序号" />
                    <el-table-column align="center" property="title" label="专题名称" />
                    <el-table-column align="center" property="title" label="专题封面">
                        <template #default="scope">
                            <div style="display: flex; align-items: center;justify-contnet:center">
                                <el-image :src="scope.row.imgurl" />
                                <!-- :preview-src-list="[scope.row.imgurl]"  图片预览层级问题 ？？？  待解决-->
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" property="title" label="专题系列" />
                    <el-table-column align="center" property="title" label="专辑集数" />
                    <el-table-column align="center" property="name" label="语言"/>
                    <el-table-column align="center" property="address" label="操作">
                        <template #default="scope">
                            <el-button type="default" @click="content_data.makeClick">查看专题</el-button>
                        </template>
                    </el-table-column>
                </el-table>
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
                    tag: 'Office',
                    type: 1,
                    imgurl: 'https://picsum.photos/id/70/50/50',
                },
            ],
            checked_1:false,
            checked_2:false,
            checked_3:false,
            checked_4:false,
            checked_5:false,
            checked_6:false,
            successionValue: '',
            statusValue: '',
            watchValue: '',
            contentValue: '',
            searchValue: '',
            choose_second: function () {
                router.push('/special_write')
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
</style>