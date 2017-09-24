$(document).ready(function(){
    // Global variables
    const canvas = $('#canvas')[0],
          ctx = canvas.getContext("2d"),
          w = $("#canvas").width(),
          h = $("#canvas").height(),
          cols = 10,
          rows = 10,
          cw = Math.floor(w/cols),
          ch = Math.floor(h/rows);
    
    let bomb;

    function paintCanvas(){
        ctx.strokeStyle = "rgb(25,25,25)";
        ctx.strokeRect(0,0, w, h)
        
        for (var i = 0; i < cols; i++){
            for(var j=0; j< rows; j++){
                ctx.fillStyle = "white"
                ctx.fillRect(cw*i, ch*j, w, h);
                ctx.strokeStyle = "black";
                ctx.strokeRect(i*cw, j*ch, w, h)
            }
        }
    }
    paintCanvas();

    function makebomb(){
        bomb = {
            x: Math.round(Math.random()*(w-cw)/cw), 
			y: Math.round(Math.random()*(h-ch)/ch), 
        }
        
        for (var i=0; i < cols; i ++ ){
            for (var j=0; j < rows; j ++ ){
                if(Math.random(1) < 0.5){
                    ctx.fillStyle ="rgb(200, 200, 200)"
                    ctx.beginPath();
                    ctx.arc(i*cw + cw/2, j*ch + ch/2, cw/4, 0,  2*Math.PI)
                    ctx.stroke()
                    ctx.fill();
                    ctx.closePath()
                }
                
            }
        }
        
    }
    makebomb();
    
    
})

