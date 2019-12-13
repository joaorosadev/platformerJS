export default class Stars extends Phaser.Physics.Arcade.Group {
    constructor(world, scene, children) {
        super(world, scene);
        this.scene = scene;
        this.alive = true;
        this.x;
        this.y;
    }

    addStar(){
    this.x = 1300;
    this.y = 2150;

    var star=this.stars.create(this.x,this.y,"star");
    star.setVelocityX(0);
    star.setVelocityY(0);
    star.setFrame(0);
    star.setScale(0.1);
    star.setGravity(0,-300);
    star.checkWorldBounds = true;
    star.outOfBoundsKill = true;
    }
    addStar2(x,y){
    var star=this.stars.create(x,y,"star");
    star.setVelocityX(0);
    star.setVelocityY(0);
    star.setFrame(0);
    star.setScale(0.1);
    star.setGravity(0,-300);
    star.checkWorldBounds = true;
    star.outOfBoundsKill = true;
    }
}