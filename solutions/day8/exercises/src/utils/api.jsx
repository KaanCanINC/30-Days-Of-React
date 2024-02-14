export async function countries(){ try{
      const response = await fetch('https://restcountries.com/v3.1/all')

      if(!response.ok){
         console.log('data cekilemedi')
      }

      const data = await response.json();
      return data[Math.floor(Math.random() * data.length)];
   
   }
   catch(error){
      console.error('ulke verisi alinamadi', error)
      return null
   }

}
