export const getMedia = (functionName, setFunction) => {  
    const controller = new AbortController();

      functionName({
         signal: controller.signal
        })
        .then(response => setFunction(response.data.results.slice(0,10)))
        .catch(()=> alert('Error getting data!'))
        .finally(()=> controller.abort()); 
  }

export const getSingleMedia = (functionName, setFunction, id) => {
        const controller = new AbortController();

         functionName(id, {
            signal: controller.signal
         })
            .then(response=> setFunction(response.data))
            .catch(() => alert('Error getting details!'))
            .finally(() => controller.abort());            
  }


export const getSearchMedia = (functionName, setFunction, searchValue) => {
    const controller = new AbortController();

     functionName(searchValue, {
         signal: controller.signal
        })
        .then(response => setFunction(response.data.results))
        .catch(()=> alert('Error getting search details!'))
        .finally(() => controller.abort());            
}
  

