import Player from '../player.js'

export default class MainScene extends Phaser.Scene {
	constructor(config) {
		super(config);
	}

	init() {
		console.log('init on ' + this.scene.key + ' start');

	}

	preload() {
		console.log('preload on ' + this.scene.key + ' start');
		Player.preload(this);
		this.load.image('myTiles', 'assets/images/RPG Nature Tileset.png');
		this.load.tilemapTiledJSON('myMap', 'assets/images/map.json');
	}
	  
	create() {
		console.log('create on ' + this.scene.key + ' start');
		const map = this.make.tilemap({
			key: 'myMap'
		});

		const tileset = map.addTilesetImage('RPG Nature Tileset', 'myTiles', 32, 32, 0, 0);
		const layer1 = map.createStaticLayer('Tile Layer 1', tileset, 0, 0);
		const layer2 = map.createStaticLayer('Tile Layer 2', tileset, 0, 0);
		layer1.setCollisionByProperty({collides: true});
		this.matter.world.convertTilemapLayer(layer1);

		var playerData = {
			scene: this,
			x: 100,
			y: 100,
			texture: 'female',
			frame: 'townsfolk_f_idle_1'
		};

		this.player = new Player(playerData);

		this.player.inputKeys = this.input.keyboard.addKeys({
			up: Phaser.Input.Keyboard.KeyCodes.W,
			down: Phaser.Input.Keyboard.KeyCodes.S,
			left: Phaser.Input.Keyboard.KeyCodes.A,
			right: Phaser.Input.Keyboard.KeyCodes.D,
		})
	}
	
	update(timeElapsed, dt) {
		this.player.update();
	}


}

