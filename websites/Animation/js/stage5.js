class stage5 extends Phaser.Scene {
    constructor() {
        super({key:"stage5"});
    }

    preload() {
        this.load.audio('cheer', ['audio/cheering.mp3']);
    }

    create() {
        this.text = this.add.text(280, 280, "Welcome to Stage 5!", {font: "30px Impact"});

        this.soundFX = this.sound.add('cheer', {loop: "true"});
        this.soundFX.play();

        this.input.on("pointerdown", function(e) {
            this.soundFX.loop = !this.soundFX.loop;
            if(this.soundFX.loop) {this.soundFX.play();}
        }, this);

        this.input.keyboard.on("keydown_P", function(e) {
            if(this.soundFX.isPlaying) {
                this.soundFX.pause();
            } else {
                this.soundFX.resume();
            }
        }, this);

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
        if(e.key == "4") {
            this.scene.start("stage4");
        }
    },this);

    }
}