$(()=>{

  $('#newEntry').hide()
  $('.seeTotal').hide()
  $('.totalSpent').hide()
  $('.amountSpent').addClass('blue')
  $('.typeTotal').hide()

 //initializing variables
 let total;
 let type;
 let date;
 let name;
 let amount;
 let amountSpent = 0;

 //for tracking how much spent on each category
 let foodTotal = 0;
 let billsTotal = 0;
 let clothingTotal = 0;
 let entertainmentTotal = 0;

 let foodTotalPercent = 0;
 let billsTotalPercent = 0;
 let entertainmentTotalPercent = 0;
 let clothingTotalPercent = 0;

 // filling the totals

 $('.amountSpent').append(`<h2 class="totalsTest">TOTAL SPENT = $${amountSpent}</h2>`);
 $('.foodTotal').append(`<h2 class="totalsTest">FOOD = $${foodTotal}</h2>`);
 $('.billsTotal').append(`<h2 class="totalsTest">BILLS = $${billsTotal}</h2>`);
 $('.entertainmentTotal').append(`<h2 class="totalsTest">ENTERTAINMENT = $${entertainmentTotal}</h2>`);
 $('.clothingTotal').append(`<h2 class="totalsTest">CLOTHING = $${clothingTotal}</h2>`);



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
   amount = parseInt($('#asdf').val())

   // console.log(type);
   // console.log(date);
   // console.log(name);
   // console.log(amount);

   if (total > 0) {
     $('.total').html(`<h1 class="totalRemaining">$${total}</h1>`);
   } else if (total <= 0) {
     alert("Your out of money");
   }




   if (total <= 0){
     alert('You have to enter your total budget');
   }
   else if (total > 0){
     type = $('#spending-select').val();
     date = $('.dateOfEntry').val();
     name = $('.nameInput').val();
     amount = parseInt($('#asdf').val());

     //logic to not submit form if there are missing blanks
     if (type === "") {
       alert('You have to pick a category');
       return;
     };
     if (date === "") {
       alert('You need to enter the date');
       return;
     };
     if (name === "") {
       alert('You need to name your transaction');
       return;
     };
     if (amount === "") {
       alert('You need to enter a transaction amount');
       return;
     };

     // console.log(type);
     // console.log(date);
     // console.log(name);
     // console.log(amount);


     $('#listItems').append(`<div class="listItem ${type}">
     <p class="entry date" id="left">${date}</p>
     <p class="entry name" id="left">${name}</p>
     <p class="entry price">$${amount}</p>
     </div>`);

     total -= amount;
     //$('.total').removeClass(`total`);
     $('.total').html(`<h1 class="totalRemaining">$${total}</h1>`)

     if (total > 0) {
       $('.total').html(`<h1 class="totalRemaining">$${total}</h1>`)
     }
     else if (total <= 0) {
       total += parseInt(amount);
       $('.total').html(`<h1 class="totalRemaining">$${total}</h1>`)
       alert("You do not have enough money for this transaction");
     };




     //totals editing
     amountSpent += parseInt(amount);
     console.log(amountSpent)
     $('.amountSpent').html(`<h2 class="totalsTest">TOTAL SPENT = $${amountSpent}</h2>`)

     if (type ==="food") {
       foodTotal += parseInt(amount);
       // $('.foodTotal').html(`<h2 class="totalsTest">FOOD = $${foodTotal}</h2>`)
     }
     if (type === "bills") {
       billsTotal += parseInt(amount);
       // $('.billsTotal').html(`<h2 class="totalsTest">BILLS = $${billsTotal}</h2>`)
     }
     if (type === "entertainment") {
       entertainmentTotal += parseInt(amount);
       // $('.entertainmentTotal').html(`<h2 class="totalsTest">ENTERTAINMENT = $${entertainmentTotal}</h2>`)
     }
     if (type === "clothing") {
       clothingTotal += parseInt(amount);
       // $('.clothingTotal').html(`<h2 class="totalsTest">CLOTHING = $${clothingTotal}</h2>`)
     }

     $('.totalUsed').css("flex", `${amountSpent}`);
     $('.totalLeft').css("flex", `${total}`);

     $('.foodTotal').html(`<h2 class="totalsTest">FOOD = $${foodTotal}</h2>`)
     $('.billsTotal').html(`<h2 class="totalsTest">BILLS = $${billsTotal}</h2>`)
     $('.entertainmentTotal').html(`<h2 class="totalsTest">ENTERTAINMENT = $${entertainmentTotal}</h2>`)
     $('.clothingTotal').html(`<h2 class="totalsTest">CLOTHING = $${clothingTotal}</h2>`)
     $('.dollars').addClass('blue')
     $('.percent').removeClass('blue')

     $('#newEntry').hide()
   }
 };

 document.querySelector("#today").valueAsDate = new Date();

 $('#all').on('click', ()=>{
    $('.food').show()
    $('.bills').show()
    $('.clothing').show()
    $('.entertain').show()
    $('.amountSpent').addClass('blue')
    $('.entertainmentTotal').removeClass('blue')
    $('.foodTotal').removeClass('blue')
    $('.billsTotal').removeClass('blue')
    $('.clothingTotal').removeClass('blue')
  });

  $('#food').on('click', ()=>{
    $('.seeTotals').hide()
    $('.totalSpent').show()
    $('.food').show()
    $('.bills').show()
    $('.clothing').show()
    $('.entertain').show()
    $('.bills').hide()
    $('.clothing').hide()
    $('.entertain').hide()
    $('.foodTotal').addClass('blue')
    $('.billsTotal').removeClass('blue')
    $('.entertainmentTotal').removeClass('blue')
    $('.clothingTotal').removeClass('blue')
  });

  $('#bills').on('click', ()=>{
    $('.seeTotals').hide()
    $('.totalSpent').show()
    $('.food').show()
    $('.bills').show()
    $('.clothing').show()
    $('.entertain').show()
    $('.food').hide()
    $('.clothing').hide()
    $('.entertain').hide()
    $('.billsTotal').addClass('blue')
    $('.foodTotal').removeClass('blue')
    $('.entertainmentTotal').removeClass('blue')
    $('.clothingTotal').removeClass('blue')
  });

  $('#clothing').on('click', ()=>{
    $('.seeTotals').hide()
    $('.totalSpent').show()
    $('.food').show()
    $('.bills').show()
    $('.clothing').show()
    $('.entertain').show()
    $('.bills').hide()
    $('.food').hide()
    $('.entertain').hide()
    $('.clothingTotal').addClass('blue')
    $('.foodTotal').removeClass('blue')
    $('.entertainmentTotal').removeClass('blue')
    $('.billsTotal').removeClass('blue')
  });

  $('#entertain').on('click', ()=>{
    $('.seeTotals').hide()
    $('.totalSpent').show()
    $('.food').show()
    $('.bills').show()
    $('.clothing').show()
    $('.entertain').show()
    $('.bills').hide()
    $('.clothing').hide()
    $('.food').hide()
    $('.entertainmentTotal').addClass('blue')
    $('.foodTotal').removeClass('blue')
    $('.billsTotal').removeClass('blue')
    $('.clothingTotal').removeClass('blue')

  });



  $('.seeTotals').hover( ()=>{
    $('.plusButton').hide()
    $('.seeTotal').show()
  }, ()=>{
    $('.seeTotal').hide()
    $('.plusButton').show()
  });

  //show the totals on click of the see totals button
  $('.seeTotals').on('click', showTotals);

  function showTotals(){
    $('.seeTotals').hide()
    $('.totalSpent').show()
    $('.typeTotal').show()
  }

  //minimize totals bottom bar
  $('.minimize').on('click', minimizeTotals);

  function minimizeTotals(){
    $('.totalSpent').hide()
    $('.typeTotal').hide()
    $('.seeTotals').show()
  }

  $('.dollars').on('click', changeDollars);

  function changeDollars(){
    $('.foodTotal').html(`<h2 class="totalsTest">FOOD = $${foodTotal}</h2>`)
    $('.billsTotal').html(`<h2 class="totalsTest">BILLS = $${billsTotal}</h2>`)
    $('.entertainmentTotal').html(`<h2 class="totalsTest">ENTERTAINMENT = $${entertainmentTotal}</h2>`)
    $('.clothingTotal').html(`<h2 class="totalsTest">CLOTHING = $${clothingTotal}</h2>`)
    $('.dollars').addClass('blue')
    $('.percent').removeClass('blue')
    console.log(billsTotal)
    console.log(amountSpent)
    console.log((billsTotal/amountSpent)*100)
  }

  $('.percent').on('click', changePercent);

  // $('.typeTotal').on('click', ()=>{
  //   if (foodTotal > 0){
  //     foodTotalPercent = (foodTotal / amountSpent)*100
  //   }
  //
  //   if (billsTotal > 0){
  //     billsTotalPercent = (billsTotal/amountSpent)*100
  //   }
  //   if (entertainmentTotal > 0){
  //     entertainmentTotalPercent = (entertainmentTotal / amountSpent)*100
  //   }
  //   if (clothingTotal > 0){
  //     clothingTotalPercent = (clothingTotal / amountSpent)*100
  //   }
  // });


  function changePercent(){
    if (foodTotal > 0){
      foodTotalPercent = (foodTotal / amountSpent)*100
    }
    if (billsTotal > 0){
      billsTotalPercent = (billsTotal/amountSpent)*100
    }
    if (entertainmentTotal > 0){
      entertainmentTotalPercent = (entertainmentTotal / amountSpent)*100
    }
    if (clothingTotal > 0){
      clothingTotalPercent = (clothingTotal / amountSpent)*100
    }

    $('.foodTotal').html(`<h2 class="totalsTest">FOOD = ${foodTotalPercent}%</h2>`)
    $('.billsTotal').html(`<h2 class="totalsTest">BILLS = ${billsTotalPercent}%</h2>`)
    $('.entertainmentTotal').html(`<h2 class="totalsTest">ENTERTAINMENT = ${entertainmentTotalPercent}%</h2>`)
    $('.clothingTotal').html(`<h2 class="totalsTest">CLOTHING = ${clothingTotalPercent}%</h2>`)
    $('.dollars').removeClass('blue')
    $('.percent').addClass('blue')
    console.log(billsTotalPercent)
    console.log(amountSpent)
  }



 $('#new').on('click',()=>{
   $('#newEntry').show()
 });

 $('#buttonId').on('click', ()=>{
   $('#newEntry').hide()
 });


});
