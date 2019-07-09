/**
 * @desc share入口js
 * @date 2019/6/24
 */

"use strict";
import DlShare from './src/share';

DlShare.install = function(Vue) {
	Vue.component(DlShare.name, DlShare);
};

export default DlShare;
