$(()=>{

  $('#newEntry').hide()

  let total;
  let type;
  let date;
  let name;
  let amount;

  $('.enterTotal').on('click', totalMoney);

  function totalMoney(){
    total = prompt("How much money you got?","Enter a number");
    $('.total').append(`<h1 class="totalRemaining">$${total}</h1>`);
    $('.enterTotal').hide();
  }


  $('.saveButton').on('click', submitEntry);

  function submitEntry(){
    type = $('#spending-select').val()
    date = $('.dateOfEntry').val()
    name = $('.nameInput').val()
    amount = $('.amountSpent').val()

    // console.log(type);
    // console.log(date);
    // console.log(name);
    // console.log(amount);

    $('#listItems').append(`<div class="listItem ${type}">
    <p class="entry date" id="left">${date}</p>
    <p class="entry name" id="left">${name}</p>
    <p class="entry price">$ <em class="numberTotal">${amount}</em></p>
    </div>`);

    total -= amount;
    //$('.total').removeClass(`total`);
    $('.total').html(`<h1 class="totalRemaining">$${total}</h1>`);

    if (total > 0) {
      $('.total').html(`<h1 class="totalRemaining">$${total}</h1>`);
    } else if (total <= 0) {
      alert("Your out of money");
    }
  };

  //let numberTotal = $('.numberTotal').html();
  //$('.total') =-
  // let totals = $( ":nth-child(3)" ).nextAll( ".price" ).val();
  // console.log(totals);

  // let numberTotal = $('.numberTotal').val()
  // console.log(numberTotal)

  document.querySelector("#today").valueAsDate = new Date();

  // let $btns = $('.btn').click(function() {
  //   if (this.id == 'all') {
  //     $('#parent > div').fadeIn(450);
  //   } else {
  //     var $el = $('.' + this.id).fadeIn(450);
  //     $('#parent > div').not($el).hide();
  //   }
  //   $btns.removeClass('active');
  //   $(this).addClass('active');
  // })

  $('#all').on('click', ()=>{
    $('.food').show()
    $('.bills').show()
    $('.clothing').show()
    $('.entertain').show()
  });

  $('#food').on('click', ()=>{
    $('.food').show()
    $('.bills').show()
    $('.clothing').show()
    $('.entertain').show()
    $('.bills').hide()
    $('.clothing').hide()
    $('.entertain').hide()
  });

  $('#bills').on('click', ()=>{
    $('.food').show()
    $('.bills').show()
    $('.clothing').show()
    $('.entertain').show()
    $('.food').hide()
    $('.clothing').hide()
    $('.entertain').hide()
  });

  $('#clothing').on('click', ()=>{
    $('.food').show()
    $('.bills').show()
    $('.clothing').show()
    $('.entertain').show()
    $('.bills').hide()
    $('.food').hide()
    $('.entertain').hide()
  });

  $('#entertain').on('click', ()=>{
    $('.food').show()
    $('.bills').show()
    $('.clothing').show()
    $('.entertain').show()
    $('.bills').hide()
    $('.clothing').hide()
    $('.food').hide()
  });

  $('#new').on('click', ()=>{
    $('#newEntry').show()
  });

  $('#buttonId').on('click', ()=>{
    $('#newEntry').hide()
  });


});