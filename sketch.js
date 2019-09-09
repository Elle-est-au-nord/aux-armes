function setup() {
  createCanvas(1050, 400);
}

let x_coord = 10;
let y_coord = 180;
let y_legend = 90;

let country = ['United States', 'China', 'Saudi Arabia', 'India', 'France', 'Russia', 'United Kingdom', 'Germany', 'Japan', 'South Korea'];
let militarySpending = [649, 250, 67.6, 66.5, 63.8, 61.4, 50, 49.5, 46.6, 43.1];
let exportRank = [1, 7, "n/a", 24, 3, 2, 8, 4, 35, 6];
let importRank = [13, 3, 1, 4, 31, "n/a", 18, 78, 11, 7];

function draw() {
  background('rgb(51, 51, 51)');
  textFont('Liberation Mono');
  textSize(16);
  
  for(i=0; i < country.length; i++) {
     
    if(i == 0) {
      // square
      fill('#f9e861');
      square(x_coord, y_coord, militarySpending[i] * 0.25, 5);
      // legend
      fill('#ffffff');
      text(country[i], x_coord, y_legend);
      // arrange import and export ranks
        y_er = y_coord + (exportRank[i] - 1) * 2.5;
        y_etext = y_er -7 
        y_ir = y_coord + (importRank[i] - 1) * 2.5;
        y_itext = y_ir -7
        if(Math.abs(exportRank[i] - importRank[i]) < 5) {
          if(importRank[i] < exportRank[i]) {
            y_etext = y_er + 15;
          } else {
            y_itext = y_ir + 15;
          }
        }
      // export rank
      y_er = y_coord + (exportRank[i] - 1) * 2.5
      stroke('#e0556e');
      text(exportRank[i], x_coord, y_etext)
      strokeWeight(2);
      line(x_coord, y_er, x_coord + 30, y_er);
      // import rank
      y_ir = y_coord + (importRank[i] - 1) * 2.5
      stroke('#bc53ba');
      text(importRank[i], x_coord, y_itext)
      strokeWeight(2);
      line(x_coord, y_ir, x_coord + 30, y_ir);
      noStroke();
    } else {
      if(i%2 == 0) {
        // square
        x_even = x_coord + i * 98 + country[i-1].length * 6;
        fill('#f9e861');
        square(x_even, y_coord, militarySpending[i] * 0.25, 5);
        // legend
        fill('#ffffff');
        text(country[i], x_even, y_legend);
        // arrange import and export ranks
        y_er = y_coord + (exportRank[i] - 1) * 2.5;
        y_etext = y_er -7 
        y_ir = y_coord + (importRank[i] - 1) * 2.5;
        y_itext = y_ir -7
        if(Math.abs(exportRank[i] - importRank[i]) < 5) {
          if(importRank[i] < exportRank[i]) {
            y_etext = y_er + 15;
          } else {
            y_itext = y_ir + 15;
          }
        }
        // export rank
        y_er = y_coord + (exportRank[i] - 1) * 2.5
        stroke('#e0556e');
        text(exportRank[i], x_even, y_etext)
        strokeWeight(2);
        line(x_even, y_er, x_even + 30, y_er);
        // import rank
        y_ir = y_coord + (importRank[i] - 1) * 2.5
        stroke('#bc53ba');
        text(importRank[i], x_even, y_itext)
        strokeWeight(2);
        line(x_even, y_ir, x_even + 30, y_ir);
        noStroke();
      } else {
        // square
        x_odd = x_coord + i * 98 + country[i-1].length * 5;
        fill('#f9e861');
        square(x_odd, y_coord, militarySpending[i] * 0.25, 5);
        // legend
        fill('#ffffff');
        text(country[i], x_odd, y_legend + 50);
        // arrange import and export ranks
        y_er = y_coord + (exportRank[i] - 1) * 2.5;
        y_etext = y_er -7 
        y_ir = y_coord + (importRank[i] - 1) * 2.5;
        y_itext = y_ir -7
        if(Math.abs(exportRank[i] - importRank[i]) < 5) {
          if(importRank[i] < exportRank[i]) {
            y_etext = y_er + 15;
          } else {
            y_itext = y_ir + 15;
          }
        }
        // export rank
        stroke('#e0556e');
        text(exportRank[i], x_odd, y_etext)
        strokeWeight(2);
        line(x_odd, y_er, x_odd + 30, y_er);
        // import rank
        stroke('#bc53ba');
        text(importRank[i], x_odd, y_itext)
        strokeWeight(2);
        line(x_odd, y_ir, x_odd + 30, y_ir);
        noStroke();
      }
    }
    
  }
}