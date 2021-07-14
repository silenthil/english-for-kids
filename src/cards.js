import example from '@/examples.js'
import Categories from '@/categori.js'

export default class Cards {
    constructor(categori) {
        this.categori = categori;
    }

    cards
    btn
    startPlay
    audio
    source
    info
    checkForTimeout
    Game_started
    arrayOfRamndomInt
    SelectedPic
    random
    Erorrs
    Stars

    init() {
        document.querySelector('.main').replaceWith()
        if (document.querySelector('.checkbox').checked) {
            this.playing()
        } else {
            this.training()
        }
        this.Game_started = null;
    }

    playing() {
        this.checkForTimeout = true;
        this.main = document.createElement('div')
        document.querySelector('.container').append(this.main)
        this.main.classList.add('main')
        this.arrayOfRamndomInt = []
        this.Erorrs = 0
        this.Game_started = null
        this.AddSoundsforPlay()
        for (let i = 1; i <= 8; i++) {
            this.createElement(i - 1)
            this.addAudio(i)
            this.AddEvents(i)
            this.image.style.background = `no-repeat 60% url(${example[this.categori][i - 1].image})`
            this.Appendinfo()
        }
        this.main.addEventListener('click', () => {
            document.querySelector('.menu').classList.remove('menu_')
            document.querySelectorAll('.line').forEach((el) => {
                el.classList.remove('change')
            })
        })
        this.AddStartBtn()
        this.CreateStars()
    }

    training() {
        this.main = document.createElement('div')
        document.querySelector('.container').append(this.main)
        this.main.classList.add('main')
        for (let i = 1; i <= 8; i++) {
            this.createElement()
            this.addAudio(i)
            this.AddEvents(i)
            this.info.innerHTML = `<div>${example[this.categori][i - 1].word}</div>`
            this.image.style.background = `no-repeat 60% url(${example[this.categori][i - 1].image})`
            this.Appendinfo()
            this.main.addEventListener('click', () => {
                document.querySelector('.menu').classList.remove('menu_')
                document.querySelectorAll('.line').forEach((el) => {
                    el.classList.remove('change')
                })
            })
        }
    }

    createElement(i) {
        this.card = document.createElement('div')
        this.image = document.createElement('div')
        this.info = document.createElement('div')
        this.btn = document.createElement('div')
        this.selectMode = document.createElement('div')
        this.btn.classList.add(`btn`)
        this.selectMode.classList.add(`selectMode`)
        this.info.classList.add('info')
        this.image.classList.add('image')
        if (document.querySelector('.checkbox').checked) {
            this.card.classList.add('card')
            this.card.classList.add('selected')
            this.card.classList.add(`_${i}`)
        } else {
            this.card.classList.add('card')
        }
        this.main.append(this.card)
    }

    Appendinfo() {
        if (document.querySelector('.checkbox').checked) {
            this.card.prepend(this.image)
        } else {
            this.card.prepend(this.image)
            this.card.append(this.info)
            this.info.append(this.btn)
            this.info.prepend(this.selectMode)
        }
    }

    AddEvents(i) {
        if (!document.querySelector('.checkbox').checked) {
            this.card.addEventListener("click", () => {
                if (event.target !== document.querySelectorAll('.btn')[i - 1]) {
                    this.playWord(`word_${i - 1}`)
                }
            })
            this.btn.addEventListener('click', () => {
                document.querySelectorAll('.card')[i - 1].classList.toggle('rotated')
                document.querySelectorAll('.btn')[i - 1].style.display = 'none'
                setTimeout(() => document.querySelectorAll('.card')[i - 1].childNodes[2].childNodes[1].innerHTML = `${example[this.categori][i - 1].translation}`, 400)
            })
            document.querySelectorAll('.card')[i - 1].addEventListener('mouseleave', () => {
                document.querySelectorAll('.card')[i - 1].childNodes[2].childNodes[1].innerHTML = `${example[this.categori][i - 1].word}`
                document.querySelectorAll('.card')[i - 1].classList.remove('rotated')
                document.querySelectorAll('.btn')[i - 1].style.display = 'block'
            })
        } else {
            return
        }
    }

    AddStartBtn() {
        this.arrayOfRamndomInt = [];
        if (document.querySelector('.checkbox').checked) {
            this.startPlay = document.createElement('div')
            this.startPlay.classList.add('startPlay')
            this.main.append(this.startPlay)
            this.startPlay.innerHTML = 'Start Game'
            this.startPlay.addEventListener('click', () => {
                this.Starting()
                this.repeat()
            })
        }
    }

    CreateStars() {
        if (document.querySelector('.checkbox').checked) {
            this.Stars = document.createElement('div')
            this.Stars.classList.add('Stars')
            this.main.append(this.Stars)
        }
    }
    AddStar() {
        let star = document.createElement('div')
        if (this.SelectedPic === event.currentTarget) {
            star.style.background = 'center/100% url(img/star-win.svg)'
        } else {
            star.innerHTML = '<span>&#10006;</span>'
        }
        if(document.querySelectorAll('.star').length > 10){
        document.querySelectorAll('.star')[0].replaceWith()
        }
        star.classList.add('star')
        this.Stars.append(star)
    }

    repeat() {
        if (this.Game_started === false) {
            this.playWord(`word_${this.random}`)
        }
    }

    playRandomWords() {
        if (this.arrayOfRamndomInt.length === 8) {
            if (this.Erorrs === 0) {
                this.playWord(`Win`)
                this.ScreenforWin()

            } else {
                this.playWord(`Lose`)
                this.ScreenforLose()

            }
        } else {
            this.random = this.randomInt()
            while (this.arrayOfRamndomInt.includes(this.random)) {
                this.random = this.randomInt()
            }
            this.arrayOfRamndomInt.push(this.random)
            this.SelectedPic = document.querySelector(`._${this.random}`)
            this.playWord(`word_${this.random}`)
        }
    }

    Check() {
        if (this.SelectedPic === event.currentTarget) {
            this.SelectedPic.classList.add('trueSelect')
            this.playWord(`correct`)
            this.AddStar()
            this.playRandomWords()
            event.currentTarget.onclick = null
        } else {
            this.Erorrs++
            this.AddStar()
            this.playWord(`Error`)
        }
    }

    Starting() {
        if (this.Game_started !== false) {
            document.querySelectorAll('.card').forEach(el => {
                el.onclick = () => this.Check()
            })
            this.startPlay.innerHTML = 'Repeat'
            this.startPlay.classList.add ('Repeat')
            this.Game_started = false
            this.playRandomWords()
        }
    }

    playWord(i) {
        document.querySelector(`.${i}`).currentTime = 0
        document.querySelector(`.${i}`).play()
    }

    AddSoundsforPlay() {
        for (let i = 0; i <= 3; i++) {
            this.audio = document.createElement('audio')
            this.source = document.createElement('source')
            this.main.append(this.audio)
            this.audio.append(this.source);
            this.audio.classList.add(`${example[8][i].word}`)
            this.source.src = `${example[8][i].audioSrc}`

        }
    }

    addAudio(i) {
        this.audio = document.createElement('audio')
        this.source = document.createElement('source')
        this.card.append(this.audio);
        this.audio.append(this.source);
        this.audio.classList.add(`word_${i - 1}`)
        this.source.src = `${example[this.categori][i - 1].audioSrc}`
    }

    ScreenforWin() {
        document.querySelectorAll('.card').forEach(items => {
            items.replaceWith()
        })
        document.querySelector('.startPlay').replaceWith()
        let WinWindow = document.createElement('img')
        this.main.append(WinWindow)
        WinWindow.classList.add('Won')
        this.main.classList.add('Loses')
        WinWindow.src = 'img/success.jpg'
        this.ClickForMain()
        this.timeoutForMain()
    }

    ScreenforLose() {
        document.querySelectorAll('.card').forEach(items => {
            items.replaceWith()
        })
        document.querySelector('.startPlay').replaceWith()
        let errors = document.createElement('div')
        let loseWindow = document.createElement('img')
        this.main.append(loseWindow)
        this.main.append(errors)
        errors.classList.add('errors')
        errors.innerHTML = `${this.Erorrs} : Mistakes`
        loseWindow.classList.add('Lose')
        this.main.classList.add('Loses')
        loseWindow.src = 'img/failure.jpg'
        this.ClickForMain()
        this.timeoutForMain()
    }
    ClickForMain() {
        setTimeout(() => {
            this.main.addEventListener('click', () => {
                const categories = new Categories()
                this.main.replaceWith()
                categories.init()
                this.checkForTimeout = false
            })
        }, 1000)
    }

    timeoutForMain() {
        if (this.checkForTimeout) {
            const categories = new Categories()
            setTimeout(() => {
                this.main.replaceWith()
                categories.init()
            }, 3500)
        }
    }


    randomInt() {
        return Math.floor(Math.random() * Math.floor(8));
    }
}

