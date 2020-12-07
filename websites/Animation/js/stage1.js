class stage1 extends Phaser.Scene {
    constructor() {
        super({key:"stage1"});
    }
    /* Preload image for use */
    preload() {
        this.load.image('apple', 'images/apple.png');
    }
    /* Create game */
    create() {
        /* Add text */
        this.text = this.add.text(400, 300, "Use WASD to move", {font: "30px Impact"});
        this.image = this.add.image(400, 300, 'apple');

        /*this.input.keyboard.on('keyup_D', function(event) {
            this.image.x += 10;
        }, this);*/


        /* Set buttons to move apple */
        this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        /* Change stage */
        this.input.keyboard.on('keyup', function(e) {
            if(e.key == "2") {
                this.scene.start("stage2");
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
    /* Check for movement button */
    update(delta) {
        if (this.key_A.isDown) {
            this.image.x -= 2;
        }
        if (this.key_W.isDown) {
            this.image.y -= 2;
        }
        if (this.key_S.isDown) {
            this.image.y += 2;
        }
        if (this.key_D.isDown) {
            this.image.x += 2;
        }
    }
}