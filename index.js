// Nexus Mods domain for the game. e.g. nexusmods.com/darkestdungeon2
const GAME_ID = 'darkestdungeon2';

//Steam Application ID, you can get this from https://steamdb.info/apps/
const STEAMAPP_ID = '1940340';

//Import some assets from Vortex we'll need.
const path = require('path');
const { fs, log, util } = require('vortex-api');

function main(context) {
	//This is the main function Vortex will run when detecting the game extension. 
	
	return true;
}

module.exports = {
    default: main,
};
