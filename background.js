const handleClick = () => browser.tabs.create({ url: 'https://frontendlane.github.io/page-source' });
browser.browserAction.onClicked.addListener(handleClick);