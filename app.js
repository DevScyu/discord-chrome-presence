const express = require('express');
const app = express();
const client = require('discord-rich-presence')('436639706478805002');

app.use(express.json());

app.post("/", (request, response) => {
	let body = request.body;
    	let presence = {
		state: body.state.substring(0, 128).cut("http://").cut("www.").cut("https://"),
		details: body.details.substring(0, 128).cut("http://").cut("www.").cut("https://"),
		largeImageKey: body.details.indexOf("youtube") !== -1 ? 'youtube' : body.details.indexOf("google") !== -1 ? 'google' : body.details.indexOf("otaku") !== -1 ? 'anime' : body.state.indexOf("anime") !== -1 ? 'anime' : body.details.indexOf("anime") !== -1 ? 'anime' : body.details.indexOf("github") !== -1 ? 'github' : body.details.indexOf("reddit") !== -1 ? 'reddit' : body.details.indexOf("discord") !== -1 ? 'discord' : 'chrome',
		largeImageText: body.state.substring(0, 128).cut("http://").cut("www.").cut("https://"),
		smallImageKey: 'char',
		smallImageText: body.smallText.substring(0, 128),
		// startTimestamp: Date.now(),
		instance: true
    	}

	client.updatePresence(presence);
	response.sendStatus(200);
});

app.listen(3000, () => console.log('Discord-Chrome-Presence is ready!'));


String.prototype.cut = function(oldStr) {
  return this.split(oldStr).join('');
}
