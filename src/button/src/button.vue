<template>
	<button :disabled="disabled" class="dl-button" @click="handleClick"
		:autofocus="autofocus" :type="nativeType"
		:class="[
			type ? 'dl-button--' + type : '',
			size ? 'dl-button--' + size : '',
			{
		        'is-disabled': disabled,
		        'is-plain': plain,
		        'is-round': round,
		        'is-circle': circle
	      	}
		]">
		<span v-if="$slots.default"><slot></slot></span>
	</button>
</template>

<script>
	export default {
		name: 'DlButton',
		type: 'Button',
		props: {
			type: {
				type: String,
				default: 'default'
			},
			size: String,
			icon: {
				type: String,
				default: ''
			},
			nativeType: {
				type: String,
				default: 'button'
			},
			disabled: Boolean,
			plain: Boolean,
			autofocus: Boolean,
			round: Boolean,
      		circle: Boolean
		},
		methods: {
			handleClick(evt) {
				this.$emit('click',evt);
			}
		}
	}
</script>
