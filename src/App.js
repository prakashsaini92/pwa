import React, {useEffect, useState} from 'react';

import './App.css';

function App() {
  const [data,setData] = useState([])
  useEffect(() => {
    const getData = async() => {
        const result = await fetch("https://jsonplaceholder.typicode.com/users");
        const response =  await result.json();
        setData(response);
    }
    getData();
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rahul SAINIIIII</h1>
         <table>
          <thead>
         <tr>
         <td>Name</td>
          <td>email</td>
         </tr>
          </thead>
          {data?.map((item) => <tr> 
            <td>{item.name} </td>
            <td>{item.email} </td>
          </tr> )}
         
         </table>
      </header>
    </div>
  );
}

export default App;
