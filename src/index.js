import '@/styles/style'
import Menu from '@/menu.js'
import Categories from '@/categori.js'
const menu = new Menu()
const categories = new Categories()
const selectBTN = document.querySelector('.checkbox')
document.addEventListener('DOMContentLoaded', () => {
    menu.init()
    categories.init()
})
selectBTN.addEventListener('click', () => {
    document.querySelectorAll('.card').forEach(item => {
        item.classList.toggle('selected')
    })
    document.querySelector('.main').replaceWith()
    categories.DeleteCurrentClass() 
    document.querySelector('.link_main').classList.toggle('current')
    categories.init()
})



