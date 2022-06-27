<template>
  <el-row class="">
    <div class="index-view">
      <el-row class="content-header" justify="space-between" align="middle">
        <div class="page_name">主页</div>
        <div class="page_address">当前位置：主页</div>
      </el-row>
      <el-row>
        <cartoon/>
        <download/>
        <item_see/>
        <in_state/>
        <all_count/>
      </el-row>
    </div>
  </el-row>
</template>

<script>
import { ref, reactive } from "vue";
import cartoon from "@/components/index_components/cartoon.vue";
import download from "@/components/index_components/download.vue";
import itemsee from "@/components/index_components/item_see.vue";
import in_state from "@/components/index_components/in_state.vue";
import all_count from "@/components/index_components/all_count.vue";
export default {
  name: "",
  components: {
    cartoon,
    itemsee,
    download,
    in_state,
    all_count,
  },
  mounted() {
    
  },
  setup() {
    
    return {
    };
  },
};
</script>

<style scoped>
.index-view {
  width: 100%;
  margin-left: 235px;
  padding: 0 24px;
}

.content-header {
  padding: 20px 0;
}

.page_name {
  font-size: 24px;
  font-weight: bold;
}

.page_address {
  margin-right: 50px;
}

.cartoon-percent {
  margin-right: 1.5%;
  margin-bottom: 20px;
  max-width: 34%;
  flex: 0 0 34%;
}

.download_record {
  margin-right: 1.5%;
  margin-bottom: 20px;
  max-width: 34%;
  flex: 0 0 34%;
}

.item-watch {
  margin-bottom: 20px;
  max-width: 29%;
  flex: 0 0 29%;
}

.item_state {
  margin-right: 1.5%;
  max-width: 69.5%;
  flex: 0 0 71%;
  margin-bottom: 20px;
}

.count_material {
  max-width: 29%;
  flex: 0 0 29%;
  margin-bottom: 20px;
}

.modules_style {
  padding: 16px;
  background-color: #fff;
  box-shadow: rgb(152 149 149) 0px 2px 6px 0px;
  border-radius: 8px;
}




</style>
