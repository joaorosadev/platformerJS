import Stars from "../Stars.js";

export default class SecondScene extends Phaser.Scene {
    constructor(key) {
      super(key);
    }

    preload() {
        this.load.image("bg2","black_bg.jpeg");
        this.load.image("tiles","tiles_spritesheet.png");
        this.load.tilemapTiledJSON("map2", "second.json");
        this.load.spritesheet("mainguy", "mainguy.png", {
          frameHeight: 130,
          frameWidth: 120,
        });
        this.load.spritesheet("star", "star.png", {
          frameWidth: 300,
          frameHeight: 300,
        });
        this.load.spritesheet("portal","portal.png",{
          frameHeight: 256/8,
          frameWidth: 256/8,
        });
        //AUDIO
        this.load.audio("jump", "jump.mp3");
        this.load.audio("song", "song.mp3");
      }

      create() {
        this.bg2= this.add.image(235,2150,"bg2");
        this.bg2.setScale(100, 100);
        this.map = this.make.tilemap({ key: "map2" });
  
        this.jumpS = this.sound.add("jump");
        this.jumpS.setVolume(0.05);
        this.song = this.sound.add("song",true);
        this.song.play();
        this.song.setVolume(0.15);
  
        this.stars = new Stars(this.physics.world,this,[]);
        //this.portal = this.physics.add.sprite(350,1400,"portal");
        this.portal = this.physics.add.sprite(6800,2000,"portal");
        this.portal.setFrame(20);
        this.portal.setScale(2);
        this.portal.setGravityY(-300);
        this.portal.setSize(22,34, true);
        this.portal.setOffset(5,0);
        this.portal2 = this.physics.add.sprite(350,1250,"portal");
        this.portal2.setFrame(20);
        this.portal2.setScale(2);
        this.portal2.setGravityY(-300);
        this.portal2.setSize(22,34, true);
        this.portal2.setOffset(5,0);
        // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in
        // Phaser's cache (i.e. the name you used in preload)
        const tileset = this.map.addTilesetImage("tiles_spritesheet", "tiles");
    
        // Parameters: layer name (or index) from Tiled, tileset, x, y
        //layer index = 3
        //this.map.createStaticLayer("Tile Layer 1", tileset, 0, 0);
        const front = this.map.createStaticLayer("Tile Layer 1", tileset, 0, 0);
        //const kill = this.map.createStaticLayer("kill", tileset, 0, 0);
        
        this.mainguy= this.physics.add.sprite(350, 1250, "mainguy", 1);
        this.mainguy.setScale(0.5,0.5);
        this.mainguy.setSize(90,120, true);
        this.mainguy.setOffset(12,12);
        this.mainguy.canJumpAgain = false;
      
        //get the scene camera
        const camera = this.cameras.main;
        //make camera follow mainguy
        camera.startFollow(this.mainguy);
        //camera is not allowed to go out bounds
        camera.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
    
        this.cursors = this.input.keyboard.createCursorKeys();
        
        //set tiles from front tilemap that have collides property true as collidable
        front.setCollisionByProperty({"collides":true},true);
        //set collision between collidable tiles from front and mainguy
        this.physics.add.collider(this.mainguy,front);
        this.physics.add.overlap(
          this.mainguy,
          this.portal, 
          this.colisionHandler2,
          () => {
            this.song.stop();
            this.scene.stop();
            this.scene.start('ThirdScene');
          },
          null,
          this
        );
        this.enemiesCollider=this.physics.add.overlap(
          this.mainguy,
          this.stars,
          this.colisionHandler,
          () => {
              this.mainguy.canJumpAgain = true;
          },
          null,
          this
        );  

        this.timer1 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [450, 1500],
            callbackScope: this,
            repeat: -1
          }); 
          this.timer2 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [500,1420],
            callbackScope: this,
            repeat: -1
          });  
          this.timer3 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [1600,1650],
            callbackScope: this,
            repeat: -1
          });
          this.timer4 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [2400,1700],
            callbackScope: this,
            repeat: -1
          });
          this.timer5 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [2400,1500],
            callbackScope: this,
            repeat: -1
          });
          this.timer6 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [2400,1300],
            callbackScope: this,
            repeat: -1
          });
          this.timer7 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [2500,1300],
            callbackScope: this,
            repeat: -1
          });
          this.timer9 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [3300,1100],
            callbackScope: this,
            repeat: -1
          });
          this.timer10 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [3300,900],
            callbackScope: this,
            repeat: -1
          });
          //Down
          this.timer11 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [1500,2400],
            callbackScope: this,
            repeat: -1
          });
          this.timer12 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [1800,2300],
            callbackScope: this,
            repeat: -1
          });
          this.timer13 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [2100,2200],
            callbackScope: this,
            repeat: -1
          });
          this.timer19 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [2250,2000],
            callbackScope: this,
            repeat: -1
          });
          //"WATER"
          this.timer14 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [3600,2600],
            callbackScope: this,
            repeat: -1
          });
          this.timer15 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [3650,2400],
            callbackScope: this,
            repeat: -1
          });
          this.timer16 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [3700,2200],
            callbackScope: this,
            repeat: -1
          });
          this.timer17 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [3400,2000],
            callbackScope: this,
            repeat: -1
          });
          this.timer18 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [4400,2100],
            callbackScope: this,
            repeat: -1
          });
          //LAVA
          this.timer20 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [5800,2700],
            callbackScope: this,
            repeat: -1
          });
          this.timer21 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [6000,2500],
            callbackScope: this,
            repeat: -1
          });
          this.timer22 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [6200,2300],
            callbackScope: this,
            repeat: -1
          });
          this.timer23 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [6300,2100],
            callbackScope: this,
            repeat: -1
          });

        
        this.anims.create({
          key: 'left',
          frames: this.anims.generateFrameNumbers('mainguy', { start: 50 , end: 52 }),
          frameRate: 10,
          repeat: 0
        });
        this.anims.create({
          key: 'right',
          frames: this.anims.generateFrameNumbers('mainguy', { start: 70, end: 72 }),
          frameRate: 10,
          repeat: 0
        });
        this.anims.create({
          key: 'turn',
          frames: this.anims.generateFrameNumbers('mainguy', { start: 0, end: 0 }),
          frameRate: 10,
          repeat: 0
        });
        this.anims.create({
          key: 'turn_left',
          frames: this.anims.generateFrameNumbers('mainguy', { start: 12, end: 12 }),
          frameRate: 10,
          repeat: 0
        });
        this.anims.create({
          key: 'turn_right',
          frames: this.anims.generateFrameNumbers('mainguy', { start: 12, end: 12}),
          frameRate: 10,
          repeat: 0
        });
        this.anims.create({
          key: 'portalAnims',
          frames: this.anims.generateFrameNumbers('portal', { start: 0, end: 41 }),
          frameRate: 15,
          repeat: -1
        });

        this.R = this.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.R
          );
        
          this.portal.anims.play('portalAnims',true);
          this.portal2.anims.play('portalAnims',true);
      }

      colisionHandler(mainguy,star){
        star.destroy();
    }

      update() {
        if(this.mainguy.body.blocked.none && this.mainguy.body.velocity.x > 0){
          this.mainguy.anims.play('turn_righ',true);
        } else if(this.mainguy.body.blocked.none && this.mainguy.body.velocity.x < 0){
          this.mainguy.anims.play('turn_left',true);
        } else if(this.mainguy.body.blocked.none){
          this.mainguy.anims.play('turn',true);
        }
          
        if(this.cursors.up.isDown && this.cursors.left.isDown && this.mainguy.body.blocked.down){
            this.mainguy.setVelocityX(-300);
            this.mainguy.setVelocityY(-300);
            this.mainguy.anims.play('turn',true);
            this.jumpS.play();
        }else if(this.cursors.up.isDown && this.cursors.right.isDown && this.mainguy.body.blocked.down){
            this.mainguy.setVelocityX(300);
            this.mainguy.setVelocityY(-300);
            this.mainguy.anims.play('turn',true);
            this.mainguy.setFrame(31);
            this.jumpS.play();
        }
        else if(this.cursors.up.isDown && this.cursors.left.isDown && this.mainguy.canJumpAgain){
            this.mainguy.setVelocityY(-300);
            this.mainguy.setVelocityX(-300);
            this.mainguy.anims.play('turn',true);
            this.jumpS.play();
            this.mainguy.canJumpAgain = false;
        }
        else if(this.cursors.up.isDown && this.cursors.right.isDown && this.mainguy.canJumpAgain){
            this.mainguy.setVelocityY(-300);
            this.mainguy.setVelocityX(300);
            this.mainguy.anims.play('turn',true);
            this.jumpS.play();
            this.mainguy.canJumpAgain = false;
        }
         else if(this.cursors.left.isDown){
            this.mainguy.setVelocityX(-300);
            this.mainguy.anims.play('left',true);
        } else if (this.cursors.right.isDown){
            this.mainguy.setVelocityX(300);
            this.mainguy.anims.play('right',true);
        } 
        else if(this.cursors.up.isDown && this.mainguy.body.blocked.down) {
            this.mainguy.setVelocityX(0);
            this.mainguy.setVelocityY(-300);
            this.mainguy.anims.play('turn',true);
            this.jumpS.play();
        } else if(this.cursors.up.isDown && this.mainguy.canJumpAgain){
            this.mainguy.setVelocityY(-300);
            this.mainguy.anims.play('turn',true);
            this.jumpS.play();
            this.mainguy.canJumpAgain = false;
        }
        else {
          this.mainguy.anims.play('turn',true);
            this.mainguy.setVelocityX(0);
        }
        if(this.mainguy.body.x < 0 || this.mainguy.body.y > 3000){
          this.song.stop();
          this.scene.restart();
        }
        if (Phaser.Input.Keyboard.JustDown(this.R)) {
         this.song.stop();
         this.scene.restart();
        }
    }
}