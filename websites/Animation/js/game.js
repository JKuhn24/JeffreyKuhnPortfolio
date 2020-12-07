/* Set up animations */
var config = {
    type:Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y : 200}
        }
    },
    scene: [ stage1, stage2, stage3, stage4 ]
};

/* Play game */
var game = new Phaser.Game(config);