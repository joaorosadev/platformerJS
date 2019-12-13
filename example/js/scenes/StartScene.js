export default class StartScene extends Phaser.Scene {
    constructor(key) {
      super(key);
    }

    preload(){
        this.load.image("bbg","black_bg.jpeg");
        this.load.audio("music", "mistery.wav");
    }

    create(){
        this.bbg= this.add.image(235,2150,"bbg");

        this.music = this.sound.add("music",true);
        this.music.play();
        this.music.setVolume(0.15);

        this.add.text(90, 250, "YOU WAKE UP IN A MESTERIOUS PLACE", {
            font: "70px Cambria",
            fill: "#ffffff"
          });
          this.add.text(275, 350, "YOU MUST FIND A WAY OUT", {
            font: "70px Cambria",
            fill: "#ffffff"
          });

        this.spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.spaceBar.on('down',function(event){
            this.music.stop();
            this.scene.stop();
            this.scene.start('FirstScene');
        }.bind(this));
    }
}