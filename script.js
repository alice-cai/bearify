chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
	chrome.declarativeContent.onPageChanged.addRules([{
		conditions: [new chrome.declarativeContent.PageStateMatcher({
			pageUrl: {schemes: ['https', 'http', 'localhost', 'chrome', 'file']},
		})
		],
		actions: [new chrome.declarativeContent.ShowPageAction()]
	}]);
});

// pageAction is the button from the manifest!
chrome.pageAction.onClicked.addListener(function() {
	// this uses the "active tab" permission from the manifest
	// Chrome goes to active tab in active window
	chrome.tabs.query(
		{active: true, currentWindow: true},
		function(tabs) {
			chrome.tabs.executeScript(
				tabs[0].id, // active tab (isolated in previous step)
				{file: 'main.js'}
			);
		}
	)
});