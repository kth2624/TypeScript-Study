//4.3 interfaces part Two

abstract class User1 {//추상 클래스
	constructor(
		protected firstName: string,
		protected lastName:string
	){}
	abstract sayHi(name:string):string
	abstract fullName():string
}
//추상클래스는 인스턴스를 못만듬
//new User -> X

class Player1 extends User1 {
	fullName(): string {
		return `${this.firstName} ${this.lastName}`
	}
	sayHi(name: string): string {
		return `Hello ${name}. My name is ${this.fullName}`
	}
}

//interface
//인터페이스를 상속하는 것의 문제점
//- private property들을 사용하지 못함
//- 추상클래스에서는 constructor가 해주도록 할 수 잇음

interface User {
	firstName:string,
	lastName:string,
	sayHi(name:string):string
	fullName():string
}
//추상클래스는 인스턴스를 못만듬
//new User -> X

//implements 코드가 가벼워짐
class Player implements User {
	constructor(
		public firstName:string,
		public lastName:string
	){}
	fullName(): string {
		return `${this.firstName} ${this.lastName}`
	}
	sayHi(name: string): string {
		return `Hello ${name}. My name is ${this.fullName}`
	}
}

type PlayerA = {
	name:string
}

const playerA: PlayerA = {
	name:"tkim"
}
///----------------//
interface PlayerB {
	name:string
}

const PlayerB: PlayerB = {
	name:"tkim"
}
