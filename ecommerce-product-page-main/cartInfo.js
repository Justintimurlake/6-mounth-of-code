export default function cartInfo() {
    const cartBtn = document.querySelector('.navbar_img--cart');
    const cartInfo = document.querySelector('.cart-info ');

    const content = document.querySelector('.content_amount--info');
    const content2 = document.querySelector('.amount_price--img');
    const content3 = document.querySelector('.amount_price');
    const content4 = document.querySelector('.amount_price--name');
    const content5 = document.querySelector('.amount_price--amount');
    const content6 = document.querySelector('.fa-trash-can');

        window.addEventListener("click", function(e) {
            if(e.target == cartBtn) {
                cartInfo.classList.toggle('cart-info--none');
            } else if (e.target != cartBtn && e.target != cartInfo && e.target.parentNode != cartInfo && e.target.parentNode.parentNode != cartInfo  && e.target != content && e.target != content2 && e.target != content3 && e.target != content4 && e.target != content5 && e.target != content6 ) {
                cartInfo.classList.add('cart-info--none');
            }
       });
    };