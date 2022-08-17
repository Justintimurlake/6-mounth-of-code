export default function addToCart () {

    const number = document.querySelector('.buttons_quantity');
    
    const buttonBuy = document.querySelector('.buttons_buy');
    
    const product = document.querySelector('.content_amount');
    
    const empty = document.querySelector('.cart-info--empty');
    
    const attantion = document.querySelector('.attantion');
    
    const price = document.querySelector('.amount_price--amount');
    
    const trash = document.querySelector('.fa-trash-can');
    
    buttonBuy.addEventListener('click', () => {
        // let num = Number(number);
        if(number.innerText != "0") {
            product.style.display = 'flex';
            empty.style.display = 'none'; 
            attantion.style.display = 'flex';
            if(number.innerText == "1") {
                price.innerText = `$125.00 x ${number.innerText} = $125.00`;
            } else
            if(number.innerText == "2") {
                price.innerText = `$125.00 x ${number.innerText} = $250.00`;
            }  else
            if(number.innerText == "3") {
                price.innerText = `$125.00 x ${number.innerText} = $375.00`;
            }  else
            if(number.innerText == "4") {
                price.innerText = `$125.00 x ${number.innerText} = $500.00`;
            }  else
            if(number.innerText == "5") {
                price.innerText = `$125.00 x ${number.innerText} = $625.00`;
            }
            number.innerText = "0";
    
          
    
        } else if (number.innerText == "0") {
            product.style.display = 'none';
            empty.style.display = 'block';
            attantion.style.display = 'none';
        }
    });
    
    trash.addEventListener("click", function() {
        product.style.display = 'none';
            empty.style.display = 'block';
            attantion.style.display = 'none';
    });
    
    
    }
    