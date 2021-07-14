import Cards from '@/cards'
import Food1 from '@/assets/img/food.jpg'
import Food2 from '@/assets/img/Food2.png'
import Clothes from '@/assets/img/clothes.jpg'
import Nature from '@/assets/img/nature.jpg'
import Animals_A from '@/assets/img/Animals_A.jpg'
import Animals_B from '@/assets/img/Animals_B.jpg'
import Places from '@/assets/img/Places.jpg'
import emotions from '@/assets/img/emotions.png'

export default class Categories {
    constructor() { }

    main; card; image; info; btn; selectMode

    init() {
        this.ExistCheck()
        for (let i = 1; i <= 8; i++) {
            this.CreateCard()
            if (i === 1) {
                this.info.innerHTML = '<span>Animals A</span>'
                this.image.style.background = `no-repeat 60% url(${Animals_A})`
                this.addEvent(i)
            }
            if (i === 2) {
                this.info.innerHTML = '<span>Animals B</span>'
                this.image.style.background = `no-repeat 60% url(${Animals_B})`
                this.addEvent(i)
            }
            if (i === 3) {
                this.info.innerHTML = '<span>Clothes</span>'
                this.image.style.background = `no-repeat 60% url(${Clothes})`
                this.addEvent(i)
            }
            if (i === 4) {
                this.info.innerHTML = '<span>Emotions</span>'
                this.image.style.background = `no-repeat 60% url(${emotions})`
                this.addEvent(i)
            }
            if (i === 5) {
                this.info.innerHTML = '<span>Food 1</span>'
                this.image.style.background = `no-repeat 60% url(${Food1})`
                this.addEvent(i)
            }
            if (i === 6) {
                this.info.innerHTML = '<span>Food 2</span>'
                this.image.style.background = `no-repeat 60% url(${Food2})`
                this.addEvent(i)
            }
            if (i === 7) {
                this.info.innerHTML = '<span>Cities</span>'
                this.image.style.background = `no-repeat 60% url(${Places})`
                this.addEvent(i)
            }
            if (i === 8) {
                this.info.innerHTML = '<span>Nature</span>'
                this.image.style.background = `no-repeat 60% url(${Nature})`
                this.addEvent(i)
            }
            this.addChilds()
        }
        this.clickOnEmpty()
    }
    ExistCheck() {
        if (document.querySelector('.main')) {
            this.main = document.querySelector('.main')
        } else {
            this.main = document.createElement('div')
            document.querySelector('.container').append(this.main)
            this.main.classList.add('main')
        }
    }

    CreateCard() {
        this.card = document.createElement('div')
        this.image = document.createElement('div')
        this.info = document.createElement('div')
        this.selectMode = document.createElement('div')
        this.selectMode.classList.add(`selectMode`)
        this.info.classList.add('info')
        this.image.classList.add('image')
        if (document.querySelector('.checkbox').checked) {
            this.card.classList.add('card')
            this.card.classList.add('selected')
        } else {
            this.card.classList.add('card')
        }
        this.main.append(this.card)
    }

    clickOnEmpty() {
        this.main.addEventListener('click', () => {
            document.querySelector('.menu').classList.remove('menu_')
            document.querySelectorAll('.line').forEach((el) => {
                el.classList.remove('change')
            })
        })
    }

    addEvent(i) {
        this.card.addEventListener('click', () => {
            const result = new Cards(i - 1)
            result.init()
            this.DeleteCurrentClass()
            this.AddCurrentClass()
        })
    }

    addChilds() {
        this.card.prepend(this.image)
        this.card.append(this.info)
        this.info.prepend(this.selectMode)
    }

    AddCurrentClass() {
        document.querySelectorAll('.link').forEach(el => {
            if (el.innerText === event.currentTarget.innerText) {
                el.classList.toggle('current')
            }
        })
    }

    DeleteCurrentClass() {
        document.querySelectorAll('.current').forEach(el => {
            el.classList.remove('current')
        })
    }
}


