let dodger = document.querySelector('body div#game div#dodger')

const moveDodgerLeft = () => {
  let leftNumbers = dodger.style.left.replace('px', '')
  let left = parseInt(leftNumbers, 10)
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

const moveDodgerRight = () => {
  let leftNumbers = dodger.style.left.replace('px', '')
  let left = parseInt(leftNumbers, 10)
  if (left < 360) {
    dodger.style.left = `${left + 1}px`
  }
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft') {
    moveDodgerLeft()
  }
})

document.addEventListener('keydown', function(e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight()
  }
})


// const moveDodger = () => {
//   let leftNumbers = dodger.style.left.replace('px', '')
//   let left = parseInt(leftNumbers, 10)

//   if (left > 0) {
//     dodger.style.left = `${left - 1}px`
//   } else if (left < 360) {
//     dodger.style.left = `${left + 1}px`
//   }
// }

// document.addEventListener('keydown', function(e) {
//   if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
//     moveDodger()
//   }
// })