$(document).ready(function(){
    // Global variables

    const boardW = $("#container").width(),
          boardH = $("#container").height();
          
    var cols = 9; 
    var rows = 9;
    var numBombs=30;
    var bomb; 
    var bombCount;
    var grid;
    var neighbour;
    var neighbourCount = 0;
    var myClass;

    // Create the grid
    function makeGrid(cols, rows){
        for (var i = 0; i < cols; i++) {
            for (var j = 0; j < rows; j++) {
                $('#container').append("<div class='square "+i+j+"'></div>");   
            }
        $('.square').width(boardW/cols);
        $('.square').height(boardH/rows);
        }

        for (var i = 0; i < cols; i++) {
            for (var j = 0; j < rows; j++) {
              findNeighbourBombs() ; 
            }
        }
    }
    
    // Creates a bomb
    function makeBomb(){
        bomb = {
            x: Math.floor(Math.random()*cols),
            y: Math.floor(Math.random()*rows),
        }
            $("."+bomb.x+bomb.y+"").addClass('bomb');
            //console.log("."+bomb.x+bomb.y+"");
    }
    
    // Make the bomb numBombs amount of times
    function addBombstoBoard(){
        for (var i = 0; i < numBombs; i++) {
           makeBomb();
        }
    };

    function coverAllCells(){
        $('.square').addClass('covered');
    }

    
    function findClass(){
        $('.square').click(function(){
            var myClass = $(this).attr('class').split(" ")[1];
            console.log(myClass);     
        })
        
    }  
    
    function findNeighbourBombs(){
        $('.square').click(function(){
            if ($(this).hasClass('bomb')){
                return -1;
            }
            var total = 0;
            
            for (var xoff = 0; xoff < cols; xoff++) {
                for (var yoff = 0; yoff < rows; yoff++) {
                    var i = i + xoff;
                    var j = j + yoff;
                    if( i > -1 && i < cols && j > -1 && j < rows){
                        var neighbour = grid[i][j]
                        if($(neighbour).hasClass('bomb')){
                            total ++
                        }
                    }
                }
            }   
            neighbourCount = total
        }) 
        
    };
    

    function init(){
        makeGrid(9, 9);
        addBombstoBoard(); 
        //coverAllCells();
        findClass();
        findNeighbourBombs();
        $('.square').click(function(){
            $(this).removeClass('covered');
            if($(this).hasClass('bomb')){
                //setTimeout(function(){alert("You clicked a bomb"), 0}); 
                console.log("you clicked a bomb!")
            } else {
                $(this).html(neighbourCount)
            }
        })
    }
    init()
});  
