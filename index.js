// Nexus Mods domain for the game. e.g. nexusmods.com/darkestdungeon2
const GAME_ID = 'darkestdungeon2';

//Steam Application ID, you can get this from https://steamdb.info/apps/
const STEAMAPP_ID = '1940340';

//Import some assets from Vortex we'll need.
const path = require('path');
const { fs, log, util } = require('vortex-api');

function main(context) {
	//This is the main function Vortex will run when detecting the game extension. 
	context.registerGame({
        id: GAME_ID,
        name: 'Darkest Dungeon II',
        mergeMods: true,
        queryPath: findGame,
        supportedTools: [],
        queryModPath: () => '/streamingassets/excel',
        logo: 'gameart.jpg',
        executable: () => 'Darkest Dungeon II.exe',
        requiredFiles: [
          'C:\Program Files (x86)\Steam\steamapps\common\Darkest Dungeon® II\Darkest Dungeon II.exe',
          'UnityPlayer.dll',
        ],
        setup: prepareForModding,
        environment: {
          SteamAPPId: STEAMAPP_ID,
        },
        details: {
          steamAppId: STEAMAPP_ID,
        },
      });

	return true;
}

module.exports = {
    default: main,
};

function findGame() {
    return util.GameStoreHelper.findByAppId([STEAMAPP_ID])
        .then(game => game.gamePath);
  }
