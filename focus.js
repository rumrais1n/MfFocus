// ==UserScript==
// @name         FocusOnContentForm
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  MoneyForwardのページで最初に「内容」にフォーカスが合うようにしたスクリプト
// @author       rumrais1n
// @match        https://moneyforward.com/
// @grant        none
// ==/UserScript==

// 実行タイミング: document-end

(function() {
	'use strict';

	document.getElementById('js-cf-manual-payment-entry-content').focus();
})();