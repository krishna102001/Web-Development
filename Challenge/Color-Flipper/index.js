var colour=['AliceBlue','AntiqueWhite','Aqua','Aquamarine','Azure','Beige','Bisque','Black','Blue','BlueViolet','Brown','CadetBlue','Chartreuse','Coral','Cyan','DarkBlue','DarkGray','DeepPink','DeepSkyBlue','Gold','Green','Indigo','Maroon','Olive','Tomato'];
var colourSize=colour.length;

$('.btn').click(function(){
    var randomNumber= Math.floor(Math.random()*25);
    if(colour[randomNumber]=='Black'){
        $('.heading').css('color','white');
    }
    $('.container').css('background-color',colour[randomNumber]);
    $('.heading').text('Background Color : ' + colour[randomNumber]);
})