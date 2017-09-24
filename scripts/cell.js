function Cell(x,y,w){
    this.x = x;
    this.y = y;
    this.w = w;
    this.bomb = true;
    this.revealed = true;
}

Cell.prototype.show = function(){
    c.fillStyle = "white"
    c.fillRect(x*i, y*j, w, h);
    c.strokeStyle = "black";
    c.strokeRect(i*x, j*y, w, h)
}