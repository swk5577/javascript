
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

   },
   error: function () { }
});
