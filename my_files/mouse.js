// mouse press
function mousePressed() {
  
  // restart
  if (((mouseX > middle - 150 - buttons_w / 2) && (mouseX < middle - 150 + buttons_w / 2) &&  (mouseY > middle - buttons_h / 2) && (mouseY < middle + buttons_h / 2)) && (gamea == false)) {
    char_x = middle
    char_y = middle
    direction = "Up"
    timeb = round(millis() / 1000)
    gamea = true
    am_bonus = 0
    trashcoun = 0
    mass_x1 = []
    mass_y1 = []
    mass_x2 = []
    mass_y2 = []
    mass_x3 = []
    mass_y3 = []
    loop() }
  
  // exit
  if (((mouseX > middle + 150 - buttons_w / 2) && (mouseX < middle + 150 + buttons_w / 2) && (mouseY > middle - buttons_h / 2) && (mouseY < middle + buttons_h / 2)) && (gamea == false)) {
    remove() } }