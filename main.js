$(()=>{

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
    type = $('.category').val()
    date = $('.dateOfEntry').val()
    name = $('.nameInput').val()
    amount = $('.amountSpent').val()

    $('#listItems').append(`<div class="listItem ${type}">
    <p class="entry date">${date}</p>
    <p class="entry name">${name}</p>
    <p class="entry amount">${amount}</p>
    </div>`);

    total -= amount;
    $('.total').removeClass(`total`);
    $('.total').append(`<h1>$${total}</h1>`);
  };





  let $btns = $('.btn').click(function() {
    if (this.id == 'all') {
      $('#parent > div').fadeIn(450);
    } else {
      var $el = $('.' + this.id).fadeIn(450);
      $('#parent > div').not($el).hide();
    }
    $btns.removeClass('active');
    $(this).addClass('active');
  })  


});
