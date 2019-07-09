/**
 * @desc icon入口js
 * @date 2019/6/20
 */

"use strict";

import DlIcon from './src/icon.vue';

DlIcon.install = function(Vue) {
	Vue.component(DlIcon.name, DlIcon);
};

export default DlIcon;