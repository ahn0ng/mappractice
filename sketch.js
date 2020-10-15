//Creating sprite using sprite sheets for animation
const TILE_SIZE = 32;
const TOTAL_COLUMNS = 15;
const TOTAL_ROWS = 15;
const CANVAS_WIDTH = TILE_SIZE * TOTAL_COLUMNS;
const CANVAS_HEIGHT = TILE_SIZE * TOTAL_ROWS;


const rows = Array.from({length: TOTAL_ROWS});
rows.forEach((row, i) => {
  rows[i] = Array.from({ length: TOTAL_COLUMNS}, e => null);
})


console.log(rows);





let tile_sprite_sheet;


function preload() {
  // Load the json for the tiles sprite sheet
  loadJSON('tiles.json', function(tile_frames) {
    // Load tiles sprite sheet from frames array once frames array is ready
    tile_sprite_sheet = loadSpriteSheet('map.png', tile_frames);
  });
}

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  background(94,255,0);

  for (var x = 0; x < TOTAL_COLUMNS; x++) {

  
  drawTile('grass.png', 0, 0);

  drawTile('grass.png', 2, 1);

  drawTile('grass.png', 4, 1);

  drawTile('grass.png', 4, 3);

  drawTile('grass.png', 9, 13);
  drawTile('grass.png', 9, 12);
  drawTile('grass.png', 10, 13);
  drawTile('grass.png', 10, 12);
  drawTile('grass.png', 11, 13);
  drawTile('grass.png', 11, 12);
  drawTile('grass.png', 12, 13);
  drawTile('grass.png', 12, 12);
  drawTile('grass.png', 13, 13);
  drawTile('grass.png', 13, 12);
 
  
 
  drawTile('water.png', 3, 10);
  drawTile('water.png', 3, 11);
  drawTile('water.png', 3, 12);
  drawTile('water.png', 3, 13);
  drawTile('water.png', 2, 10);
  drawTile('water.png', 2, 11);
  drawTile('water.png', 2, 12);
  drawTile('water.png', 2, 13);
  drawTile('water.png', 4, 10);
  drawTile('water.png', 4, 11);
  drawTile('water.png', 4, 12);
  drawTile('water.png', 4, 13);
  drawTile('water.png', 5, 10);
  drawTile('water.png', 5, 11);
  drawTile('water.png', 5, 12);
  drawTile('water.png', 5, 13);
  drawTile('water.png', 6, 10);
  drawTile('water.png', 6, 11);
  drawTile('water.png', 6, 12);
  drawTile('water.png', 6, 13);
  drawTile('water.png', 1, 10);
  drawTile('water.png', 1, 11);
  drawTile('water.png', 1, 12);
  drawTile('water.png', 1, 13);
  drawTile('water.png', 1, 9);
  drawTile('water.png', 2, 9);
  drawTile('water.png', 3, 9);
  drawTile('water.png', 4, 9);
  drawTile('water.png', 5, 9);
  drawTile('water.png', 6, 9);
  
  drawTile('water.png', 0, 2);
  drawTile('water.png', 1, 2);
  drawTile('water.png', 2, 2);
  drawTile('water.png', 3, 2);
  drawTile('water.png', 4, 2);
  drawTile('water.png', 5, 2);
  drawTile('water.png', 6, 2);
  drawTile('water.png', 5, 3);
  drawTile('water.png', 6, 3);
  drawTile('water.png', 6, 4);
  drawTile('water.png', 7, 2);
  drawTile('water.png', 7, 5);
  drawTile('water.png', 7, 4);
  drawTile('water.png', 8, 5);
  drawTile('water.png', 8, 4);
  drawTile('water.png', 9, 5);
  drawTile('water.png', 9, 4);
  drawTile('water.png', 10, 5);
  drawTile('water.png', 10, 4);
  drawTile('water.png', 11, 5);
  drawTile('water.png', 11, 4);
  drawTile('water.png', 12, 5);
  drawTile('water.png', 12, 4);
  drawTile('water.png', 13, 5);
  drawTile('water.png', 13, 4);
  drawTile('water.png', 14, 5);
  drawTile('water.png', 14, 4);


  
  drawTile('ground.png', 7, 14);
  drawTile('ground.png', 7, 13);
  drawTile('ground.png', 7, 12);
  drawTile('ground.png', 7, 11);
  drawTile('ground.png', 7, 10);
  drawTile('ground.png', 7, 9);
  drawTile('ground.png', 7, 8);
  drawTile('ground.png', 7, 7);
  drawTile('ground.png', 6, 7);
  drawTile('ground.png', 5, 7);
  drawTile('ground.png', 4, 7);
  drawTile('ground.png', 3, 7);
  drawTile('ground.png', 3, 6);
  drawTile('ground.png', 8, 10);
  drawTile('ground.png', 9, 10);
  drawTile('ground.png', 10, 10);
  drawTile('ground.png', 11, 10);


  drawTile('house.png', 9, 1);
  drawTile('house.png', 11, 2);
  drawTile('house.png', 13, 0);
  drawTile('house.png', 3, 5);
  drawTile('house.png', 11, 9);

  console.log(rows);
}

function draw() {
  clear();
  background(0);
  drawLevel();
}

function drawTile(tilename, gridX, gridY){
    tile_sprite_sheet.drawFrame(tilename, TILE_SIZE * gridX, TILE_SIZE * gridY);
    rows[gridY][gridX] = tilename;
}

function drawLevel(){
  rows.forEach((row, j) => {
    row.forEach((item, i) => {
      if(item != null){
        drawTile(item, i, j);
      }
    })
  })


}}