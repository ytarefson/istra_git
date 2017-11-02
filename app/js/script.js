$(document).ready( function() {
  $(".owl-carousel").owlCarousel({
    items:5,
    loop: true,
    autoplay:true,
      autoplayTimeout:3000,
      lazyLoad:true,
      responsive: {
        500: {
          items : 3
        },

        700: {
          items : 4
        },
        960: {
          items: 5
        }
      }
  });
  $.ajax({
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
  });
  
  $('.new-cat__link').on('click', function(event) { 
      event.preventDefault();
      var id = this.id;      
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
        $('.new-cat__content').text('');
        $('.new-cat__content').append(result);
        },
    });
  })

  $('.new-cat__category-link').on('click', function(event) {
    event.preventDefault();
    var category = this.id;
    get_category = '#'+category+'~ ul';
    var sublist = $('.new-cat__sublist');
    $(get_category).toggle('visible');
    

  });
  

  function visibleOn(){
    
  };


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