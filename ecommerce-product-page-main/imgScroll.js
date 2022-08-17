export default function imgScroll () {

    const next1 = document.querySelector('.images_main--next');
    
    const prev1 = document.querySelector('.images_main--prev');
    
    prev1.addEventListener('click', function prev(){
        if(i <= 0) i = images.length;	
        i--;
        return setImg();			 
    });
    next1.addEventListener('click', function next(){
        if(i >= images.length-1) i = -1;
        i++;
        return setImg();			 
    });
    
    const slider_img = document.querySelector('.images_main--img');
    var images = ['image-product-1.jpg', 'image-product-2.jpg', 'image-product-3.jpg', 'image-product-4.jpg',];
    var i = 0;
    
    
    function setImg(){
        return slider_img.setAttribute('src', "./images/"+images[i]);
        
    }
    
    }