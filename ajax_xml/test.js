
$.ajax({
   url: "./data.xml",
   beforeSend:function(){ console.log('로딩중....');},
   complete:function(){ console.log('로딩끝');},
   success: function (data) {
      let detail, thumb, name, tag;
      $(data).find('item').each(function (key, ele) {
         detail = $(ele).find('detail').text();
         thumb = $(ele).find('thumb').text();
         name = $(ele).find('name').text();

         tag = `<div class="thumb">
                        <a href="${detail}" class="image">
                           <img src="${thumb}" alt="" />
                        </a>
                        <h2>${name}</h2>
                  </div>`;

         $('#main').append(tag);
      })

         let num;
      $('.thumb').on('click',function(e){
         e.preventDefault()

         detail = $(this).find('>a').attr('href');
         name = $(this).find('>h2').text();
         num = $(this)

         $('.pic img').attr('src',detail)
         $('.caption h2').text(name)
         
         
         $('.poptrox-overlay').show();
      })

      console.log(num = $('.thumb').first());


      $('.nav-previous').on('click', function(){


         if((num).index() == 0){

            num = $('.thumb').last()

            detail =$(num).find('>a').attr('href');
            name = $(num).find('>h2').text();

            $('.pic img').attr('src',detail)
            $('.caption h2').text(name)
         
         }else{
            num = num.prev()

            detail =$(num).find('>a').attr('href');
            name = $(num).find('>h2').text();

            $('.pic img').attr('src',detail)
            $('.caption h2').text(name)


         }

      })



      $('.nav-next').on('click',function(){

         console.log(num.index());


         if((num).index() == 11){

            num = $('.thumb').first()

            detail =$(num).find('>a').attr('href');
            name = $(num).find('>h2').text();

            $('.pic img').attr('src',detail)
            $('.caption h2').text(name)
         
         }else{
            num = num.next()

            detail = $(num).find('>a').attr('href');
            name = $(num).find('>h2').text();

            $('.pic img').attr('src',detail)
            $('.caption h2').text(name)


         }
         
      })



      $('.closer').on('click',function(){
         $('.poptrox-overlay').hide();
      })
   },
   error: function () { }

});


