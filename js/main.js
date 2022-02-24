//Voor het filteren van de verschillende nieuwsonderwerpen

filterObjects("all");


function filterObjects(c){
    var x, i;
    x = document.getElementsByClassName("box");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if(x[i].className.indexOf(c) > -1) addClass(x[i], "show")

    }
}

function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++){
        if (arr1.indexOf(arr2[i] == -1)){
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i=0; i < arr2.length; i++){
        while (arr1.indexOf(arr2[i]) > -1){
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}


//De Animatie voor het filteren.

if ($filterObjects == 'all') {
    $objects.removeClass('is-animated')
      .fadeOut().promise().done(function() {
        $objects.addClass('is-animated').fadeIn();
      });
  } else {
    $objects.removeClass('is-animated')
      .fadeOut().promise().done(function() {
        $objects.filter('[data-category = "' + $filterObjects + '"]')
          .addClass('is-animated').fadeIn();
      });
  };

  //<script src="jquery-3.5.1.min.js"></script>
