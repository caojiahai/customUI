<template>
	<div class="dl-condition">
		<div class="dl-condition_tab dl-flex" v-for="(x,xIndex) in conditionInfo" :key="xIndex">
			<div class="dl-flex-grow0 dl-flex dl-condition_tab_left">
				<div class="dl-flex-grow0 adMarket_label">{{x.name}}</div>
				<div class="dl-flex-grow0">：</div>
			</div>
			<div class="dl-flex-grow1" style="position: relative;">
				<div class="dl-flex dl-condition_tab_center" :class="x.type?'dl-condition-isShow':''" @mouseleave="mouseleave">
					<div class="dl-flex-grow0 dl-condition_tab_center_div" v-for="(y,yIndex) in x.list" :key="yIndex" @click.stop="check(y,'',xIndex)" @mouseover="mouseover($event,y,xIndex)" :class="y.type?'dl-condition-selected':''">
						{{y.name}}
						<div class="dl-flex dl-condition_tab_center_hover" @mouseleave="mouseleave" v-if="xIndex == hoverPid && yIndex == hoverId">
							<div class="mr10" v-for="(z,zIndex) in hoverList" :class="z.type?'dl-condition-selected':'dl-condition-noSelected'" @click.stop="check(z,'area',xIndex)">{{z.name}}</div>
						</div>
					</div>
				</div>
			</div>
			<div class="dl-condition_tab_right" v-if="x.list.length>9">
				<dl-button size="mini" @click="x.type = !x.type">
					{{x.type?'收起':'展开'}}
					<i :class="x.type?'dl-icon-arrow-up':'dl-icon-arrow-down'"></i>
				</dl-button>
			</div>
		</div>	
		<div class="dl-condition_checked dl-flex">
			<div class="dl-flex-grow0 dl-flex dl-condition_tab_left">
				<div class="dl-flex-grow0 adMarket_label">您已选择</div>
				<div class="dl-flex-grow0">：</div>
			</div>
			<div class="dl-flex-grow1 dl-flex dl-condition_tab_center">
				<div class="dl-flex-grow0" v-for="(x,index) in checkedList" :key="index" v-if="checkedList.length>0">
					<span>{{x.name}}</span><i class="dl-icon-close" @click="del(x)"></i>
				</div>
				<div class="dl-flex-grow0" v-if="checkedList.length==0">
					默认不限
				</div>
			</div>
			<div class="dl-condition_tab_right">
				<a @click="clear">清空选项</a>
			</div>
		</div>	
	</div>
</template>

<script>
	export default {
		name: 'DlCondition',
		type: 'Condition',
		props: {
			conditionInfo: Array
		},
		data() {
			return {
				checkedList: [],
				hoverList: [],
				hoverPid: -1,
				hoverId: -1,
			}
		},
		mounted() {
			var t = this;
			t.push();
		},
		methods: {
			mouseleave(){
				var t = this;
				t.hoverList = [];
				t.hoverPid = -1;
				t.hoverId = -1;
			},
			mouseover(event,obj,index){
				var t = this;
				if(obj.list){
					t.hoverPid = index;
					t.hoverId = obj.id;
					t.hoverList = obj.list;
				}else{
					t.hoverList = [];
					t.hoverPid = -1;
					t.hoverId = -1;
				}
			},
			del(obj){
				var t = this;
				t.conditionInfo.map((a,a_i) => {
					if(a.pName == obj.pName){
						a.list.map((b,b_i) => {
							if(b.list && b.list.length > 0){
								b.list.map((c,c_i) => {
									c.type = false;
								})
								b.type = false;
							}else{
								if(obj.id == b_i){
									b.type = false;
								}
								if(b_i === 0){
									b.type = true;
								}
							}
						})
					}
				})
				t.push();
			},
			check(obj, type, index){
				var t = this;
				t.conditionInfo[index].list.map((a,i) => {
					switch (type){
						case "area":
							if(obj.pid === i){
								a.type = true;
								a.list.map((b,b_i) => {
									if(obj.index === b_i){
										b.type = true;
									}else{
										b.type = false;
									}
								})
							}else{
								a.type = false;
							}
							break;
						default:
							if(obj.id === i){
								a.type = true;
								if(obj.list && obj.list.length>0){
									obj.list.map((b,b_i) => {
										if(b_i === 0){
											b.type = true;
										}else{
											b.type = false;
										}
									})
								}
							}else{
								a.type = false;
							}
							break;
					}
				})
				t.push();
			},
			push(){
				var t = this, out = [];
				t.conditionInfo.map((a,a_i) => {
					a.list.map((b,b_i) => {
						if(b.type && b_i > 0){
							if(b.list && b.list.length>0){
								b.list.map((c,c_i) => {
									if(c.type){
										out.push(c)
									}
								})
							}else{
								out.push(b)
							}
						}
					})
				})
				t.checkedList = out;
			},
			clear(){
				var t = this;
				t.conditionInfo.map((a,a_i) => {
					a.list.map((b,b_i) => {
						if(b.id === 0){
							b.type = true;
						}else{
							b.type = false;
						}
					})
				})
				t.push();
			}
		},
		watch: {
			checkedList(val){
				this.$emit('cdt-change',val)
			}
		}
	}
</script>
