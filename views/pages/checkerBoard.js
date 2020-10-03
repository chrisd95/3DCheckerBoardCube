let cam;
let delta = 0.008;

var angleX = 0;
var angleY = 0;
var angleZ = 0;
var sizeBoard = 8;
var cubeSize = 25;
var explodeX = 0;
var explodeY = 0;
var explodeZ = 0;
var renderCycle = -0.05;
var moveX=0;
var moveY=0;
var moveZ=0;

function setup() {
  createCanvas(1000, 700,WEBGL);
  cam = createCamera();
  // set initial pan angle
    cam.pan(-0.64);
}

function explode(){
  explodeX += 0.1;
  explodeY += 0.1;
  explodeZ += 0.1;
};
var offSet = 5+cubeSize*2;

function draw() {

  normalMaterial();
  background(220);

  cam.pan(delta);


  if (frameCount % 120 === 0) {
  delta *= -0.8;
  }

  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.001);

  //setTimeout(explode(),10000);

  pointLight(red,green,blue,mouseX,mouseY,100);

  //rotateX(angle);
  push();
  //translate(0,-displayHeight/6,0);
  //rotateY(angle);

  //rotateZ(angle);
  //translate(-displayHeight/6,0,0);
  //translate(displayWidth*0.01, -displayHeight*0.1, + displayHeight*0.2);
  //rotateX(angleX);
  //rotateY(angleY);
  //rotateZ(angleX);

  //rotateZ(angle);

  //translate(displayHeight/6,0,0);
  for(i=0;i<sizeBoard;i++){
    for(j=0;j<sizeBoard;j++){
      for(k=0;k<sizeBoard;k++){
      push();

      /*
      if(renderCycle <= 0){
        moveX = 0;
        moveY = 0;
        moveZ = 0;
      }else {
        if(i < sizeBoard/2){
          moveX = -explodeX *  renderCycle;
        }else {
          moveX = explodeX *  renderCycle;
        if(j < sizeBoard/2){
          moveY = -explodeY *  renderCycle;
        }else {
          moveY = explodeY *  renderCycle;
        }
        if(k < sizeBoard/2){
          moveZ = -explodeY *  renderCycle;

        }else {
          moveZ = explodeY *  renderCycle;
        }
    }
  }*/

      translate(moveX/i + i*offSet/2,moveY/j + j * offSet/2, moveZ/k + k*offSet/2);
        if((i+j+k)%2==0){
          box(cubeSize);
        }
      pop();
      }
    }
  }

  angleX += 0.0005;
  angleY += 0.005;
  angleZ += 0.0025;
  renderCycle += 0.005;
  pop();

}
