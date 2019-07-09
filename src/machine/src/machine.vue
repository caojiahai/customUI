<template>
	<div class="dl-machine">
		<div class="dl-machine-top">
			<div class="dl-machine-top-img">
				<img :src="machineInfo.avatar" />
			</div>
			<div class="dl-machine-top-title">
				{{machineInfo.org_name}}
			</div>
			<div class="dl-machine-top-content">
              	{{machineInfo.desc}}
			</div>		
			<div class="dl-machine-top-follow">
				<dl-button size="mini" :type="(machineInfo.is_attention&&machineInfo.is_attention == '1')?'':'uncommon'" @click="follow(machineInfo)">
					{{(machineInfo.is_attention&&machineInfo.is_attention == '1')?'已关注':'关注'}}
				</dl-button>
			</div>
		</div>
		<div class="dl-machine-bottom">
			<div class="dl-machine-bottom-title">
				{{title}}
			</div>
			<div class="dl-machine-bottom-content">
				<div class="dl-machine-body" v-for="(x,index) in machineInfo.accounts" :key="index" v-if="index<4">
					<div class="dl-machine-body-img">
						<img :src="x.avatar" />
					</div>
					<div class="dl-machine-body-name">
                        {{x.account_name}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DlMachine',
		type: 'Machine',
		props: {
			machineInfo:Object,
			title: String
		},
		methods: {
			follow(val){
				if(val.is_attention&&val.is_attention == '1'){
					this.machineInfo.is_attention = 0;
				}else{
					this.machineInfo.is_attention = 1;
				}
				this.$emit('machine-follow',val)
			}
		}
	}
</script>
