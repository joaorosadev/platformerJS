import './phaser.js';

export default {
    type: Phaser.AUTO,
    width: 1400,
    height: 700,
    //support to gamepad
    input:{
      gamepad:true
    },
    physics: {
      default: "arcade",      
      arcade: {
        gravity:{y:300},
        //debug: true
      }
    },    
  };