class stage4 extends Phaser.Scene {
    constructor() {
        super({key:"stage4"});
    }
    /* Create game */
    create() {
        /* Add text */
        this.text = this.add.text(0, 300, "Click To Move Text", {font: "30px Impact"});
        /* Move text on Click */
        this.input.on('pointerdown', function(event) {
            this.text.x = event.x - 120;
            this.text.y = event.y - 10;
        }, this)

        /* Change stage */
        this.input.keyboard.on('keyup', function(e) {
        if(e.key == "1") {
            this.scene.start("stage1");
        }
        if(e.key == "2") {
            this.scene.start("stage2");
        }
        if(e.key == "3") {
            this.scene.start("stage3");
        }
        if(e.key == "5") {
            this.scene.start("stage5");
        }
    }, this);
    }
}