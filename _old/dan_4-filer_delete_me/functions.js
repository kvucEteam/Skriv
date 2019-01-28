var btn_textArray = ["Skriv for at <br/><b>FORSTÅ</b>", "Skriv for at <br/><b>FORMIDLE</b>", "Skriv for at <br/><b>ARGUMENTERE</b>", "Skriv <br/><b>FAGLIGT</b>", "Skriv til <br/><b>EKSAMEN</b>", "Skriv til <br/><b>SSO & EP</b>"];
var tweet_Array = ["Lær at skrive bedre i en række HF fag!", "Skriv bedre i dansk!", "Skriv bedre i matematik!"];

var adresse = $(location).attr('href');
var adresse_link = adresse.slice(adresse.length - 10, adresse.length - 7);
var adresse_index = adresse.slice(adresse.length - 6, adresse.length - 5);

adresse_index = parseInt(adresse_index);

(function(i, s, o, g, r, a, m) {

    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-57379576-1', 'auto');
ga('send', 'pageview');

$(document).ready(function() {

    generate_menu();


});


function generate_menu() {

    // Generer topmenu:
    var nav = "<nav class='navbar navbar-inverse' role='navigation'> <div class='navbar-header'> <button type='button' class='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'> <span class='sr-only'>Toggle navigation</span> <span class='icon-bar'></span> <span class='icon-bar'></span> <span class='icon-bar'></span> </button> <a class='navbar-brand' href='index.html'>Skriv!</a> </div> <div class='collapse navbar-collapse' id='bs-example-navbar-collapse-1'> <ul class='nav navbar-nav'> <li class='dan'><a href='dan_1.html'>Dansk</a> </li> <li class='mat'><a href='mat_1.html'>Matematik</a> </li> </ul> </div> <!-- /.navbar-collapse --> <!-- /.container-fluid --> </nav>";
    $(".nav_container").html(nav);


    // lav knapper til lg og md grid 
    for (var i = 0; i < 6; i++) {
        $(".menu_container").append("<a href='" + adresse_link + "_" + (i + 1) + ".html'><div class='btn_nav'><div class='btn_left'><div class='txt_left'>" + (i + 1) + "</div></div><div class='btn_right btn-default' type='button'><div class='txt_right'>" + btn_textArray[i] + "</div></div></div></a>");

    }

    $(".btn_right").eq(adresse_index - 1).css("background-color", "#f0e80e");


    //drop down menu for xs og sm grid:
    $(".dropdown").html("<div class=' dropdown-toggle ' type='button' id='dropdownMenu1' data-toggle='dropdown' aria-expanded='true'> Hvad skal du skrive? <img src='img/dropdown_pil@x2.png' class='pil_ned' aria-hidden='true'></div> </div> <ul class='dropdown-menu' role='menu' aria-labelledby='dropdownMenu1'> </ul>");


    for (var u = 0; u < btn_textArray.length; u++) {

        var clean_menu_text = btn_textArray[u].replace('<br/>', ' ');

        $(".dropdown-menu").append("<li role='presentation'><a role='menuitem' tabindex='-1' href='" + adresse_link + "_" + (u + 1) + ".html'><button class='btn-dark'>" + (u + 1) + "</button>" + clean_menu_text + "</a></li>");
    }


    // twitter iframe:

    if (adresse_link == "dan") {
        var txt_twt = 1;
    } else if (adresse_link == "mat") {
        var txt_twt = 2;
    } else {
        var txt_twt = 0;
    }

    $(".twitter_container").html("<a href='https://twitter.com/share' class='twitter-share-button' data-text='" + tweet_Array[txt_twt] + "' data-via='Skriv_KVUC'>Tweet</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>");

    // facbook iframe
    $(".fb_container").html("<iframe src='http://www.facebook.com/plugins/like.php?href=http://skriv.kvuc.dk&amp;share=true&amp;layout=button_count&amp;show_faces=true&amp;action=like&amp;colorscheme=light&amp' style='overflow:auto; height:38px' scrolling='no' frameborder='0' allowTransparency='true'></iframe>");

    // Populate Footer: 

    $(".footeren").html("<div class='col-xs-12 footer'><b style='color:white;'>Skriv!</b> for support og feedback: <a href='mailto:e-support@kvuc.dk'>e-support@kvuc.dk</a> | <a href='http://www.kvuc.dk'>kvuc.dk </a>| ©KVUC e-learning 2015</div>");

    $("li").each(function(index) {
        if ($(this).attr("class") == adresse_link) {
            $(this).addClass("fag_selected");
        }
    });
}
