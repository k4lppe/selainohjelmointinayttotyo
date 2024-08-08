
$(document).ready(function(){

    let activeRadio1;
    $('input[name="colordiv"]').change(function(){
        activeRadio = $(this).val(); // Päivitä activeRadio valitulla arvolla
    });

    let activeRadio;
    
    function saveChoice(element){
        activeRadio = $(element).data('value');
    }

    $('.container1 div').click(function() {
        activeRadio = $(this).data('value');
    });

    $(".colorName").hide();
    
        $(".resetButton").click(function(){
            $(".colorName").hide();
        })
    
        $("#fiesta").click(function(){
            $(".color" + activeRadio).css("background-color", "#DD4132");
                $(".colorName").text("Fiesta, #DD4132");
                $(".colorName").show();
        });
        $("#jester_red").click(function(){
            $(".color" + activeRadio).css("background-color", "#9E1030");
                $(".colorName").text("Jester Red, #9E1030");
                $(".colorName").show();
        });
        $("#turmeric").click(function(){
            $(".color" + activeRadio).css("background-color", "#FE840E");
                $(".colorName").text("Turmeric, #FE840E");
                $(".colorName").show();
        });
        $("#living_colar").click(function(){
            $(".color" + activeRadio).css("background-color", "#FF6F61");
                $(".colorName").text("Living Colar, #FF6F61");
                $(".colorName").show();
        });
        $("#pink_peacock").click(function(){
            $(".color" + activeRadio).css("background-color", "#C62168");
                $(".colorName").text("Pink Peacock, #C62168");
                $(".colorName").show();
        });
        $("#pepper_stem").click(function(){
            $(".color" + activeRadio).css("background-color", "#8D9440");
                $(".colorName").text("Pepper Stem, #8D9440");
                $(".colorName").show();
        });
        $("#aspen_gold").click(function(){
            $(".color" + activeRadio).css("background-color", "#FFD662");
                $(".colorName").text("Aspen Gold, #FFD662");
                $(".colorName").show();
        });
        $("#princess_blue").click(function(){
            $(".color" + activeRadio).css("background-color", "#00539C");
                $(".colorName").text("Princess Blue, #00539C");
                $(".colorName").show();
        });
        $("#toffee").click(function(){
            $(".color" + activeRadio).css("background-color", "#755139");
                $(".colorName").text("Toffee, #755139");
                $(".colorName").show();
        });
        $("#mango_mojito").click(function(){
            $(".color" + activeRadio).css("background-color", "#D69C2F");
                $(".colorName").text("Mango Mojito, #D69C2F");
                $(".colorName").show();
        });
        $("#terrarium_moss").click(function(){
            $(".color" + activeRadio).css("background-color", "#616247");
                $(".colorName").text("Terrarium Moss, #616247");
                $(".colorName").show();
        });
        $("#sweet_lilac").click(function(){
            $(".color" + activeRadio).css("background-color", "#E8B5CE");
                $(".colorName").text("Sweet Lilac, #E8B5CE");
                $(".colorName").show();
        });
        $("#soybean").click(function(){
            $(".color" + activeRadio).css("background-color", "#D2C29D");
                $(".colorName").text("Soybean, #D2C29D");
                $(".colorName").show();
        });
        $("#eclipse").click(function(){
            $(".color" + activeRadio).css("background-color", "#343148");
                $(".colorName").text("Eclipse, #343148");
                $(".colorName").show();
        });
        $("#sweet_corn").click(function(){
            $(".color" + activeRadio).css("background-color", "#F0EAD6");
                $(".colorName").text("Sweet Corn, #F0EAD6");
                $(".colorName").show();
        });
        $("#brown_granite").click(function(){
            $(".color" + activeRadio).css("background-color", "#615550");
                $(".colorName").text("Brown Granite, #615550");
                $(".colorName").show();
        });
        $(".resetButton").click(function(){
            $(".color1").css("background-color", "white");
            $(".color2").css("background-color", "white");
        });
    
});