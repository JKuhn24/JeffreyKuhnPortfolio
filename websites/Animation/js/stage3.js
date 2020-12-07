class stage3 extends Phaser.Scene {
    constructor() {
        super({key:"stage3"});
    }
    /* Create game */
    create() {
        /* Add text */
        this.text = this.add.text(400, 300, "Welcome to Stage 3!", {font: "30px Impact"});

        /* Move text after 2 seconds and then move back*/
        var tween = this.tweens.add({
            targets: this.text,
            x: 0,
            y: 0,
            duration: 3000,
            //ease: "elastic",
            easeParams: [1.5, 0.5],
            dely: 2000,
            onComplete: function(src, tgt) {
                tgt[0].x = 400;
                tgt[0].y = 300;
            },
        }, this);

        /* Change stage */
        this.input.keyboard.on('keyup', function(e) {
        if(e.key == "1") {
            this.scene.start("stage1");
        }
        if(e.key == "2") {
            this.scene.start("stage2");
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