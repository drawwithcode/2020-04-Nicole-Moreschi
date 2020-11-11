
// --------------------------------------------------------------------
//
// IMPORTANT!: Open it with Safari (since with Chrome it works strange)
//
// --------------------------------------------------------------------


let sfumatura;

var fillColor = '#d5d0d3';
var testo = 'Rearrange the color tiles in the right chromatic scale';

function preload(){
  sfumatura = loadImage('./assets/images/sfumatura.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);


  //position control
  info = createElement('p', 'Tiles position sliders ↓');
  info.position(windowWidth / 18 * 14, windowHeight / 2 - 265)

  sliderA = createSlider(windowWidth / 18 * 3, windowWidth / 18 * 11, windowWidth / 18 * random(3, 11), windowWidth / 18);
  sliderA.position(windowWidth / 18 * 14, windowHeight / 2 - 200);
  t1 = createElement('p', 'A');
  t1.position(windowWidth / 18 * 14 - windowWidth / 72, windowHeight / 2 - 215)

  sliderB = createSlider(windowWidth / 18 * 3, windowWidth / 18 * 11, windowWidth / 18 * random(3, 11), windowWidth / 18);
  sliderB.position(windowWidth / 18 * 14, windowHeight / 2 - 150);
  t2 = createElement('p', 'B');
  t2.position(windowWidth / 18 * 14 - windowWidth / 72, windowHeight / 2 - 165)

  sliderC = createSlider(windowWidth / 18 * 3, windowWidth / 18 * 11, windowWidth / 18 * random(3, 11), windowWidth / 18);
  sliderC.position(windowWidth / 18 * 14, windowHeight / 2 - 100);
  t3 = createElement('p', 'C');
  t3.position(windowWidth / 18 * 14 - windowWidth / 72, windowHeight / 2 - 115)

  sliderD = createSlider(windowWidth / 18 * 3, windowWidth / 18 * 11, windowWidth / 18 * random(3, 11), windowWidth / 18);
  sliderD.position(windowWidth / 18 * 14, windowHeight / 2 - 50);
  t4 = createElement('p', 'D');
  t4.position(windowWidth / 18 * 14 - windowWidth / 72, windowHeight / 2 - 65)

  sliderE = createSlider(windowWidth / 18 * 3, windowWidth / 18 * 11, windowWidth / 18 * random(3, 11), windowWidth / 18);
  sliderE.position(windowWidth / 18 * 14, windowHeight / 2);
  t5 = createElement('p', 'E');
  t5.position(windowWidth / 18 * 14 - windowWidth / 72, windowHeight / 2 - 15)

  sliderF = createSlider(windowWidth / 18 * 3, windowWidth / 18 * 11, windowWidth / 18 * random(3, 11), windowWidth / 18);
  sliderF.position(windowWidth / 18 * 14, windowHeight / 2 + 50);
  t6 = createElement('p', 'F');
  t6.position(windowWidth / 18 * 14 - windowWidth / 72, windowHeight / 2 + 35)

  sliderG = createSlider(windowWidth / 18 * 3, windowWidth / 18 * 11, windowWidth / 18 * random(3, 11), windowWidth / 18);
  sliderG.position(windowWidth / 18 * 14, windowHeight / 2 + 100);
  t7 = createElement('p', 'G');
  t7.position(windowWidth / 18 * 14 - windowWidth / 72, windowHeight / 2 + 85)

  sliderH = createSlider(windowWidth / 18 * 3, windowWidth / 18 * 11, windowWidth / 18 * random(3, 11), windowWidth / 18);
  sliderH.position(windowWidth / 18 * 14, windowHeight / 2 + 150);
  t8 = createElement('p', 'H');
  t8.position(windowWidth / 18 * 14 - windowWidth / 72, windowHeight / 2 + 135)

  sliderI = createSlider(windowWidth / 18 * 3, windowWidth / 18 * 11, windowWidth / 18 * random(3, 11), windowWidth / 18);
  sliderI.position(windowWidth / 18 * 14, windowHeight / 2 + 200);
  t9 = createElement('p', 'I');
  t9.position(windowWidth / 18 * 14 - windowWidth / 72, windowHeight / 2 + 185)


  //bottone
  bottone = createButton("Check this");
  bottone.mouseClicked(score);
}

function draw() {
  background(fillColor);
  push();
  textAlign(CENTER);
  textSize(20);
  fill('#877b85');
  text(testo, windowWidth / 18 * 7 + windowWidth / 36, windowHeight / 10 * 4);
  pop();
  push();
  imageMode(CENTER);
  image(sfumatura, windowWidth / 18 * 7 + windowWidth / 36, windowHeight / 10 * 4.3, windowWidth/18*2);
  pop();

  //tassello9
  push();
  fill('#a08849');
  rect(sliderI.value(), height / 2, windowWidth / 18, windowWidth / 18);
  textAlign(CENTER);
  textSize(14);
  fill(255,255,255,100);
  text("I", sliderI.value() + windowWidth / 36, height / 2 + windowWidth / 30);
  pop();

  //tassello3
  push();
  fill('#ad7261');
  rect(sliderH.value(), height / 2, windowWidth / 18, windowWidth / 18);
  textAlign(CENTER);
  textSize(14);
  fill(255,255,255,100);
  text("H", sliderH.value() + windowWidth / 36, height / 2 + windowWidth / 30);
  pop();

  //tassello5
  push();
  fill('#a77457');
  rect(sliderG.value(), height / 2, windowWidth / 18, windowWidth / 18);
  textAlign(CENTER);
  textSize(14);
  fill(255,255,255,100);
  text("G", sliderG.value() + windowWidth / 36, height / 2 + windowWidth / 30);
  pop();

  //tassello6
  push();
  fill('#a67951');
  rect(sliderF.value(), height / 2, windowWidth / 18, windowWidth / 18);
  textAlign(CENTER);
  textSize(14);
  fill(255,255,255,100);
  text("F", sliderF.value() + windowWidth / 36, height / 2 + windowWidth / 30);
  pop();

  //tassello7
  push();
  fill('#a77d4e');
  rect(sliderE.value(), height / 2, windowWidth / 18, windowWidth / 18);
  textAlign(CENTER);
  textSize(14);
  fill(255,255,255,100);
  text("E", sliderE.value() + windowWidth / 36, height / 2 + windowWidth / 30);
  pop();

  //tassello4
  push();
  fill('#a7745c');
  rect(sliderD.value(), height / 2, windowWidth / 18, windowWidth / 18);
  textAlign(CENTER);
  textSize(14);
  fill(255,255,255,100);
  text("D", sliderD.value() + windowWidth / 36, height / 2 + windowWidth / 30);
  pop();

  //tassello1
  push();
  fill('#b07670');
  rect(sliderC.value(), height / 2, windowWidth / 18, windowWidth / 18);
  textAlign(CENTER);
  textSize(14);
  fill(255,255,255,100);
  text("C", sliderC.value() + windowWidth / 36, height / 2 + windowWidth / 30);
  pop();

  //tassello2
  push();
  fill('#af7467');
  rect(sliderB.value(), height / 2, windowWidth / 18, windowWidth / 18);
  textAlign(CENTER);
  textSize(14);
  fill(255,255,255,100);
  text("B", sliderB.value() + windowWidth / 36, height / 2 + windowWidth / 30);
  pop();

  //tassello8
  push();
  fill('#a58048');
  rect(sliderA.value(), height / 2, windowWidth / 18, windowWidth / 18);
  textAlign(CENTER);
  textSize(14);
  fill(255,255,255,100);
  text("A", sliderA.value() + windowWidth / 36, height / 2 + windowWidth / 30);
  pop();


  // bottone
  bottone.position(windowWidth / 18 * 7, windowHeight / 10 * 7);

  select('body').style('font-size', '14px');
  select('body').style('font-family', 'Helvetica');
  select('body').style('color', '#877b85');
}

function score() {
  clear();
  sliderC.hide()
  sliderB.hide()
  sliderH.hide()
  sliderD.hide()
  sliderG.hide()
  sliderF.hide()
  sliderE.hide()
  sliderA.hide()
  sliderI.hide()
  t1.hide()
  t2.hide()
  t3.hide()
  t4.hide()
  t5.hide()
  t6.hide()
  t7.hide()
  t8.hide()
  t9.hide()
  bottone.hide();
  info.hide();

  console.log(sliderC.value())
  console.log(sliderB.value())

  if (
    sliderC.value() < sliderB.value() &&
    sliderB.value() < sliderH.value() &&
    sliderH.value() < sliderD.value() &&
    sliderD.value() < sliderG.value() &&
    sliderG.value() < sliderF.value() &&
    sliderF.value() < sliderE.value() &&
    sliderE.value() < sliderA.value() &&
    sliderA.value() < sliderI.value()
  ) {
    fillColor = '#9daf8b';
    testo = 'Congratulations! The order is correct.'
  } else {
    fillColor = '#5e3c3c';
    testo = 'Not quite... The order is incorrect.'
  }

  bottone2 = createButton('Try again!');
  bottone2.mouseClicked(re);
  bottone2.position(windowWidth / 18 * 7, windowHeight / 10 * 7);
}

function re() {
  location.reload();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  info.position(windowWidth / 18 * 14, windowHeight / 2 - 265)
  sliderC.position(windowWidth / 18 * 14, windowHeight / 2 - 200);
  t1.position(windowWidth / 18 * 14 - windowWidth / 72, windowHeight / 2 - 215)
  sliderB.position(windowWidth / 18 * 14, windowHeight / 2 - 150);
  t2.position(windowWidth / 18 * 14 - windowWidth / 72, windowHeight / 2 - 165)
  sliderH.position(windowWidth / 18 * 14, windowHeight / 2 - 100);
  t3.position(windowWidth / 18 * 14 - windowWidth / 72, windowHeight / 2 - 115)
  sliderD.position(windowWidth / 18 * 14, windowHeight / 2 - 50);
  t4.position(windowWidth / 18 * 14 - windowWidth / 72, windowHeight / 2 - 65)
  sliderG.position(windowWidth / 18 * 14, windowHeight / 2);
  t5.position(windowWidth / 18 * 14 - windowWidth / 72, windowHeight / 2 - 15)
  sliderF.position(windowWidth / 18 * 14, windowHeight / 2 + 50);
  t6.position(windowWidth / 18 * 14 - windowWidth / 72, windowHeight / 2 + 35)
  sliderE.position(windowWidth / 18 * 14, windowHeight / 2 + 100);
  t7.position(windowWidth / 18 * 14 - windowWidth / 72, windowHeight / 2 + 85)
  sliderA.position(windowWidth / 18 * 14, windowHeight / 2 + 150);
  t8.position(windowWidth / 18 * 14 - windowWidth / 72, windowHeight / 2 + 135)
  sliderI.position(windowWidth / 18 * 14, windowHeight / 2 + 200);
  t9.position(windowWidth / 18 * 14 - windowWidth / 72, windowHeight / 2 + 185)
  bottone.position(windowWidth / 18 * 7, windowHeight / 10 * 7);
  bottone2.position(windowWidth / 18 * 7, windowHeight / 10 * 7);

}
