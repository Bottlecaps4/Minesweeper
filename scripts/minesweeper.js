$(document).ready(function(){
    // Global variables
    const canvas = $('#canvas')[0],
          c = canvas.getContext("2d"),
          w = c.canvas.width = 400,
          h = c.canvas.height = 400,
          cols = 9,
          rows = 9;
    
    let colors = [];

    function make2DArray(cols, rows){
        var arr = new Array(cols);
        for (var i = 0; i < arr.length; i++){
            arr[i] = new Array(rows);
        }
        return arr
    }
    
    function paintCanvas(){
        c.strokeStyle = "rgb(25,25,25)";
        c.strokeRect(0,0, w, h)
        
        for (var i = 0; i < cols; i++){
            colors[i] = []
            for(var j=0; j< rows; j++){
                colors[i][j] =  Math.floor(Math.random() *255)
                var x = i * w/cols;
                var y = j * h/rows;
                c.fillStyle = "rgb("+colors[i][j]+","+colors[i][j]+","+colors[i][j]+")"
                c.fillRect(x, y, w, h);
                c.strokeStyle = "rgb(25,25,25)";
                c.strokeRect(x, y, w, h)
            }
        }
       
        
    }
    paintCanvas();
})

