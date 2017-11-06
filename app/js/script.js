$(document).ready( function() {
  $(".owl-carousel").owlCarousel({
    items:5,
    loop: true,
    autoplay:true,
      autoplayTimeout:3000,
      lazyLoad:true,
      responsive: {
        500: {
          items : 3,
        },

        700: {
          items : 4,
        },
        960: {
          items: 5,
        }
      }
  });
/*  $.ajax({
    type: "GET",
    url: 'js/istra.json',    
    dataType: "json",
    success: function(data) {
      var result = "";
      for (var i = 1; i<4 ; i++) {          
        result += render(data[i]);
      }
      $('.new-cat__content').text('');
      $('.new-cat__content').append(result);      
    },
  });*/
  
  $('.new-cat__link').on('click', function(event) { 
    event.preventDefault();
    var id = this.id;      
    selectCategory(id);
  })

  $('.new-cat__category-link').on('click', function(event) {
    event.preventDefault();
    var category = this.id;
    get_category = '#'+category+'~ ul';
    var sublist = $('.new-cat__sublist');
    $(get_category).toggle('visible');    
  });

  $('#button_5').on('click', function(event) {
    event.preventDefault();
    selectCategory(5);
  })

  $('#button_9').on('click', function(event) {
    event.preventDefault();
    selectCategory(9);
  })

  var headerHeight = $('.nav').outerHeight();

  $('.nav-link').click(function(e) {
    e.preventDefault();
    var linkHref = $(this).attr('href');
    console.log('clicked');
    $('html,body').animate({
      scrollTop: $(linkHref).offset().top - headerHeight
    }, 200);  
  });


/*  $( ".nav-link" ).click(function(e) {
     e.preventDefault();
  $( "htmlbody" ).animate({
    scrollTop: 800
  }, 1000, function() {
    // Animation complete.
  });
});*/





function selectCategory(number) {
  $('.new-cat__content').fadeOut(500);
  var id = number; 
  $.ajax({
  type: "GET",
  content: 'this',
  url: 'js/istra.json',      
  dataType: "json",
  success: function(data) {
    var result = "";
    for (var i = 1; i<data.length ; i++) {      
      if (data[i].category_id==id) {
        result += render(data[i]);
      }
    }
    setTimeout(function() {
      $('.new-cat__content').fadeIn(1000).text('').append(result);
    }, 700);       
    },
  });
}

  function render(data) {
    var result = '';
    var item = '<div class="new-cat__product"><div class="product__is">';
    item += '<span class="product__id"><span class="product__category">Артикул: </span>'+data.id+'</span>'
    item += '<h4 class="product__name">'+data.name+'</h4>';
    item += '<p class="product__desc">'+data.content+'</p>';
    item += '<span class="product__price">Цена: '+data.price+' руб.</span></div>';
    item += '<div class="product__image"><img src="img/products/'+data.image+'" width="170px" height="170px"></div>';
    item += '</div>';
    result += item;
    return result;
  }

    

});