
import $ from 'jquery';

window.$ = $;

// import JS files here using ES6 import statement
import slick from 'slick-carousel';
import waypoint from '../../../node_modules/waypoints/lib/noframework.waypoints';


//css test

var ff = $('#test-css .font-family').css('font-family');
$('#test-css .font-family span').html(ff);
testCss();

$(window).resize(function(){
    resetStyles();
    testCss();
})


function resetStyles(){
    $('#test-css .test-container .test').css({
        'font-size': '',
        'line-height': ''
    });
}

function testCss(){
    $('#test-css .test-container').each(function(){
        var input = $(this).find('input.font-size-slider');
        var lineInput = $(this).find('input.line-slider');

        var text = $(this).find('.test');

        var result = $(this).find('.label p.font-size span');
        var resultLine = $(this).find('.label p.line-height span');

        input.val(parseInt(text.css('font-size'), 10));
        lineInput.val(parseInt(text.css('line-height'), 10))

        result.html(text.css('font-size'));
        resultLine.html(text.css('line-height'));
    
        input.on('input change', function(e){
            result.html(`${$(this).val()}px`);
            text.css('font-size', `${$(this).val()}px`);
        })

        lineInput.on('input change', function(e){
            resultLine.html(`${$(this).val()}px`);
            text.css('line-height', `${$(this).val()}px`);
        })
    
    })
    
}