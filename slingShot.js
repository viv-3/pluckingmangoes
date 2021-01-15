class slingShot{
    constructor(bodyA, pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.03,
            length: 3
        }
        this.pointB = pointB;
        this.slingShot = Constraint.create(options);
        World.add(world, this.slingShot);
    }
    attach(body){
		this.slingShot.bodyA=body;
	}
    
    fly(){
        this.slingShot.bodyA = null;
    }
    display(){
        if(this.slingShot.bodyA){
        var pointA = this.slingShot.bodyA.position;
        var pointB = this.pointB;
        
        }
    }
}