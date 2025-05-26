
  export function inputfocus(e){
    e.target.nextElementSibling.style.transform = 'translateY(-140%)';
  }

  export function inputblur(e){
    if(e.target.value == ""){
      e.target.nextElementSibling.style.transform = 'translateY(0%)';
    }else{
      void(0)
       }
  }



