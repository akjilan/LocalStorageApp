//set timeout() --clearTimeout(interval ID)
//set interval()--clearInterval(interval ID)

// set time out 
// setTimeout(() => {
//     console.log('jilan')
    
// }, 3000);
// console.log('jilan 2nd');
//set interval

// console.log('a');
// let i = 0;
// const myInterval= setInterval(() => {

//     console.log(++i);
//     if(i==5){
//         clearInterval(myInterval);
//     }
    
// }, 1000);


//////////////////////////

// console.log(1);
// console.log(2);
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
// console.log(4);
// console.log(5);

////////////////////////////
// content editable: 

// document.body.contentEditable=true
////////////////////////////////
// explore browser api 
//prompt/confirm:

// prompt('what is it?');
// const anything = confirm('jabi?');
// console.log(anything);

//cookies
// document.cookie

//local storage/session storage:
// first one doesnot expire , second one expires. 
//if i want keep a object in storage i will have to stringify cause it only stores in string formet.
//3.Can getItem(value) and setItem(key,value) or removeItem(key)

// undefined reasons:
// function myF(){
//     const a = 5;
// }
// console.log(myF()); //give undefined.

// dont set undefined to anything, use null instead
// dont delete an element of an array, use splice instead.

//true-false:

/*
true:
any number except 0 , any string except '' , empty array



false:
0,false,undefined,null

*/

// let x='jljdskjl';
// if(x){
//     console.log('j');
// }


//callback function:
// def: a callback function is a function that is passed as an argument to another function and is executed later, typically after the completion of an asynchronous operation or at a specific event. 
// function greet(name, callback) {
//     console.log(`hello ${name} ! `);
//     callback();
//   }
  
//   function sayGoodbye() {
//     console.log("Goodbye!");
//   }
//   function sayWelcome() {
//     console.log("welcome to the group! ");
//   }
//   greet("jilan", sayWelcome);
//   greet("Alice", sayGoodbye);

///////////////////////////////
//function arguments pass by reference pass by value

//note:changing a part of  array or object  will keep the same refernce and change inside of it 
// but premitive types change the reference not value ..still keep the prev value after calling the function 

//random practices:

// const myArray = [1,2,3,4,5,6,7,8,9];
// const newArray=[];
// myArray.map(x=> newArray.push(x*2));
// console.log(newArray);

// local storage 

const myAddFunction = ()=>{
    console.log('jilanaaa')
    const keyId = document.getElementById('inputKey');
    const key = keyId.value;
    const valueId = document.getElementById('inputValue');
    const value = valueId.value;
    keyId.value='';
    valueId.value='';
    if(key&&value){
        // localStorage.setItem(key,value);
        saveItemToLocalStorge(key,value);

    }
    else if(!key||!value){
        alert('please give id and value.');
    }
    addProductToDisplay(key,value);

}
document.getElementById('addButton').addEventListener('click',myAddFunction)
const addProductToDisplay= (key,value)=>{
    const divContainer = document.getElementById('divContainer');
    const myItem = document.createElement('li');
    myItem.innerHTML=`
     ${key} : ${value};
    `
    myItem.classList.add('myList');
    if(key&&value){
        divContainer.appendChild(myItem);
    }

}

// const cart = {name: 'jilan',age : 25, town: 'thakurgaon'}
// localStorage.setItem('cart' , JSON.stringify(cart));

const getCartFromStorage = () =>{
    let savedCart = localStorage.getItem('cart');
    let cart = {};
    if(savedCart){
        cart= JSON.parse(savedCart);
    }
    return cart ;
}
const saveItemToLocalStorge = (key,value)=>{
    const cart = getCartFromStorage();
    // add product to cart 
    cart[key] = value;
    const cartStrigified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStrigified);
}

const displayStoredProducts = () =>{
    const cart = getCartFromStorage();
    for(const item in cart){
        const value = cart[item];
        console.log(item,value);
        addProductToDisplay(item,value);
    }
}

displayStoredProducts();



