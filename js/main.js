jQuery(function() {

  // #から始まるURLがクリックされた時
    jQuery('a[href^="#"]').click(function() {
    // .headerクラスがついた要素の高さを取得
    let header = jQuery(".header").innerHeight(); 
    let speed = 600;
    let id = jQuery(this).attr("href");
    let target = jQuery("#" == id ? "html" : id);
    // トップからの距離からヘッダー分の高さを引く
    let position = jQuery(target).offset().top - header;
    // その分だけ移動すればヘッダーと被りません

    jQuery("html, body").animate(
      {
        scrollTop: position
      },
      speed
    );
    return false;
  });


// form機能
    let $form = $('#js-form')
    $form.submit(function (e) { 
      $.ajax({ 
        url: $form.attr('action'), 
        data: $form.serialize(), 
        type: "POST", 
        dataType: "xml", 
        statusCode: { 
          0: function () { 
          //送信に成功したときの処理 
          $form.slideUp();
          $('#js-success').slideDown();

          }, 
          200: function () { 
          //送信に失敗したときの処理 
          $form.slideUp();
          $('#js-error').slideDown();

          } 
        } 
      }); 
      return false; 
    }); 

  //formの入力確認
    let $submit = $('#js-submit')
    $('#js-form input, #js-form textarea').on ('change', function(){
      if(
        $('#js-form input[type="text"]').val() !== "" &&
        $('#js-form input[type="email"]').val() !== "" &&
        $('#js-form input[name="entry.2142798974"]').prop( 'checked' ) === true
        
      ) {
        //全て入力された時
        $submit.prop('disabled',false)
        $submit.addClass('active')
        //入力されなかった時
      }else{
        $submit.prop('disabled',true)
        $submit.removeClass('active')
      }
    })
});