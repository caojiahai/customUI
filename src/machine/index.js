/**
 * @desc machine入口js
 * @date 2019/6/17
 */

"use strict";

import DlMachine from './src/machine';

DlMachine.install = function(Vue) {
	Vue.component(DlMachine.name, DlMachine);
};

export default DlMachine;
