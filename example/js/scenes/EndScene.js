export default class EndScene extends Phaser.Scene {
    constructor(key) {
      super(key);
    }

    preload(){
        this.load.image("sleep","sleepy.png");
        this.load.audio("music", "mistery.wav");
    }

    create(){
        this.bg4= this.add.image(0,0,"sleep").setOrigin(0,0);
        this.bg4.scaleX = 1.5;
        this.bg4.scaleY = 1.5;

        this.music = this.sound.add("music",true);
        this.music.play();
        this.music.setVolume(0.15);

          this.add.text(500, 40, "IT WAS ALL JUST A DREAM", {
            font: "70px Cambria",
            fill: "#ffffff"
          });

        this.R = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        this.R.on('down',function(event){
            this.music.stop();
            this.scene.stop();
            this.scene.start('StartScene');
        }.bind(this));
    }
}