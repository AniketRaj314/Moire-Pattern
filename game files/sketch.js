let width, height, x, size;
function setup() {
    width = innerWidth;
    height = innerHeight - 4;
    size = innerWidth < innerHeight - 4 ? innerWidth : innerHeight - 4;
    theta = -PI / 2;
    createCanvas(width, height);
}

function draw() {
    background(0);
    noFill();
    strokeWeight(2);
    let r = 10;
    while(r <= size) {
        stroke(255);
        ellipse(width / 2, height / 2, r, r);
        
        x = map(sin(theta), -1, 1, 0, width);
        
        stroke(255, 0, 0);
        ellipse(x, height / 2, r, r);

        r += 20;
        theta += 0.0002;
        
    }

}