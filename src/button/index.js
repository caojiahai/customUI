/**
 * @desc button入口js
 * @date 2019/6/17
 */

"use strict";

import DlButton from './src/button';

DlButton.install = function(Vue) {
	Vue.component(DlButton.name, DlButton);
};

export default DlButton;
