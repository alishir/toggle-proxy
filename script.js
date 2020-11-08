let proxy_active = false;

function openPage() {
	let proxy_settings = {};
	if (proxy_active) {
		proxy_settings = {
			proxyType: "none",
		};
	} else {
		proxy_settings = {
			proxyType: "manual",
			socks: "127.0.0.1:9050",
			socksVersion: 5,
		};
	}

	try {
		browser.proxy.settings.set({value: proxy_settings});
		proxy_active = !proxy_active;
	} catch(err) {
		console.log(err);
	}

	if (proxy_active) {
		browser.browserAction.setIcon({path: "icons/enable.svg"});
	} else {
		browser.browserAction.setIcon({path: "icons/disable.svg"});
	}
}

browser.browserAction.onClicked.addListener(openPage);
