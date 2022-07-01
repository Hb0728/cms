<template>
    <el-row>
        <div class="upload_content_view">
            <el-row class="content-header" justify="space-between" align="middle">
                <div class="page_name">内容管理</div>
                <div class="page_address">当前位置：后台首页>内容管理>已上传内容</div>
            </el-row>
            <div class="upload_content">
                <el-row class="tab huang">
                    <div :class="`tabbar ${choose_num === 1 ? 'selected' : ''}`" @click="choose_first">
                        已入库内容
                    </div>
                    <div :class="`tabbar ${choose_num === 2 ? 'selected' : ''}`" @click="choose_second">
                        素材库
                    </div>
                    <el-button v-show="choose_num == 2" type="warning" size="default"
                        style="position:absolute;right:20px;top: 20px;">手动上传素材</el-button>
                </el-row>
                <div v-show="choose_num == 1">
                    <el-row class="select_row" justify="space-between">
                        <div class="mb-3">
                            <el-select v-model="successionValue" class="m-2" placeholder="系列" size="default">
                                <el-option v-for="item in succession" :key="item.value" :label="item.label"
                                    :value="item.value" />
                            </el-select>
                            <el-select v-model="languageValue" class="m-2" placeholder="语言" size="default">
                                <el-option v-for="item in language" :key="item.value" :label="item.label"
                                    :value="item.value" />
                            </el-select>
                            <el-select v-model="voiceValue" class="m-2" placeholder="音频文件" size="default">
                                <el-option value="有">有</el-option>
                                <el-option value="无">无</el-option>
                            </el-select>
                            <el-select v-model="designValue" class="m-2" placeholder="设计文件" size="default">
                                <el-option value="有">有</el-option>
                                <el-option value="无">无</el-option>
                            </el-select>
                            <el-select v-model="textValue" class="m-2" placeholder="剧本" size="default">
                                <el-option value="有">有</el-option>
                                <el-option value="无">无</el-option>
                            </el-select>
                        </div>
                        <div class="mb-3">
                            <el-input v-model="input3" clearable placeholder="请输入搜索内容" size="default"
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
                    <el-table :header-cell-style="{ background: '#E6F1FF',color:'#666'}" :data="tableData" size="large" style="width: 100%"
                        @selection-change="handleSelectionChange">
                        <el-table-column align="center" type="selection" width="55" />
                        <el-table-column align="center" property="id" label="ID" width="120" />
                        <el-table-column align="center" property="name" label="名称" width="120" />
                        <el-table-column align="center" property="tag" label="系列" show-overflow-tooltip />
                        <el-table-column align="center" property="imgurl" label="封面图" show-overflow-tooltip>
                            <template #default="scope">
                                <div style="display: flex; align-items: center;justify-content: center;">
                                    <el-image :src="scope.row.imgurl" />
                                    <!-- :preview-src-list="[scope.row.imgurl]"  图片预览层级问题 ？？？  待解决-->
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" property="language" label="语言" show-overflow-tooltip />
                        <el-table-column align="center" property="" label="音频文件" show-overflow-tooltip>
                            <template #default="scope">
                                <el-checkbox v-model="scope.row.voice" size="large" />
                            </template>

                        </el-table-column>
                        <el-table-column align="center" property="" label="视频文件" show-overflow-tooltip>
                            <template #default="scope">
                                <el-checkbox v-model="scope.row.vedio" size="large" />
                            </template>
                        </el-table-column>
                        <el-table-column align="center" property="" label="设计文件" show-overflow-tooltip>
                            <template #default="scope">
                                <el-checkbox v-model="scope.row.design" size="large" />
                            </template>
                        </el-table-column>
                        <el-table-column align="center" property="" label="剧本" show-overflow-tooltip>
                            <template #default="scope">
                                <el-checkbox v-model="scope.row.text" size="large" />
                            </template>
                        </el-table-column>
                        <el-table-column align="center" property="" width="250" label="操作" show-overflow-tooltip>
                            <el-button size="default" type="success">下载</el-button>
                            <el-button size="default" type="primary">编辑</el-button>
                            <el-button size="default" type="danger">删除</el-button>
                        </el-table-column>
                    </el-table>
                    <div class="demo-pagination-block">
                        <el-pagination v-model:currentPage="currentPage" v-model:page-size="pageSize" :small="small"
                            :disabled="disabled" layout="prev, pager, next, jumper" :total="total"
                            @current-change="handleCurrentChange" />
                    </div>
                </div>
                <div v-show="choose_num == 2">
                    <el-row class="select_row" justify="space-between">
                        <div class="mb-3">
                            <el-select v-model="successionValue" class="m-2" placeholder="系列" size="default">
                                <el-option v-for="item in succession" :key="item.value" :label="item.label"
                                    :value="item.value" />
                            </el-select>
                            <el-select v-model="specialItemValue" class="m-2" placeholder="专辑" size="default">
                                <el-option v-for="item in specialItem" :key="item" :label="item.label" :value="item" />
                            </el-select>
                            <el-select v-model="voiceValue" class="m-2" placeholder="文件类型" size="default">
                                <el-option value="img">图片</el-option>
                                <el-option value="vedio">视频</el-option>
                                <el-option value="text">文稿</el-option>
                                <el-option value="old">源文件</el-option>
                            </el-select>
                            <el-select v-model="designValue" class="m-2" placeholder="文件后缀" size="default">
                                <el-option value="有">有</el-option>
                                <el-option value="无">无</el-option>
                            </el-select>
                            <el-select v-model="textValue" class="m-2" placeholder="操作者" size="default">
                                <el-option v-for="item in language" :key="item.value" :label="item.label"
                                    :value="item.value" />
                            </el-select>
                        </div>
                        <div class="mb-3">
                            <el-button type="primary" style="margin-right:12px">批量下载</el-button>
                        </div>
                    </el-row>
                    <el-table :header-cell-style="{ background: '#E6F1FF', color: '#666' }" :data="tableData" size="large" style="width: 100%"
                        @selection-change="handleSelectionChange">
                        <el-table-column align="center" type="selection" width="55" />
                        <el-table-column align="center" property="id" label="ID" width="120" />
                        <el-table-column align="center" property="name" label="名称" width="120" />
                        <el-table-column align="center" property="tag" label="系列" />
                        <el-table-column align="center" property="language" label="专辑"  />
                        <el-table-column align="center" property="imgurl" label="缩略图">
                            <template #default="scope">
                                <div style="display: flex; align-items: center">
                                    <el-image :src="scope.row.imgurl" />
                                    <!-- :preview-src-list="[scope.row.imgurl]"  图片预览层级问题 ？？？  待解决-->
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" property="language" label="文件类型"  />
                        <el-table-column align="center" property="language" label="操作者" >
                        </el-table-column>
                        <el-table-column align="center" property="language" label="上传时间" >
                        </el-table-column>

                        <el-table-column align="center" property="" width="250" label="操作">
                            <el-button size="default" type="success">下载</el-button>
                            <el-button size="default" type="primary">编辑</el-button>
                            <el-button size="default" type="danger">删除</el-button>
                        </el-table-column>
                    </el-table>
                    <div class="demo-pagination-block">
                        <el-pagination v-model:currentPage="currentPage" v-model:page-size="pageSize" :small="small"
                            :disabled="disabled" layout="prev, pager, next, jumper" :total="total"
                            @current-change="handleCurrentChange" />
                    </div>
                </div>
            </div>

        </div>
        <div>

        </div>
    </el-row>
</template>

<script>
import { ref, reactive } from 'vue';
export default {
    name: '',
    setup() {
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
        let choose_num = ref(1)
        const input3 = ref('')
        const checked1 = ref(true)
        const checked2 = ref(false)
        const checked3 = ref(false)
        const checked4 = ref(false)

        function choose_first() {
            choose_num.value = 1
        }
        function choose_second() {
            choose_num.value = 2;
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
                address: 'No. 189, Grove St, Los Angeles',
                language: '中文',
                tag: '亲宝',
                id: '1',
                imgurl: 'https://picsum.photos/id/66/50/50',
                voice: false,
                vedio: false,
                design: false,
                text: false,
            },
            {
                date: '2016-05-02',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
                language: '中文',
                tag: '亲宝',
                id: '1',
                imgurl: 'https://picsum.photos/id/66/50/50',
                voice: false,
                vedio: true,
                design: false,
                text: false,
            },
            {
                date: '2016-05-04',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
                language: '中文',
                tag: '亲宝',
                id: '1',
                imgurl: 'https://picsum.photos/id/66/50/50',
                voice: false,
                vedio: false,
                design: true,
                text: false,
            },
            {
                date: '2016-05-01',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
                language: '中文',
                tag: '亲宝',
                id: '1',
                imgurl: 'https://picsum.photos/id/66/50/50',
                voice: false,
                vedio: false,
                design: false,
                text: false,
            },
            {
                date: '2016-05-08',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
                language: '中文',
                tag: '亲宝',
                id: '1',
                imgurl: 'https://picsum.photos/id/66/50/50',
                voice: false,
                vedio: false,
                design: false,
                text: false,
            },
            {
                date: '2016-05-06',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
                language: '中文',
                tag: '亲宝',
                id: '1',
                imgurl: 'https://picsum.photos/id/66/50/50',
                voice: false,
                vedio: false,
                design: false,
                text: false,
            },
            {
                date: '2016-05-07',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
                language: '中文',
                tag: '亲宝',
                id: '1',
                imgurl: 'https://picsum.photos/id/66/50/50',
                voice: false,
                vedio: false,
                design: false,
                text: false,
            },
        ])

        return {
            choose_num,
            succession,
            successionValue,
            language,
            voiceValue,
            languageValue,
            input3,
            choose_first,
            choose_second,
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
    width: 100%;
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

/* 翻页器样式end */
</style>