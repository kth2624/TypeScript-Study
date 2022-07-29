// Typescript Classes 를 사용하여, Dict (dictionary) class 를 빌드하세요. Dict은 아래와 같은 methods 를 갖고있어야 합니다.

// add: 단어를 추가함.
// get: 단어의 정의를 리턴함.
// delete: 단어를 삭제함.
// update: 단어를 업데이트 함.
// showAll: dictionary 의 단어를 모두 프린트함.
// count: dict 단어들의 총 count 를 리턴함.

type Words = { // 해시
    [key: string]: (string | string[])
//객체의 property에 대해 모르지만 타입만을 알 때 유용하다
}

class Dict {
    private words: Words
    constructor() {
        this.words = {}
    }
    //단어 추가
    add(word: Word) { // word는 Word 클래스의 인스턴스 타입.
        if(!this.words[word.term]) {
            this.words[word.term] = word.def;
        }
    }
    //단어 정의 리턴
    get(term: string) {
        return this.words[term];
    }
    // 단어를 삭제
    delete(term: string) {
        delete this.words[term];
    }
    // 단어 이름 업데이트
    update(oldTerm: string, newTerm: string) {
        if(this.words.hasOwnProperty(oldTerm)) {
            this.words[newTerm] = this.words[oldTerm];
            delete this.words[oldTerm];
        }
    }
    
    // 모든 사전의 이름과 뜻 출력
    showAll() {
        for(let [key, value] of Object.entries(this.words)) {
            console.log(`${key}: ${value}`)
        }
    }

    // 사전에 저장된 단어의 개수
    count() {
        return Object.keys(this.words).length;
    }
}


// 각각의 단어에 대한 클래스
class Word {
    constructor(public term: string, public def: (string| string[])) {}

// 단어 출력하는 메소드
    toString() {
        console.log(`${this.term}: [뜻] ${this.def}`);
    }

    // 단어 정의 추가
    addDef(newDef : string) {
    if(typeof this.def === 'string') {
    this.def = [this.def, newDef]
    } else {
    this.def = [...this.def, newDef];
    }
}
    // 단어 정의 수정
    updateDef(oldDef : string, newDef: string) {
    if(typeof this.def === 'string') {
        if(oldDef === this.def) this.def = newDef
        } else {
            this.def.filter(val => val !== oldDef);
            this.def.push(newDef);
        }
    }
}

const kimchi = new Word("kimchi","hello")
const book = new Word("book", "책")
const dict = new Dict()
dict.add(kimchi)
dict.add(book)
dict.showAll()
dict.update("kimchi","kimchi2")
dict.showAll()
console.log(dict.count())
console.log(dict.get('book'))