<style>
	.dl-share {
		cursor: pointer;
		width: 69px;
		min-width: 69px;
		max-width: 69px;
	    height: 220px;
	    padding-top: 10px;
	    margin-bottom: 20px;
	}
	.dl-share:hover {
		background-color: #FF9900;
	}
	.dl-share:hover .dl-share-weibo {
		background-image: url('./images/share-weibo-off.png');
	}
	.dl-share:hover .dl-share-weixin {
		background-image: url('./images/share-weixin-off.png');
	}
	.dl-share:hover .dl-share-space {
		background-image: url('./images/share-space-off.png');
	}
	.dl-share:hover .dl-share-star {
		background-image: url('./images/share-star-off.png');
	}
	.dl-share:hover .dl-share-agree {
		background-image: url('./images/share-agree-off.png');
	}
	.dl-share-body {
		width: 100%;height: 40px;
	}
	.dl-share-body-weibo:hover, .dl-share-body-weixin:hover, .dl-share-body-space:hover, .dl-share-body-star:hover, .dl-share-body-agree:hover {
		background-color: #ef7a06;
	}
	.dl-share-weibo {
		background-image: url('./images/share-weibo-on.png');
		background-repeat: no-repeat;
		background-size: 100% 100%;
		width: 32px;
		height: 26px;
		position: relative;
	    left: 50%;
	    margin-left: -16px;
	    top: 7px;
	}
	.dl-share-weixin {
		background-image: url('./images/share-weixin-on.png');
		background-repeat: no-repeat;
		background-size: 100% 100%;
		width: 32px;
		height: 26px;
		position: relative;
	    left: 50%;
	    margin-left: -16px;
	    top: 7px;
	}
	.dl-share-space {
		background-image: url('./images/share-space-on.png');
		background-repeat: no-repeat;
		background-size: 100% 100%;
		width: 32px;
		height: 26px;
		position: relative;
	    left: 50%;
	    margin-left: -16px;
	    top: 7px;
	}
	.dl-share-star {
		background-image: url('./images/share-star-on.png');
		background-repeat: no-repeat;
		background-size: 100% 100%;
		width: 32px;
		height: 26px;
		position: relative;
	    left: 50%;
	    margin-left: -16px;
	    top: 7px;
	}
	.dl-share-agree {
		background-image: url('./images/share-agree-on.png');
		background-repeat: no-repeat;
		background-size: 100% 100%;
		width: 32px;
		height: 26px;
		position: relative;
	    left: 50%;
	    margin-left: -16px;
	    top: 7px;
	}
	.dl-share-canvas {
		position: relative;
	    left: 55px;
	    top: -53px;
	    display: none;
	}
	.dl-share-weixin:hover .dl-share-canvas {
		display: block;
	}
</style>
<template>
	<div class="dl-share">
		<div class="dl-share-body-weibo dl-share-body">
			<div class="dl-share-weibo" @click="share('weibo')" title="分享到微博"></div>
		</div>
		<div class="dl-share-body-weixin dl-share-body">
			<div class="dl-share-weixin" @click="share('weixin')" title="微信扫码">
				<canvas class="dl-share-canvas" id="dl-share-canvas"></canvas>
			</div>
		</div>
		<div class="dl-share-body-space dl-share-body" title="分享到QQ空间">
			<div class="dl-share-space" @click="share('qqSpace')"></div>
		</div>
		<div class="dl-share-body-star dl-share-body" title="收藏文章">
			<div class="dl-share-star" @click="share('star')"></div>
		</div>
		<div class="dl-share-body-agree dl-share-body" title="给文章点赞">
			<div class="dl-share-agree" @click="share('agree')"></div>
		</div>
	</div>
</template>

<script>
	var QRCode = require('qrcode')
	export default {
		name: 'DlShare',
		type: 'Share',
		props: {
			shareInfo: Object
		},
		mounted(){
			this.initCode()
		},
		methods: {
			initCode(){
				var t = this,canvas = document.getElementById('dl-share-canvas')
				QRCode.toCanvas(canvas, t.shareInfo.url) 
			},
			share(type){
				var t = this,url,canvas;
				switch (type){
					case "weibo":	
						url = 'http://service.weibo.com/share/share.php?url='+t.shareInfo.url+'&sharesource=weibo&title='+t.shareInfo.title+'&pic='+t.shareInfo.imgUrl+'&appkey='+t.shareInfo.appkey;
						window.open(url,'_blank');
						break;
					case "weixin":
						
						break;
					case "qqSpace":
						url = 'https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+t.shareInfo.url+'&sharesource=qzone&title='+t.shareInfo.title+'&pics='+t.shareInfo.imgUrl+'&summary='+t.shareInfo.decp;
						window.open(url,'_blank');
						break;
					case "star":
						t.$emit('share-callback','star');
						break;
					case "agree":
						t.$emit('share-callback','agree');
						break;
				}
				
			}
		}
	}
</script>
