import Phaser from 'phaser';
import GameManagerScene from './scenes/game-manager-scene.js'
import PhaserMatterCollisionPlugin from 'phaser-matter-collision-plugin'

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
					gravity:{y:0}
				}
			},
			plugin: {
				scene:[
					{
						plugin: PhaserMatterCollisionPlugin,
						key: 'matterCollision',
						mapping: 'matterCollision'
					}
				]
			}
		}

		this.game = new Phaser.Game(this.config);
		this.game.scene.add('game-manager-scene', GameManagerScene, true);
	}	
}

//feels like a hacky way to start...oh well. Its simple atleast.
var app = new App();

