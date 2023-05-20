let cart = []



document.querySelector('.cart').addEventListener('click', () => {
    document.querySelector('.korzina').style.display = 'block'
    document.querySelector('.bbb').style.display = 'none'

    for (gridcontainer of cart) {
        document.querySelector('.korzina').append(gridcontainer)
    }

})

document.querySelector('.back-to-main').addEventListener('click', () => {
    document.querySelector('.korzina').style.display = 'none'
    document.querySelector('.bbb').style.display = 'block'


})

let buttons = document.querySelectorAll('.add-cart')

for (button of buttons) {
    button.addEventListener('click', addToCart)
}

function addToCart(event) {
    cart.push(event.target.parentElement)
}
