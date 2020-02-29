// ==UserScript==
// @name         FocusOnContentForm
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://moneyforward.com/
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	document.getElementById('js-cf-manual-payment-entry-content').focus();
})();