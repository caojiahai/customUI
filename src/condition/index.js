/**
 * @desc condition入口js
 * @date 2019/6/21
 */

"use strict";

import DlCondition from './src/condition';

DlCondition.install = function(Vue) {
	Vue.component(DlCondition.name, DlCondition);
};

export default DlCondition;
