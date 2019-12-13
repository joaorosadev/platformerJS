import Stars from "../Stars.js";

export default class ThirdScene extends Phaser.Scene {
    constructor(key) {
      super(key);
    }

    preload() {
        this.load.image("bg3","cave.png");
        this.load.image("tiles","tiles_spritesheet.png");
        this.load.tilemapTiledJSON("map3", "third.json");
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
        this.bg3= this.add.image(0,0,"bg3").setOrigin(0,0);
        this.bg3.setScale(7.5, 6.5);
        this.map = this.make.tilemap({ key: "map3" });
  
        this.jumpS = this.sound.add("jump");
        this.jumpS.setVolume(0.05);
        this.song = this.sound.add("song",true);
        this.song.play();
        this.song.setVolume(0.15);
  
        this.stars = new Stars(this.physics.world,this,[]);
        this.portal = this.physics.add.sprite(970 ,450,"portal");
        //this.portal = this.physics.add.sprite(750 ,700,"portal");
        this.portal.setFrame(20);
        this.portal.setScale(2);
        this.portal.setGravityY(-300);
        this.portal.setSize(22,34, true);
        this.portal.setOffset(5,0);
        this.portal2 = this.physics.add.sprite(750,550,"portal");
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
        
        this.mainguy= this.physics.add.sprite(750, 550, "mainguy", 1);
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
            this.scene.start('EndScene');
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

        //DOWN
        this.timer1 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [2350, 2600],
            callbackScope: this,
            repeat: -1
        }); 
        this.timer2 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [4600, 3200],
            callbackScope: this,
            repeat: -1
        });
        this.timer3 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [4890, 3200],
            callbackScope: this,
            repeat: -1
        });
        this.timer4 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [5200, 3000],
            callbackScope: this,
            repeat: -1
        });
        this.timer5 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [5400, 2800],
            callbackScope: this,
            repeat: -1
        });
        this.timer6 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [5400, 2650],
            callbackScope: this,
            repeat: -1
        }); 
        this.timer7 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [6000, 2450],
            callbackScope: this,
            repeat: -1
        });  
        this.timer9 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [6000, 2250],
            callbackScope: this,
            repeat: -1
        });  
        this.timer8 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [5300, 2300],
            callbackScope: this,
            repeat: -1
        }); 
        //UP LEFT
        this.timer10 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [3100, 2300],
            callbackScope: this,
            repeat: -1
        });
        this.timer11 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [3200, 2100],
            callbackScope: this,
            repeat: -1
        }); 
        this.timer12 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [3100, 1900],
            callbackScope: this,
            repeat: -1
        }); 
        this.timer13 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [3300, 1700],
            callbackScope: this,
            repeat: -1
        });   
        //up middle
        this.timer14 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [3860, 1480],
            callbackScope: this,
            repeat: -1
        }); 
        this.timer15 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [4300, 1120],
            callbackScope: this,
            repeat: -1
        }); 
        this.timer16 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [4100, 920],
            callbackScope: this,
            repeat: -1
        });
        this.timer17 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [4740, 700],
            callbackScope: this,
            repeat: -1
        });
        //right up
        this.timer18 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [6840, 1300],
            callbackScope: this,
            repeat: -1
        });
        this.timer19 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [6550, 1100],
            callbackScope: this,
            repeat: -1
        });
        this.timer20 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [6840, 900],
            callbackScope: this,
            repeat: -1
        });
        this.timer21 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [6650, 700],
            callbackScope: this,
            repeat: -1
        });
        this.timer22 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [6840, 500],
            callbackScope: this,
            repeat: -1
        });
        this.timer23 = this.time.addEvent({
            delay: 1000,
            callback: this.stars.addStar2,
            args: [6700, 270],
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
        if(this.mainguy.body.x < 0 || this.mainguy.body.y > 5000){
          this.song.stop();
          this.scene.restart();
        }
        if (Phaser.Input.Keyboard.JustDown(this.R)) {
         this.song.stop();
         this.scene.restart();
        }
    }
}