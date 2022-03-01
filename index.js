// // Your code here

// const giveDodgerLife = () => {
//      const dodger = document.getElementById('dodger');
//      dodger.style.backgroundColor = "#FF69B4";
//      document.addEventListener('keydown', (e) => {
//      if (e.key === 'ArrowLeft') {
//         const leftNumber = dodger.style.left.replace("px", "");
//         const left = parseInt(leftNumber, 10);
//         if (left > 0) {
//         dodger.style.left = `${left-2}px`
//         }
//      }
//      if (e.key === 'ArrowRight') {
//         const rightNumber = dodger.style.left.replace("px", "") 
//         const right = parseInt(rightNumber, 10);
//         if(right < 360) {
//         dodger.style.left = `${right+2}px`
//         }
//      }
//      if (e.key === 'ArrowUp') {
//         const topNumber = dodger.style.bottom.replace('px', '')
//         const top = parseInt(topNumber, 10)
//         if (top < 380) {
//         dodger.style.bottom = `${top+2}px`
//         }
//      }
//      if (e.key === 'ArrowDown') {
//          const bottomNumber = dodger.style.bottom.replace("px", "")
//          const bottom = parseInt(bottomNumber, 10)
//          if (bottom > 0) {
//          dodger.style.bottom = `${bottom-2}px`
//          }
//      }

// })
// }


const dodger = document.getElementById('dodger');
dodger.style.backgroundColor = "#FF69B4";

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      moveDodgerLeft()
    }
    else if (e.key === 'ArrowRight') {
      moveDodgerRight()  
    }
})

    function moveDodgerLeft() {
        const leftNumber = dodger.style.left.replace("px", "");
        const left = parseInt(leftNumber, 10);
        if (left > 0) {
        dodger.style.left = `${left-1}px`
        }
    }
    function moveDodgerRight() {
        const rightNumber = dodger.style.left.replace("px", "");
        const right = parseInt(rightNumber, 10);
        if (right > 0) {
        dodger.style.left = `${right+1}px`
        }
    }

