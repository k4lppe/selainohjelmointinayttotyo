# Kotkantien maalaus ja tapetointi

## Tavoite

Tavoitteena oli suunnitella nettisivu Kotkantien maalaus ja tapetointi yritykselle.

## Sisältö

### Etusivu 
- Etusivulla esitellään yritys
- Maalaus: Maalaamme haluamasi pinnat ammattitaidolla!
- Tapetointi: Tapetoimme seinäsi hienolla tapeteilla!
- Edullisuus: Saat palvelumme oikein edulliseen hintaan!
  
![image](https://github.com/user-attachments/assets/2121910c-7ea3-48a5-904d-86f35bf35424)

### Palvelut
- Lisätietoa palveluista
  
![image](https://github.com/user-attachments/assets/b9265eff-f39a-4b8f-a52c-b93097c4cc10)

### Värien testaus
- Värien testaus sivulla voit testata eri väreja kahdelle eri pinnalle
- 
![image](https://github.com/user-attachments/assets/e9028931-7a2b-4dd6-aabf-4de39d820c1c)

![image](https://github.com/user-attachments/assets/88117b13-3393-4c92-9fb2-2560425c0391)

### Galleria
- Galleriassa esitellään yrityksen tekemiä töitä
  
![image](https://github.com/user-attachments/assets/dd3e90f5-3957-4b17-ad74-57817a393c10)

### Yhteystiedot
- Yhteydenottolomake, jolla voit ottaa yhteyttä yritykseen.
  
![image](https://github.com/user-attachments/assets/2b4d39a0-9a02-4326-bd43-22a7e79eaddf)

### Footer
- Linkit kaikille sivuille
- Yhteystiedot: Sähköposti, Puhelin ja osoite
- Embed google maps, mistä näkee google mapsista, missä yritys sijaitsee

![image](https://github.com/user-attachments/assets/136efd6d-7fc0-42c4-8a83-981299c0d800)

# Koodin selitys

- Navigointipalkki
- Siihen on käytetty HTML ja Bootstrap

```` HTML
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="index.html">Kotkantien Maalaus</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item"><a class="nav-link" href="index.html">Etusivu</a></li>
            <li class="nav-item"><a class="nav-link" href="palvelut.html">Palvelut</a></li>
            <li class="nav-item"><a class="nav-link" href="varientestaus.html">Värien testaus</a></li>
            <li class="nav-item"><a class="nav-link" href="galleria.html">Galleria</a></li>
            <li class="nav-item"><a class="nav-link" href="yhteystiedot.html">Yhteystiedot</a></li>
        </ul>
    </div>
</nav>
````
- Sivun ulkoasu

```` CSS
body{
    margin: 0;
    padding: 0;
    line-height: 1.6;
    color: #333;
    overflow-x: hidden;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
````
- Värien testauksessa on käytetty jqueryä

```` js
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
````
- Footerin HTML

```` HTML
<footer class="footer bg-dark text-white pt-4">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h5 style="color: white;">Tietoa meistä</h5>
          <p style="color: white;">Olemme tapetointiin ja maalaukseen keskittynyt yritys. </p>
          <iframe class="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2017.5847463398302!2d25.508349977595394!3d65.00146934481731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4681cd5aac2e0dcb%3A0xd0f738d563fe562d!2sKotkantie%203%2C%2090250%20Oulu!5e1!3m2!1sfi!2sfi!4v1724050981516!5m2!1sfi!2sfi" width="300" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="col-md-4">
          <h5 style="color: white;">Linkit</h5>
          <ul class="list-unstyled">
            <li><a href="index.html" class="text-white">Etusivu</a></li>
            <li><a href="palvelut.html" class="text-white">Palvelut</a></li>
            <li><a href="varientestaus.html" class="text-white">Värien testaus</a></li>
            <li><a href="galleria.html" class="text-white">Galleria</a></li>
            <li><a href="yhteystiedot.html" class="text-white">Yhteystiedot</a></li>
          </ul>
        </div>
        <div class="col-md-4">
          <h5 style="color: white;">Yhteystiedot</h5>
          <ul class="list-unstyled">
            <p class="text-white">Sähköposti: info@kotkantienmaalaus.fi</p>
            <p class="text-white">Puhelin: 044 999 888 99</p>
            <p class="text-white">Osoite: Kotkantie 3, 90100 Oulu</p>
          </ul>
        </div>
      </div>
      <div class="logos">
        <p><a href="https://www.youtube.com/">
          <img src="images/youtubelogo.png" alt="YouTube" class="youtubelogo">
        </a></p>
        <p><a href="https://www.instagram.com/">
          <img src="images/insta-logo.png" alt="Instagram" class="instagramlogo">
        </a></p>
        <p><a href="https://x.com/home?lang=fi">
          <img src="images/xlogo.webp" alt="X" class="xlogo">
        </a></p>
        <p><a href="https://www.facebook.com/">
          <img src="images/facebooklogo.png" alt="Facebook" class="facebooklogo">
        </a></p>
        
      </div>
      <div class="row mt-3">
        <div class="col-md-12 text-center">
          <p>&copy; 2024 Kotkantienmaalaus ja tapetointi. Kaikki oikeudet pidätetään.</p>
        </div>
      </div>
    </div>
  </footer>
````
