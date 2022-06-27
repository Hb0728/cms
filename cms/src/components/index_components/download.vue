<template>
    <el-col class="download_record modules_style">
        <div class="modules-title">下载记录</div>
        <el-row class="download_title_row">
            <el-col :span="8" class="download_title"> 名称 </el-col>
            <el-col :span="7" class="download_title"> 人员 </el-col>
            <el-col :span="7" class="download_title"> 时间 </el-col>
        </el-row>
        <ul infinite-scroll-disabled="disabled" class="infinite-list" style="overflow: auto; width: 100%">
            <li v-for="i in download_note" :key="i.id" class="download_list">
                <el-row align="middle">
                    <el-col class="d-flex" :span="8">
                        <i :class="'file_all file_' + i.file_ext"></i>
                        <div class="text-ellipsis flex-grow-1">
                            <div class="text-ellipsis text_left">{{ i.title }}</div>
                            <span class="file_size text_left">{{ i.file_size }}</span>
                        </div>
                    </el-col>
                    <el-col :span="7">
                        <div class="text-ellipsis">{{ i.name }}</div>
                    </el-col>
                    <el-col :span="7">
                        <div>{{ i.time }}</div>
                    </el-col>
                    <el-col :span="1">
                        <a :href="i.url">
                            <el-icon>
                                <MoreFilled />
                            </el-icon>
                        </a>
                    </el-col>
                </el-row>
            </li>
        </ul>
    </el-col>
</template>

<script>
import { ref, reactive } from "vue";
export default {
    name: "",
    setup() {
        // 下载记录列表
        let download_note = reactive([
            {
                id: 17,
                title: "教育的铃响地址教育的铃响地址.doc",
                file_ext: "doc",
                file_size: "29.00KB",
                time: "2022-06-15 10:52:06",
                url: "www.baidu.com",
                name: "张三",
            },
            {
                id: 16,
                title: "1.doc",
                file_ext: "ppt",
                file_size: "23.00KB",
                time: "2022-06-15 10:52:06",
                url: "www.baidu.com",
                name: "李四",
            },
            {
                id: 15,
                title: "zzzzz.doc",
                file_ext: "",
                file_size: "23.00KB",
                time: "2022-06-15 10:52:06",
                url: "www.baidu.com",
                name: "王五",
            },
            {
                id: 15,
                title: "zzzzz.doc",
                file_ext: "",
                file_size: "23.00KB",
                time: "2022-06-15 10:52:06",
                url: "www.baidu.com",
                name: "王五",
            },
            {
                id: 15,
                title: "zzzzz.doc",
                file_ext: "",
                file_size: "23.00KB",
                time: "2022-06-15 10:52:06",
                url: "www.baidu.com",
                name: "王五",
            },
            {
                id: 15,
                title: "zzzzz.doc",
                file_ext: "",
                file_size: "23.00KB",
                time: "2022-06-15 10:52:06",
                url: "www.baidu.com",
                name: "王五",
            },
            {
                id: 15,
                title: "zzzzz.doc",
                file_ext: "",
                file_size: "23.00KB",
                time: "2022-06-15 10:52:06",
                url: "www.baidu.com",
                name: "王五",
            },
            {
                id: 15,
                title: "zzzzz.doc",
                file_ext: "",
                file_size: "23.00KB",
                time: "2022-06-15 10:52:06",
                url: "www.baidu.com",
                name: "王五",
            },
            {
                id: 15,
                title: "zzzzz.doc",
                file_ext: "",
                file_size: "23.00KB",
                time: "2022-06-15 10:52:06",
                url: "www.baidu.com",
                name: "王五",
            },
            {
                id: 15,
                title: "zzzzz.doc",
                file_ext: "",
                file_size: "23.00KB",
                time: "2022-06-15 10:52:06",
                url: "www.baidu.com",
                name: "王五",
            },
            {
                id: 15,
                title: "zzzzz.doc",
                file_ext: "",
                file_size: "23.00KB",
                time: "2022-06-15 10:52:06",
                url: "www.baidu.com",
                name: "王五",
            },
            {
                id: 15,
                title: "zzzzz.doc",
                file_ext: "",
                file_size: "23.00KB",
                time: "2022-06-15 10:52:06",
                url: "www.baidu.com",
                name: "王五",
            },
            {
                id: 15,
                title: "zzzzz.doc",
                file_ext: "",
                file_size: "23.00KB",
                time: "2022-06-15 10:52:06",
                url: "www.baidu.com",
                name: "王五",
            },
            {
                id: 15,
                title: "zzzzz.doc",
                file_ext: "",
                file_size: "23.00KB",
                time: "2022-06-15 10:52:06",
                url: "www.baidu.com",
                name: "王五",
            },
            {
                id: 15,
                title: "zzzzz.doc",
                file_ext: "",
                file_size: "23.00KB",
                time: "2022-06-15 10:52:06",
                url: "www.baidu.com",
                name: "王五",
            },
        ]);
        return {
            download_note
        };
    },
    components: {},
};
</script>

<style scoped>
.d-flex{
    display: flex;
}
.modules-title {
    font-size: 18px;
    font-weight: bold;
    text-align: left;
}

.download_title {
    color: #999;
    font-weight: 700;
}

.download_title_row {
    padding: 16px 0;
}

.infinite-list {
    height: 300px;
    padding: 0;
    margin: 0;
    list-style: none;
}

.infinite-list .infinite-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: var(--el-color-primary-light-9);
    margin: 10px;
    color: var(--el-color-primary);
}

.infinite-list .infinite-list-item+.list-item {
    margin-top: 10px;
}

.download_list {
    margin-bottom: 12px;
    font-size: 14px;
    padding: 12px;
    border:1px solid #dee2e6
}

.file_all {
    display: block;
    width: 30px;
    height: 30px;
    background-image: url(@/assets/img/unknown-ext.svg);
    background-size: cover;
    background-repeat:no-repeat;
    margin-right:12px;
    flex-shrink: 0;
}
.flex-grow-1 {
    -ms-flex-positive: 1!important;
    flex-grow: 1!important;
    flex-shrink: 1;
    -ms-flex-negative: 1;
}
.text_left{
    text-align: start;
}
.file_size{
    color:#999
}
</style>
