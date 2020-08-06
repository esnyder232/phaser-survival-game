export default class MatterClickScene extends Phaser.Scene {
	constructor(config) {
		super(config);
	}

	init() {
		console.log('init on ' + this.scene.key + ' start');		
	}

	preload() {
		console.log('preload on ' + this.scene.key + ' start');
		this.load.image("crate", "assets/images/crate.png");

	}
	  
	create() {
		console.log('create on ' + this.scene.key + ' start');

		this.matter.world.setBounds(0, -200, 512, 512);

		this.input.on("pointerdown", (pointer) => {
			var bodiesUnderPointer = Phaser.Physics.Matter.Matter.Query.point(this.matter.world.localWorld.bodies, pointer);

			if(bodiesUnderPointer.length == 0)
			{
				var temp = this.matter.add.sprite(pointer.x, pointer.y, "crate");
				temp.setFixedRotation();
			}
			else
			{
				bodiesUnderPointer[0].gameObject.visible = false;
				this.matter.world.remove(bodiesUnderPointer[0]);
			}


		});
	}
	
	update(timeElapsed, dt) {
		
	}


}

