import Phaser from 'phaser';
import GameManagerScene from './scenes/game-manager-scene.js'
import MatterClickScene from './scenes/matter-click-scene.js'

export default class App {
	constructor() {
		this.game = {};

		this.config = {
			type: Phaser.AUTO,
			width: 512,
			height:512,
			backgroundColor: '#333333',
			parent: 'survival-game',
			scene: [],
			scale: {
				zoom:2
			},
			physics: {
				default: 'matter',				
				matter: {
					debug: true,
					gravity:{y:1}
				}
			}
		}

		this.game = new Phaser.Game(this.config);
		this.game.scene.add('game-manager-scene', GameManagerScene, true);
		//this.game.scene.add('matter-click-scene', MatterClickScene, true)
	}	
}

//feels like a hacky way to start...oh well. Its simple atleast.
var app = new App();

