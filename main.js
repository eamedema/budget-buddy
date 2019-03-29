$(()=>{

  $('#newEntry').hide()

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
     console.log(total);
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
     $('.amountSpent').html(`<h2 class="totalsTest">TOTAL SPENT = $${amountSpent}</h2>`)

     if (type ==="food") {
       foodTotal += parseInt(amount);
       $('.foodTotal').html(`<h2 class="totalsTest">FOOD = $${foodTotal}</h2>`)
     }
     if (type === "bills") {
       billsTotal += parseInt(amount);
       $('.billsTotal').html(`<h2 class="totalsTest">BILLS = $${billsTotal}</h2>`)
     }
     if (type === "entertainment") {
       entertainmentTotal += parseInt(amount);
       $('.entertainmentTotal').html(`<h2 class="totalsTest">ENTERTAINMENT = $${entertainmentTotal}</h2>`)
     }
     if (type === "clothing") {
       clothingTotal += parseInt(amount);
       $('.clothingTotal').html(`<h2 class="totalsTest">CLOTHING = $${clothingTotal}</h2>`)
     }

     $('#newEntry').hide()
   }
 };

 document.querySelector("#today").valueAsDate = new Date();

 $('#new').on('click',()=>{
   $('#newEntry').show()
 });

 $('#buttonId').on('click', ()=>{
   $('#newEntry').hide()
 });
 // $('#buttonId').on('click', ()=>{
 //   $('#newEntry').hide()
 // });


});
