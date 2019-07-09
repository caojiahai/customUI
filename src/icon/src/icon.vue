<template>
	<i :class="'dl-icon-' + name"></i>
</template>

<script>
	export default {
		name: 'DlIcon',
		type: 'Icon',
		props: {
			name: String
		}
	};
</script>

<style>

</style>