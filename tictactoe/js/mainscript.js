//help source - https://www.youtube.com/watch?v=_l7UDchbYDA
$(document).ready(function () {
    let x = "x";
    let o = "o";
    let turns = 0;
    //map the 9 board spots
    let spot1 = $('#spot1');
    let spot2 = $('#spot2');
    let spot3 = $('#spot3');
    let spot4 = $('#spot4');
    let spot5 = $('#spot5');
    let spot6 = $('#spot6');
    let spot7 = $('#spot7');
    let spot8 = $('#spot8');
    let spot9 = $('#spot9');


    $('#gameBoard li').click('click', function () {
        //if theres 3 in a row o 
        if (spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o') ||
            spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o') ||
            spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o') ||
            spot1.hasClass('o') && spot4.hasClass('o') && spot7.hasClass('o') ||
            spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o') ||
            spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o') ||
            spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o') ||
            spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o')
        ) {
            alert("o is the Winner");
            $('#gameBoard li').removeClass('o');
            $('#gameBoard li').removeClass('x');
            $('#gameBoard li').removeClass('disable');
            //if theres 3 in a row x
        } else if (spot1.hasClass('x') && spot2.hasClass('x') && spot3.hasClass('x') ||
            spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x') ||
            spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x') ||
            spot1.hasClass('x') && spot4.hasClass('x') && spot7.hasClass('x') ||
            spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x') ||
            spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x') ||
            spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x') ||
            spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x')
        ) {
            alert("x is the Winner");
            $('#gameBoard li').removeClass('o');
            $('#gameBoard li').removeClass('x');
            $('#gameBoard li').removeClass('disable');
            //if theres 9 turns
        } else if (turns === 9) {
            alert("Cats Game");
            $('#gameBoard li').removeClass('o');
            $('#gameBoard li').removeClass('x');
            $('#gameBoard li').removeClass('disable');
            turns === 0;
            //if spot has already been filled
        } else if ($(this).hasClass('disable')) {
            alert("Spot is filled");
            //player two
        } else if (turns % 2 == 0) {
            turns++;
            $(this).text(o);
            $(this).addClass('disable o');
            if (spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o') ||
                spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o') ||
                spot7.hasClass('o') && spot8.hasClasss('o') && spot9.hasClass('o') ||
                spot1.hasClass('o') && spot4.hasClass('o') && spot7.hasClass('o') ||
                spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o') ||
                spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o') ||
                spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o') ||
                spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o')
            ) {
                alert('Winner is o');
                turns = 0;
            }
        } else {
            turns++;
            $(this).text(x);
            $(this).addClass('disable x');
            if (spot1.hasClass('x') && spot2.hasClass('x') && spot3.hasClass('x') ||
                spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x') ||
                spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x') ||
                spot1.hasClass('x') && spot4.hasClass('x') && spot7.hasClass('x') ||
                spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x') ||
                spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x') ||
                spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x') ||
                spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x')
            ) {
                alert('Winner is x');
                turns = 0;
            }
        }

    });

    //reset
    $("#resetGame").click(function() {
        $("#gameBoard li").removeClass('o');
        $("#gameBoard li").removeClass('x');
        $("#gameBoard li").removeClass('disable');
        $("#gameBoard li").empty();
    turns = 0;
    });

});