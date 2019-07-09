/**
 * @desc src入口js
 * @date 2019/6/17
 */
"use strict";

import Vue from 'vue'
import Button from './button/index.js';
import Condition from './condition/index.js';
import Icon from './icon/index.js';
import Machine from './machine/index.js';
import Share from './share/index.js';

const components = [Button,Condition,Icon,Machine,Share];
let DocumentUI = {};

const install = function() {
	components.forEach(component => {
		Vue.component(component.name, component)
		DocumentUI[component.type] = component;
	})
};

install();

export default DocumentUI;

