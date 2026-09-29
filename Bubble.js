class Bubble{
  constructor(x,y,r){
    this.x =x;
    this.y =y;
    this.r =r;
  }
  show(){
    stroke(135,15,135);
    strokeWeight(4);
    noFill();
    circle(this.x,this.y,this.r);
  }
  move(){
    this.x = this.x + random(-5,5);
    this.y = this.y + random(-5,5);
  }
}