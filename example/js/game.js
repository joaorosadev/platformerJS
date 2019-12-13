import config from './config.js';
import FirstScene from './scenes/FirstScene.js';
import StartScene from './scenes/StartScene.js';
import SecondScene from './scenes/SecondScene.js';
import ThirdScene from './scenes/ThirdScene.js';
import EndScene from './scenes/EndScene.js';

class Game extends Phaser.Game{
    constructor(){
        super(config);
        this.scene.add('StartScene',StartScene);
        this.scene.add('FirstScene',FirstScene);
        this.scene.add('SecondScene',SecondScene);
        this.scene.add('ThirdScene',ThirdScene);
        this.scene.add('EndScene',EndScene);
        this.scene.start('StartScene');
    }
}
new Game();