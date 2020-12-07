class stage2 extends Phaser.Scene {
    constructor() {
        super({key:"stage2"});
    }
    /* Preload Game */
    preload() {
        this.load.image('red', 'images/redbox.png');
    }
    /* Create Game */
    create() {
        /* Add text */
        this.text = this.add.text(400, 300, "Click to cause boxes to fall", {font: "30px Impact"});
        /* Add image */
        this.image = this.add.image(400, 300, 'red');
        /* Add red blocks to fall when clicked */
        this.input.on('pointerdown', function() {
            var dropImage = this.physics.add.image(this.image.x, this.image.y, "red");
            dropImage.setVelocity(Phaser.Math.RND.integerInRange(-200,200), -30);
        }, this);

        /* Change stage */
        this.input.keyboard.on('keyup', function(e) {
            if(e.key == "1") {
                this.scene.start("stage1");
            }
            if(e.key == "3") {
                this.scene.start("stage3");
            }
            if(e.key == "4") {
                this.scene.start("stage4");
            }
            if(e.key == "5") {
                this.scene.start("stage5");
            }
        }, this);
    }
}