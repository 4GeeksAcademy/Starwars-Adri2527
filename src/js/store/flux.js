const getState = ({ getStore, getActions, setStore }) => {
  return {
      store: {
          characters: [],
          planets: [],
          vehicles: [],
          details:[],
      },
      actions: {
          // Use getActions to call a function within a function
          exampleFunction: () => {
              getActions().changeColor(0, "green");
          },
          loadSomeData: () => {
              /**
                  fetch().then().then(data => setStore({ "foo": data.bar }))
              */
          },
          changeColor: (index, color) => {
              //get the store
              const store = getStore();

              //we have to loop the entire demo array to look for the respective index
              //and change its color
              const demo = store.demo.map((elm, i) => {
                  if (i === index) elm.background = color;
                  return elm;
              });

              //reset the global store
              setStore({ demo: demo });
          },

          loadItemOnClick: async (pathId, setApiloaded) => {
            try {
                const response = await fetch(`https://www.swapi.tech/api${pathId}`);
                const data = await response.json();
                // Guardar datos en el store con setStore
                setStore({ details: data.result || {} }); // Almacenar data.result en lugar de data
                // Actualizar el estado apiloaded
                setApiloaded(true);
            } catch (error) {
                console.error("Error fetching details:", error);
            }
        },
        
        

          fetchCharacters: async () => {
              try {
                  // Este endpoint me devuelve todos los contactos de la agenda 
                  const response = await fetch(
                      "https://www.swapi.tech/api/people/"
                  );
                  const data = await response.json();
                  // Guardo los datos en el store con setStore
                  setStore({ characters: data.results || [] });
              } catch (error) {
                  console.error("Error fetching contacts:", error);
              }
          },

          fetchPlanets: async () => {
              try {
                  // Este endpoint me devuelve todos los contactos de la agenda 
                  const response = await fetch(
                      "https://www.swapi.tech/api/planets/"
                  );
                  const data = await response.json();
                  // Guardo los datos en el store con setStore
                  setStore({ planets: data.results || [] });
              } catch (error) {
                  console.error("Error fetching contacts:", error);
              }
          },

          fetchVehicles: async () => {
              try {
                  // Este endpoint me devuelve todos los contactos de la agenda agenda-diego (mi agenda)
                  const response = await fetch(
                      "https://www.swapi.tech/api/vehicles"
                  );
                  const data = await response.json();
                  // Guardo los datos en el store con setStore
                  setStore({ vehicles: data.results || [] });
              } catch (error) {
                  console.error("Error fetching contacts:", error);
              }
          },

      }
  };
};

export default getState;
