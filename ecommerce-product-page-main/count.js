
export default function count(){
    const incrementCount = document.querySelector(".buttons_img--plus");
    const decrementCount = document.querySelector(".buttons_img--minus");
    
    const totalCount = document.querySelector(".buttons_quantity");
    
    var count = 0;
    
    totalCount.innerHTML = count;
    
    const handleIncrement = () => {
      count++;
      totalCount.innerHTML = count;
      if(count == 5) {
        count--;
      }
    };
    
    const handleDecrement = () => {
      
      totalCount.innerHTML = count;
      if(count == 0 ) {
        count;
      }
      else{
        count--;
      }
    };
    
    incrementCount.addEventListener("click", handleIncrement);
    decrementCount.addEventListener("click", handleDecrement);
    
    }
    