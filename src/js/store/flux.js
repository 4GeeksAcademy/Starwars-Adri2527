const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characterData: [],
			planets: [],
			starships: []
		},

		actions: {
			getCharacterData: async () => {
				console.log("Hola")
				try{
				const store = getStore();
				const response = await fetch("https://www.swapi.tech/api/people");
				console.log(response)
					if(!response.ok){
						throw Error()
					}else{
	
						const data = await response.json()
						console.log(data)
						setStore({characterData:data.results || []}) ,
						console.log(data.results)
					}
				}
				catch(error){
					console.log(error)
				}
			}
		}
	}
}

export default getState;
