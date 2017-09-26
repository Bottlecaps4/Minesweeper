$(document).ready(function(){
    // Global variables

    const boardW = $("#container").width(),
          boardH = $("#container").height();
          
    let cols = 9, 
        rows = 9,
        numBombs=20,
        bomb;

    // Create the grid
    function makeGrid(cols, rows){
        for (var i = 0; i < cols; i++) {
            for (var j = 0; j < rows; j++) {
                $('#container').append("<div class='square "+i+j+"'></div>");   
            }
        $('.square').width(boardW/cols);
        $('.square').height(boardH/rows);
        }
    }
    
    // Creates a bomb
    function makeBomb(){
        bomb = {
            x: Math.floor(Math.random()*cols),
            y: Math.floor(Math.random()*rows),
        }
        $("."+bomb.x+bomb.y+"").addClass('bomb');
    }
    
   
    function addBombstoBoard(){
        for (var i = 0; i < numBombs; i++) {
           makeBomb();
        }
         /*  this is just a filler for the moment. Will have to change randomisation
        to eliminate possibility of a div location being selected twice 
    */
    };

    function coverAllCells(){ 
        $('.square').addClass('covered');  
    }

    function findClass(){
        $('.square').click(function(){
            var myClass = $(this).attr('class').split(" ")[1];
            //console.log(myClass);     
        }) 
    }  // Helper function, used for visualisation of selected div in console only. 

    function init(){
        makeGrid(9, 9);
        addBombstoBoard(); 
        coverAllCells();
        findClass();
        $('.square').click(function(){
            $(this).removeClass('covered');
            if($(this).hasClass('bomb')){
                //setTimeout(function(){alert("You clicked a bomb"), 1000}); 
                console.log("you clicked a bomb!")
            } 
        })
    }
    init()
});  


