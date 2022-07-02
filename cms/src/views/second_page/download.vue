<template>
    <div class="download_view">
        <el-row class="content-header" justify="space-between" align="middle">
            <div class="page_name">内容管理</div>
            <div class="page_address">当前位置：网站管理>图片管理>图片分类</div>
        </el-row>
        <div class="download_content">
            <el-row class="tab">
                <div class="tabbar selected">
                    下载
                </div>
            </el-row>
            <div>
                <div>
                    <span>内容系列</span>
                    <el-button type="info" size="default">亲宝儿歌</el-button>
                    <span>系列专辑</span>
                    <el-button type="info" size="default">亲宝儿歌第二季</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    name: '',
    setup() {
        return {};
    },
    components: {}
};
</script>

<style scoped>
/* 头部start*/
.content-header {
    padding: 20px 0;
}

.download_view {
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
.download_content {
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
</style>