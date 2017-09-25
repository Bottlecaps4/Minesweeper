$(document).ready(function(){
    // Global variables

    const boardW = $("#container").width(),
          boardH = $("#container").height();
          
    var cols = 9; 
    var rows = 9;
    var numBombs=10;
    var bomb; 

    // Create the grid
    function makeGrid(cols, rows){
        for (var i = 0; i < cols; i++) {
            for (var j = 0; j < rows; j++) {
                $('#container').append('<div class="square '+i+j+'""></div>');   
            }
        $('.square').width(boardW/cols);
        $('.square').height(boardH/rows);
        }
    }
    makeGrid(9, 9);
    
    // Creates a bomb
    function makeBomb(){
        bomb = {
            x: Math.floor(Math.random()*cols),
            y: Math.floor(Math.random()*rows),
        }
        $("."+bomb.x+bomb.y+"").addClass('bee');
        // console.log("."+bomb.x+bomb.y+"");
    }
    
    // Make the bomb numBombs amount of times
    for (var i = 0; i < numBombs; i++) {
        makeBomb();  
    }
})  
