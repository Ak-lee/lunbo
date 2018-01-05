var allButtons = $('#buttons > span')

// 为每个按钮添加事件监听
for (let i = 0; i < allButtons.length; i++) {
  $(allButtons[i]).on('click', function(x) {
    var index = $(x.currentTarget).index()
    var p = index * -640
    $('#images').css({
      transform: 'translate(' + p + 'px)'
    })
    $(x.currentTarget)
      .addClass('red')
      .siblings('.red').removeClass('red')
    n=index;
  })
}

var n=0;
var size=allButtons.length;
allButtons.eq(n%size).trigger('click')

var timerId=setInterval(()=>{
    n=n+1;
    allButtons.eq(n%size).trigger('click')
},3000)

$('.window').on('mouseenter', function() {
    window.clearInterval(timerId)
  })
  
  $('.window').on('mouseleave', function() {
    timerId = setInterval(() => {
      n += 1
      allButtons.eq(n % size).trigger('click')
    }, 3000)
  })




