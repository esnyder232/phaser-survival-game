import Phaser from 'phaser';
import GameManagerScene from './scenes/game-manager-scene.js'

export default class App {
	constructor() {
		this.game = {};
		this.config = {};

		this.config = {
			type: Phaser.AUTO,
			physics: {
				default: 'arcade',
				debug: true,
				arcade: {
					gravity: {
						y: 300
					}
				}
			}
		}		

		this.game = new Phaser.Game(this.config);
		this.game.scene.add('game-manager-scene', GameManagerScene, true);
	}	
}

//feels like a hacky way to start...oh well. Its simple atleast.
var app = new App();

