let canvas_x
let canvas_y
let middle
let char_x
let char_y
let direction
let pathSize
let trashSize
let timea
let timeb
let buttons_h
let buttons_w
let random_crash
let crasha
let mass_x1; let mass_x2; let mass_x3
let mass_y1; let mass_y2; let mass_y3
let am_bonus
let max_bonus
let bonusSpawnCurrentTime1; let bonusSpawnCurrentTime2; let bonusSpawnCurrentTime3
let limitSpawnBonusTime1; let limitSpawnBonusTime2; let limitSpawnBonusTime3
let gamea
let charR
let trashR
let trashcoun
let memLoad
let beep
let explosion
let crashtriggered
let crashtime

  // plans
  // optimize char
  // make a recycling factory
  // make sort trash
  // make trash cans

function preload() {
  music = loadSound("my_files/haggstorm.mp3")
  beep = loadSound("my_files/beep-5sec.mp3")
  explosion = loadSound("my_files/deltarune-explosion.mp3") }

function setup() {
  createCanvas(canvas_x, canvas_y)
  music.loop()
  timeb = round(millis() / 1000)
  mass_x1 = []
  mass_y1 = []
  mass_x2 = []
  mass_y2 = []
  mass_x3 = []
  mass_y3 = []
  memLoad = [] }

canvas_x = 750
canvas_y = 750
middle = canvas_x / 4 + canvas_y / 4
direction = "Up"
char_x = middle
char_y = middle
pathSize = 125
trashSize = 24
buttons_h = 50
buttons_w = 100
random_crash = 3
limitSpawnBonusTime1 = 60
bonusSpawnCurrentTime1 = 0
limitSpawnBonusTime2 = 45
bonusSpawnCurrentTime2 = 0
limitSpawnBonusTime3 = 75
bonusSpawnCurrentTime3 = 0
am_bonus = 0
max_bonus = 2500
gamea = true
charR = 60
trashR = 25
trashcoun = 0
crashtriggered = false
crashtime = 0

function mychar() {
  fill(240, 220, 80)
  circle(char_x, char_y, charR)
  fill(0) }

function keyPressed() {
  if (key == "w" || key == "ц") { direction = "Up" }
  if (key == "a" || key == "ф") { direction = "Left" }
  if (key == "s" || key == "ы" || key == "і") { direction = "Down" }
  if (key == "d" || key == "в") { direction = "Right" } }

function buttons() {
  gamea = false
  fill(50)
  rectMode(CENTER)
  rect(middle - 150, middle, buttons_w, buttons_h)
  fill(200)
  textSize(24)
  text("Restart", middle - 150, middle)
  fill(50)
  rect(middle + 150, middle, buttons_w, buttons_h)
  fill(200)
  text("Exit", middle + 150, middle)
  rectMode(CORNER) }

function trashcount() {
  fill(150)
  rectMode(CENTER)
  textSize(15)
  textAlign(CENTER, CENTER)
  if (trashcoun <= 9) {
    rect(32, 50, 58, 20)
    fill(0)
    text("Score:" + trashcoun, 32, 50) }
  else if (trashcoun <= 99) {
    rect(35, 50, 68, 20)
    fill(0)
    text("Score:" + trashcoun, 35, 50) }
  else {
    rect(38, 50, 78, 20)
    fill(0)
    text("Score:" + trashcoun, 38, 50) }
  rectMode(CORNER) }

function draw() {
  timea = round(millis() / 1000 - timeb)
  crasha = round(random(random_crash))

  background(25, 100, 40)
  fill(210, 165, 110)
  rect(middle - pathSize / 2, 0, pathSize, canvas_x)
  rect(0, middle - pathSize / 2, canvas_y, pathSize)
  rectMode(CENTER)
  rect(middle, middle, pathSize)
  rectMode(CORNER)

  if (keyIsPressed) {
    if (direction == "Up") { char_y -= 7.5 }
    if (direction == "Left") { char_x -= 7.5 }
    if (direction == "Down") { char_y += 7.5 }
    if (direction == "Right") { char_x += 7.5 } }

  // up left trees
  tree(50, 75)
  tree(150, 175)
  tree(250, 75)
  tree(50, 250)
  tree(250, 250)
  // bottom left trees
  tree(50, 700)
  tree(150, 600)
  tree(250, 700)
  tree(50, 500)
  tree(250, 500)
  // right up
  tree(700, 75)
  tree(600, 175)
  tree(500, 75)
  tree(700, 250)
  tree(500, 250)
  // bottom right
  tree(700, 700)
  tree(600, 600)
  tree(500, 700)
  tree(700, 500)
  tree(500, 500)

  // first
  for (let i = 0; i < mass_x1.length; i++) {
    fill(255, 0, 0)
    square(mass_x1[i], mass_y1[i], trashR)
    let d1 = dist(mass_x1[i], mass_y1[i], char_x, char_y)
    if (d1 < trashR + charR / 2) {
      mass_x1.splice(i, 1)
      mass_y1.splice(i, 1)
      am_bonus -= 1
      trashcoun += 1 } }

  // second
  for (let i = 0; i < mass_x2.length; i++) {
    fill(0, 255, 0)
    square(mass_x2[i] + 50, mass_y2[i], trashR)
    let d2 = dist(mass_x2[i] + 50, mass_y2[i], char_x, char_y)
    if (d2 < trashR + charR / 2) {
      mass_x2.splice(i, 1)
      mass_y2.splice(i, 1)
      am_bonus -= 1
      trashcoun += 1 } }

  // third
  for (let i = 0; i < mass_x3.length; i++) {
    fill(0, 0, 255)
    square(mass_x3[i] - 50, mass_y3[i], trashR)
    let d3 = dist(mass_x3[i] - 50, mass_y3[i], char_x, char_y)
    if (d3 < trashR + charR / 2) {
      mass_x3.splice(i, 1)
      mass_y3.splice(i, 1)
      am_bonus -= 1
      trashcoun += 1 } }

  if (direction == "Up") {
    mychar()
    circle(char_x - 32, char_y - 16, 16)
    circle(char_x + 32, char_y - 16, 16)
    fill(60)
    circle(char_x - 16, char_y + 8, 8)
    circle(char_x + 16, char_y + 8, 8)
    rect(char_x - 8, char_y - 20, 12, 4)
    rect(char_x, char_y - 20, 12, 4) }
  if (direction == "Left") {
    mychar()
    circle(char_x - 16, char_y - 32, 16)
    circle(char_x - 16, char_y + 32, 16)
    fill(60)
    circle(char_x + 8, char_y - 16, 8)
    circle(char_x + 8, char_y + 16, 8)
    rect(char_x - 20, char_y - 8, 4, 12)
    rect(char_x - 20, char_y, 4, 12) }
  if (direction == "Down") {
    mychar()
    circle(char_x - 32, char_y + 16, 16)
    circle(char_x + 32, char_y + 16, 16)
    fill(60)
    circle(char_x - 16, char_y - 8, 8)
    circle(char_x + 16, char_y - 8, 8)
    rect(char_x - 8, char_y + 16, 12, 4)
    rect(char_x, char_y + 16, 12, 4) }
  if (direction == "Right") {
    mychar()
    circle(char_x + 16, char_y - 32, 16)
    circle(char_x + 16, char_y + 32, 16)
    fill(60)
    circle(char_x - 8, char_y - 16, 8)
    circle(char_x - 8, char_y + 16, 8)
    rect(char_x + 16, char_y - 8, 4, 12)
    rect(char_x + 16, char_y, 4, 12) }

  if (char_x >= canvas_x - 30) { char_x = 30 }
  if (char_x < canvas_x - canvas_x + 30) { char_x = 720 }
  if (char_y >= canvas_y - 30) { char_y = 30 }
  if (char_y < canvas_y - canvas_y + 30) { char_y = 720 }

  // first
  if (am_bonus <= max_bonus && bonusSpawnCurrentTime1 == limitSpawnBonusTime1) {
    let x = random(40, canvas_x - 40)
    let y = random(40, canvas_y - 40)
    mass_x1.push(x)
    mass_y1.push(y)
    am_bonus += 1
    bonusSpawnCurrentTime1 = 0 }
  // second
  if (am_bonus <= max_bonus && bonusSpawnCurrentTime2 == limitSpawnBonusTime2) {
    let x = random(40, canvas_x - 40)
    let y = random(40, canvas_y - 40)
    mass_x2.push(x)
    mass_y2.push(y)
    am_bonus += 1
    bonusSpawnCurrentTime2 = 0 }
  // third
  if (am_bonus <= max_bonus && bonusSpawnCurrentTime3 == limitSpawnBonusTime3) {
    let x = random(40, canvas_x - 40)
    let y = random(40, canvas_y - 40)
    mass_x3.push(x)
    mass_y3.push(y)
    am_bonus += 1
    bonusSpawnCurrentTime3 = 0 }

  // stop time 30 seconds
  // if (timea >= 30) {
  //   noLoop()
  //   buttons() }

  // stop on 350 trash
  if (trashcoun >= 350) {
    noLoop()
    buttons() }

  time()
  fps()
  crash()
  trashcount()

  if (bonusSpawnCurrentTime1 <= limitSpawnBonusTime1) {
    bonusSpawnCurrentTime1 += 1 }
  if (bonusSpawnCurrentTime2 <= limitSpawnBonusTime2) {
    bonusSpawnCurrentTime2 += 1 }
  if (bonusSpawnCurrentTime3 <= limitSpawnBonusTime3) {
    bonusSpawnCurrentTime3 += 1 } }
