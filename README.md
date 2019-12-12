# Rescue Vote Script

## Install Dependencies

1. `npm install`

## Deploy

1. `npm run build`

It's going to create a `dist` folder, where you can get the files and publish it.

## Development

https://www.ifaw.org/resources/rescuevote

```
var cardsOptions=
{
	title: '<strong>rescue vote</strong> placeholder title and introduction. max char. 64',
	paragraph: 'This is an optional Description',
	cards: [
	{
		title: 'Card One',
		image: 'https://apps.4sitestudios.com/fernando/ifaw/jag-desktop.jpg',
		cta_label: 'donate now',
		cta_link: 'https://secure.ifaw.org/united-states/help-animals-this-holiday-season',
	},
	{
		title: 'Card Two',
		image: 'https://apps.4sitestudios.com/fernando/ifaw/jag-desktop.jpg',
		cta_label: 'donate now',
		cta_link: 'https://secure.ifaw.org/united-states/help-animals-this-holiday-season',
	},
	],
	debug: true,
};
var script = document.createElement('script');
script.src = "https://localhost/ifaw/rescue-vote/dist/main.js";
document.getElementsByTagName('head')[0].appendChild(script);
```

Chrome Extension: https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld?hl=en
