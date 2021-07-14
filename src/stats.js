import example from '@/examples.js';

export default class Stats {
    constructor(){

    }

    stats

    init(){
        this.stats = document.querySelector('.stats');
        this.creatTable();

    }

    creatTable(){
        let string = document.createElement('div');
        this.stats.append(string);
        string.classList.add('str');
        string.innerHTML = `${example[0][0].word} : ${example[0][0].translation}`
    }  
}
