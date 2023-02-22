

// window.addEventListener('DOMContentLoaded', () => {

//     let drag = document.querySelector('.draggable');

//     drag.addEventListener('dragstart', dragStart);

// })

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'blue';
ctx.fillRect(10, 10, 150, 150);

window.addEventListener('resize', function(){

    if( this.window.innerWidth < 620)
        console.log('smartphone');
    else if ( this.window.innerWidth < 920 )
        console.log('tablet');
    else {
        console.log('desktop');
    }

})
  