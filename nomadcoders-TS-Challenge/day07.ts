//구현해야할 목록
// localStorage.setItem(<key>, <value>)
// localStorage.getItem(<key>)
// localStorage.clearItem(<key>)
// localStorage.clear()

interface LocalStorageAPI {
	[key:string]:string
}

class LocalStorage {
	private storage: LocalStorageAPI = {}

	setItem(key:string, value:string){
		this.storage[key] = value;
	}
	clearItem(key:string){
		delete this.storage[key]
	}
	getItem(key:string){
		return this.storage[key]
	}
	clear(){
		this.storage = {}
	}
}

//구현해야할 목록
// geolocation.getCurrentPosition(successFn);
// geolocation.getCurrentPosition(successFn, errorFn);
// geolocation.getCurrentPosition(successFn, errorFn, optionsObj);
// geolocation.watchPosition(success);
// geolocation.watchPosition(success, error);
// geolocation.watchPosition(success, error, options);
// geolocation.clearWatch(id);

interface GeolocationAPI {
    
}

class Geolocation_tkim {
	private storage: GeolocationAPI = {}

	setItem(key:string, value:string){
		this.storage[key] = value;
	}
	clearItem(key:string){
		delete this.storage[key]
	}
	getItem(key:string){
		return this.storage[key]
	}
	clear(){
		this.storage = {}
	}
}