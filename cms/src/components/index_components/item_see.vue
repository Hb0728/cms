<template>
		<el-col class="item-watch modules_style">
			<el-row type="flex" class="border-bottom pb-3 mb-3" justify="space-between">
				<div class="modules-title">项目审核</div>
				<div>
					<el-button plain>
						<el-icon>
							<ArrowLeft />
						</el-icon>
					</el-button>
					<el-button plain>
						<el-icon>
							<ArrowRight />
						</el-icon>
					</el-button>
				</div>
			</el-row>
			<el-scrollbar height="360px">
				<div class="text-left font-14 item_list" v-for="a in itemlist" :key="a.id">
					<div class="d-flex align-items-center" style="margin-bottom:12px">
						<div :class="'flex-shrink-0 tag tag_'+a.type">{{a.type}}</div>
						<div class="name flex-grow-1 text-ellipsis">{{a.title}}</div>
						<div class="time flex-shrink-0">{{a.time}}</div>
					</div>
					<div class="item_say">项目概要：{{a.say}}</div>
					<div class="requestman"><span class="mr-2">申请人:{{a.man}}</span> <el-button type="success" plain round>查看</el-button></div>
				</div>
			</el-scrollbar>
		</el-col>
</template>

<script>
import { ref, reactive } from 'vue';
export default {
	name: '',
	setup() {
		let itemlist = reactive([
			{
				type: '剧本',
				title: '亲宝第二季剧本立项审核',
				man: '张三',
				id: 123131,
				say: '张阿萨大蛇的',
				time:'2022-6-25'
			},
			{
				type: '设计',
				title: '亲宝第三季剧本立项审核',
				man: '李四',
				id: 123132,
				say: '张阿萨大蛇的',
				time:'2022-6-26',
			},
			{
				type: '视频',
				title: '亲宝第一季剧本立项审核',
				man: '黄大',
				id: 123133,
				say: '陈陈陈',
				time:'2022-6-26',
			},
			{
				type: '视频',
				title: '亲宝第一季剧本立项审核',
				man: '黄大',
				id: 123133,
				say: '陈陈陈',
				time:'2022-6-26',
			},
			{
				type: '视频',
				title: '亲宝第一季剧本立项审核',
				man: '黄大',
				id: 123133,
				say: '陈陈陈',
				time:'2022-6-26',
			},

		])
		return {
			itemlist,
		};
	},
	components: {}
};
</script>

<style scoped>
.modules-title {
	font-size: 18px;
	font-weight: bold;
	text-align: left;
}

.item-watch {
	margin-bottom: 20px;
	max-width: 29%;
	flex: 0 0 29%;
}

.time{
	font-size: 14px;
	color: #999;
}
.border-bottom {
	border-bottom: 1px solid #dee2e6;
}

.pb-3 {
	padding-bottom: 16px;
}
.mb-3{
	margin-bottom:16px
}
.tag{
	margin-right: 8px;
	width: 40px;
	border: 1px solid #0084FF;
	font-size:14px;
	color:#0084FF;
	text-align: center;
}
.name{
	font-size: 16px;
	margin-right: 8px;
	font-weight: bold;
	text-align:start;
}
.flex-grow-1 {
    -ms-flex-positive: 1!important;
    flex-grow: 1!important;
    flex-shrink: 1;
    -ms-flex-negative: 1;
}
.flex-shrink-0 {
    -ms-flex-negative: 0!important;
    flex-shrink: 0!important;
}
.d-flex{
	display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important;
}
.align-items-center{
	-ms-flex-align: center!important;
    align-items: center!important;
}
.text-left{
	text-align: left;
}
.font-14{
	font-size: 14px;
}
.item_list{
	margin-bottom:16px;
}
.item_say{
	margin-bottom: 8px;
	padding-left:50px ;
}
.requestman{
	padding-left:50px ;
}
.mr-2{
	margin-right:12px
}
</style>