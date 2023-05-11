/////////////////////////CREATED BY TEZUMIE///////////////////////                 VARIABLES
let w = 1000;
let x = 38;
let y = 38;
var amount = 0;
var amount2 = 0;
var rarepercent = 0;
function setup() {
  createCanvas(400, 400);
  let seed = floor(999999 * random(5));
  randomSeed(seed);
  noiseSeed(seed);
  let tempcan = createCanvas(w, w);
  tempcan.parent("fullscreen");

  //PalettePinks
  white = color(255, 255, 255);
  lightpink = color(255, 221, 238);
  pink = color(255, 153, 153);
  darkpink = color(255, 85, 102);
  lightred = color(238, 51, 68);
  neonred = color(255, 0, 68);
  maroon = color(170, 0, 51);
  darkmaroon = color(119, 0, 51);
  colors = [white, lightpink, pink, darkpink, lightred, neonred, maroon, darkmaroon];
  //PaletteGreens
  white = color(255, 255, 255);
  lightgreen = color(204, 255, 153);
  limegreen = color(85, 221, 85);
  green1 = color(34, 153, 68);
  darkgreen = color(17, 102, 68);
  forestgreen = color(0, 68, 51);
  darkergreen = color(0, 34, 34);
  deepgreen = color(0, 17, 34);
  colors2 = [white, lightgreen, limegreen, green1, darkgreen, forestgreen, darkergreen, deepgreen];
  //PaletteRGBY
  white = color(255, 255, 255);
  yellow = color(255, 255, 102);
  red1 = color(204, 51, 51);
  green2 = color(85, 221, 85);
  blue1 = color(51, 153, 187);
  colors3 = [white, yellow, red1, green2, blue1];
  //Palettecyandark
  deepBlue = color(17, 0, 17);
  darkGrey = color(17, 17, 17);
  grey = color(34, 34, 34);
  lightgrey = color(51, 51, 51);
  cyan = color(0, 255, 204);
  colors4 = [deepBlue, darkGrey, grey, lightgrey, cyan];
  //Palletteneonreddark
  deepBlue = color(17, 0, 17);
  darkGrey = color(17, 17, 17);
  grey = color(34, 34, 34);
  lightgrey = color(51, 51, 51);
  neonred = color(255, 0, 68);
  colors5 = [deepBlue, darkGrey, grey, lightgrey, neonred];
  //Palettecyber
  white = color(255, 255, 255);
  yellow = color(255, 255, 102);
  neonred = color(255, 0, 68);
  cyan = color(0, 255, 204);
  darkGrey = color(17, 17, 17);
  lightgrey = color(51, 51, 51);
  colors6 = [white, yellow, neonred, cyan, darkGrey, lightgrey];
  //Paletteblue
  white = color(255, 255, 255);
  lightpurple = color(221, 221, 238);
  iceblue = color(187, 238, 238);
  lightblue = color(85, 187, 204);
  blue1 = color(51, 153, 187);
  darkblue = color(0, 136, 170);
  navy = color(0, 85, 153);
  darkerblue = color(17, 51, 85);
  deepblue = color(0, 17, 34);
  colors7 = [white, lightpurple, iceblue, lightblue, blue1, darkblue, navy, darkerblue, deepblue];
  //paletteBrown
  deeppurple = color(34, 0, 34);
  darkbrown = color(85, 34, 34);
  brown = color(136, 68, 51);
  lightbrown = color(187, 119, 85);
  tan1 = color(255, 170, 119);
  lighttan = color(255, 221, 153);
  peach = color(238, 238, 204);
  colors8 = [deeppurple, darkbrown, brown, lightbrown, tan1, lighttan, peach];
  //palettepurple
  deeppurple = color(34, 0, 34);
  darkpurple = color(0, 0, 136);
  purple = color(51, 0, 238);
  lightpurple = color(136, 17, 255);
  pink = color(238, 68, 255);
  lightpink = color(238, 119, 255);
  babypink = color(255, 221, 238);
  colors9 = [deeppurple, darkpurple, purple, lightpurple, pink, lightpink, babypink];
  //Palettegrey
  white = (255, 255, 255);
  grey1 = (221, 221, 238);
  grey2 = (187, 238, 238);
  grey3 = (85, 187, 204);
  grey4 = (51, 153, 187);
  grey5 = (0, 136, 170);
  grey6 = (0, 85, 153);
  grey7 = (17, 51, 85);
  grey8 = (0, 17, 34);
  colors10 = [white, grey1, grey2, grey3, grey4, grey5, grey6, grey7, grey8];
  //paletteGOLD
  darkgold = color(140, 140, 31);
  gold = color(196, 196, 105);
  lightgold = color(227, 227, 84);
  yellow = color(250, 250, 31);
  darkergold = color(110, 110, 20);
  colors11 = [darkgold, gold, lightgold, yellow, darkergold];
  //Palettepurpledark
  deepBlue = color(17, 0, 17);
  darkGrey = color(17, 17, 17);
  grey = color(34, 34, 34);
  lightgrey = color(51, 51, 51);
  purple = color(51, 0, 238);
  colors12 = [deepBlue, darkGrey, grey, lightgrey, purple];
  //Palettenormal
  white = color(255, 255, 255);
  navy = color(0, 85, 153);
  neonred = color(255, 0, 68);
  cyan = color(0, 255, 204);
  darkGrey = color(17, 17, 17);
  lightgrey = color(51, 51, 51);
  grey2 = (187, 238, 238);
  colors6 = [white, navy, neonred, cyan, darkGrey, lightgrey, grey2];
  ///////////////////////////////////////////////////////////////////
  //Palette Choice
  palette = [colors, colors2, colors3, colors4, colors5, colors6, colors7, colors8, colors9, colors10, colors12];
  choosecolor = random(palette);
  background(random(choosecolor));
  //Shape Choice
  shapes = [rect];
  selectshape = random(shapes);
  savecolor = choosecolor;
}
function draw() {
  choosecolor = savecolor;
  if (rarepercent > 599) {
    choosecolor = colors11;
  }
  if (amount < 9) {
    stroke(random(choosecolor));
    fill(random(choosecolor));
    strokeWeight(2);
    selectshape(x, y, random(8, 25), random(8, 25));
    amount = amount + 1;
  } else if (x <= width - 90) {
    x = x + 50;
    amount = 0;
    amount2 = amount2 + 1;
    selectshape = random(shapes);
    rarepercent = random(0, 600);
  } else if (amount2 < 358) {
    x = -12;
    y = y + 50;
  } else {
    noLoop();
    function fxpreview() {}
  }
}
