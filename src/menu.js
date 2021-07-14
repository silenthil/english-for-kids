import Categories from '@/categori.js'
import Cards from '@/cards'
import Stats from '@/stats'

export default class Menu {
    constructor() {

    }
    menu
    burger
    link
    line

    init() {
        this.creatyMain()
        for (let i = 0; i <= 2; i++) {
            this.line = document.createElement('div')
            this.burger.append(this.line)
            this.line.classList.add(`line`)
            this.line.innerText = ' '
        }
        for (let i = 0; i <= 9; i++) {
            this.link = document.createElement('a')
            this.menu.append(this.link)
            if (i !== 0) {
                this.link.classList.add('link')
                if (i === 1) {
                    this.link.innerHTML = 'Animals A'
                    this.Eventadding(i)
                }
                if (i === 2) {
                    this.link.innerHTML = 'Animals B'
                    this.Eventadding(i)
                }
                if (i === 3) {
                    this.link.innerHTML = 'Clothes'
                    this.Eventadding(i)
                }
                if (i === 4) {
                    this.link.innerHTML = 'Emotions'
                    this.Eventadding(i)
                }
                if (i === 5) {
                    this.link.innerHTML = 'Food 1'
                    this.Eventadding(i)
                }
                if (i === 6) {
                    this.link.innerHTML = 'Food 2'
                    this.Eventadding(i)
                }
                if (i === 7) {
                    this.link.innerHTML = 'Cities'
                    this.Eventadding(i)
                }
                if (i === 8) {
                    this.link.innerHTML = 'Nature';
                    this.Eventadding(i)
                }
                if (i === 9) {
                    this.link.innerHTML = 'Stats';
                    this.Eventadding(i);
                }
            } else {
                this.link.innerHTML = 'Main Page'
                this.link.classList.add('link_main')
                this.link.addEventListener('click', () => {
                    document.querySelector('.main').replaceWith()
                    const categories = new Categories()
                    categories.init()
                    this.burgerChange()
                    this.menu.classList.toggle('menu_')
                    this.DeleteCurrentClass()
                    event.currentTarget.classList.toggle('current')
                })
            }
        }
    }

    burgerChange() {
        document.querySelectorAll('.line').forEach((el) => {
            el.classList.toggle('change')
        })
    }

    creatyMain() {
        this.burger = document.querySelector('.burger')
        this.menu = document.querySelector('.menu')
        this.burger.addEventListener('click', () => {
            this.burgerChange()
            this.menu.classList.toggle('menu_')
        })
    }

    Eventadding(i) {
        if( i !== 9 ){
            this.link.addEventListener('click', () => {
                const result = new Cards(i - 1)
                result.init()
                this.burgerChange()
                this.menu.classList.toggle('menu_')
                this.DeleteCurrentClass()
                event.currentTarget.classList.toggle('current')
            })
        }else{
            this.link.addEventListener('click', () => {
                const result = new Stats()
                result.init()
                this.burgerChange()
                this.menu.classList.toggle('menu_')
                this.DeleteCurrentClass()
                event.currentTarget.classList.toggle('current')
            })
        }
    }

    DeleteCurrentClass() {
        document.querySelectorAll('.current').forEach(el => {
            el.classList.remove('current')
        })
    }
}
