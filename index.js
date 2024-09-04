
let mainPage= document.querySelector(".main-section");
let twoPage= document.querySelector(".heddin_section");

let btn= document.querySelector(".btn");

 let number_div= document.querySelectorAll(".inner_divNumber");

let rate= document.querySelector(".rateMasseg");
let error_p= document.querySelector(".heddinError");

 number_div.forEach(number_div => {
    number_div.addEventListener('click', function () {


        let text=this.textContent;
        console.log( text);  //   للتاكيد طباعة نص الحاوية إلى الكونسول

       rate.textContent=`You selected ${text} out of 5 `



       btn.addEventListener("click",function(){
      
        mainPage.classList.toggle('heddin_section')
        mainPage.classList.toggle('main-section')

        twoPage.classList.toggle('heddin_section')
       twoPage.classList.toggle('rate_section')
     }) 


    
    })
    });
console.log("one")

btn.addEventListener("click",function(){
      
    error_p.classList.toggle('heddinError')
    error_p.classList.toggle('showError')

    
 }) 

