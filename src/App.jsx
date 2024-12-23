import { useEffect, useState } from "react"


function App() {

  const [data, setData] = useState(null);
  async function FetchAPIData() {
    const url = 'https://dog.ceo/api/breeds/image/random'
  try{
    const res = await fetch(url);
    const APIData =await res.json();
    setData(APIData);
    console.log('DATA\n',APIData);
  }
  catch(err){
    console.log(err.message);
  }
}


  useEffect( ()=> {
  FetchAPIData()
  }
  ,[])

  return (
    <>
      <div className="image">
        <h1>API DEMO</h1>
        <p>displays a random picture of dog when the button is clicked.</p>
        {data && (<img src= {data.message} alt="random image" />)}
        <button onClick={FetchAPIData}>Click Me!</button>
      </div>
      <footer>Created using <a href="https://dog.ceo/dog-api/" target="_blank" rel="noopener noreferrer"> Dog API</a> </footer>
    </>
  )
}

export default App
