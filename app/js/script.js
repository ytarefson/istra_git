$(document).ready( function() {


  


  $.ajax({
    type: "GET",
    url: 'js/products.json',    
    dataType: "json",
    success: function(data) {
      var Data = [];
      Data = data;
      var result = "";
      for (var i = 1; i<data.length ; i++) {          
        result += render(data[i]);
      }
      $('.products').text('');
      $('.products').append(result);
    },
  });

  $('.list-item').on('click', function() { 
      var id = this.id;      
      $.ajax({
      type: "GET",
      content: 'this',
      url: 'js/products.json',      
      dataType: "json",
      success: function(data) {
        var result = "";
        var selector = 'data[i].'+id;
        for (var i = 1; i<data.length ; i++) {      
          if (data[i].category==id) {
            result += render(data[i]);
          }
        }
        $('.products').text('');
        $('.products').append(result);
      },
    });

  })

  $('.brand-item').on('click', function() { 
    var brand = this.id;      
    $.ajax({
      type: "GET",
      content: 'this',
      url: 'js/products.json',      
      dataType: "json",
      success: function(data) {
        var result = "";
        
        for (var i = 1; i<data.length ; i++) {      
          if (data[i].brand==brand) {
            result += render(data[i]);
          }
        }
        $('.products').text('');
        $('.products').append(result);
      },
    });

   })

    $('.medex-item').on('click', function() { 
    var category = this.id;   
    console.log(category);
    $.ajax({
      type: "GET",
      content: 'this',
      url: 'js/medex.json',      
      dataType: "json",
      success: function(data) {
        console.log('kk');

        var result = "";        
        for (var i = 1; i<data.length ; i++) {      
          if (data[i].category==category) {
            result += render(data[i]);
          }
        }
        $('.products').text('');
        $('.products').append(result);
      },
    });

   });

  $('.profchem-item').on('click', function() { 
    var category = this.id;      
    $.ajax({
      type: "GET",
      content: 'this',
      url: 'js/profchem.json',      
      dataType: "json",
      success: function(data) {
        console.log('kk');

        var result = "";        
        for (var i = 1; i<data.length ; i++) {      
          if (data[i].category==category) {
            result += render(data[i]);
          }
        }
        $('.products').text('');
        $('.products').append(result);
      },
    });

   });


  function render(data) {
    var result = '';
    var item = '<div class="product"><div class="product__is">';
    item += '<h3 class="product__name">'+data.name+'</h3>';
    item += '<p class="product__desc">'+data.desc+'</p></div>';
    item += '<div class="product__image"><img src="'+data.href+'" width="170px" height="170px">';
    item += '<span class="product__price">Цена: '+data.price+'</span>';
    item += '<div class="product__id">ID: '+data.id+'</div></div>';
    item += '</div>';
    result += item;
    return result;
  }
// возможно обьеденить в функцию 
    

});