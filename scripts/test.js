$(document).ready(function(){
    // Global variables

    const canvas = $('#canvas')[0],
          ctx = canvas.getContext("2d"),
          canvasW = $("#canvas").width(),
          canvasH = $("#canvas").height();
    
    var grid;
    var cols; 
    var rows; 
    var w = 40;
    
    // Cell object
    function Cell(x, y, w){
        this.x = x;
        this.y = y;
        this.w = w;
        if (Math.random(1) < 0.5){
            this.bee = true;
        } else {
            this.bee = false;
        }
        
        this.revealed = true;
    }
    
    // Show function to display cell on canvas
    Cell.prototype.show = function(){
            ctx.strokeStyle = "rgb(0,0,0";
            ctx.strokeRect(this.x, this.y, this.w, this.w);
            if(this.revealed){
                if(this.bee){
                    ctx.beginPath();
                    ctx.arc(this.x + this.w/2 , this.y + this.w/2, this.w/4, 0,  2*Math.PI)
                    ctx.stroke()
                    ctx.fillStyle = "rgb(255, 255, 255)"
                    ctx.fill()
                    ctx.closePath()
                }
            }
    }      
    
    // generic function to make a grid (an array of arrays)
    function make2DArray(cols, rows){
        var arr = new Array(cols);
        for(var i=0; i < arr.length; i ++){
            arr[i] = new Array(rows)
        }
        return arr;
    }

    // Give the canvas a background of white to begin with 
    function paintCanvas(){
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fillRect(0, 0, canvasW, canvasH );
    }
    paintCanvas();

    // Create Cell objects on the canvas
    function makeCell(){
        cols = Math.floor( canvasW/ w);
        rows = Math.floor( canvasH / w);
        grid = make2DArray(cols, rows);
        for (var i = 0; i < cols; i ++){
            for(var j = 0; j < rows; j++){
                grid[i][j] = new Cell(i*w, j*w, w);
                grid[i][j].show();
            }
        }
    }
    makeCell();
})