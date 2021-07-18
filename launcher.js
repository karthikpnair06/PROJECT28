class Launcher{
    constructor(body1,point){
        var options = {
            bodyA: body1,
            pointB:point,
            stiffness:0.05,
            length:10
        }
        this.point=point;
        this.launcher= Constraint.create(options);
        World.add(world,this.launcher);
    }

    display(){
        if (this.launcher.bodyA){
            var point1= this.launcher.bodyA.position;
            var point2= this.point;
            push();
            stroke("black");
            line(point1.x,point1.y,point2.x,point2.y);
            pop();
        }
    }

    fly(){
        this.launcher.bodyA=null;
    }

    attach(){
        line(point1.x,point1.y,point2.x,point2.y);
    }
}