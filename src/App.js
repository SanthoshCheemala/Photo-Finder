import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Search from "./components/Search";


function App() {
  const [ImgArray,SetArray] = useState([]);
  let url ="https://pixabay.com/api/?key=39318999-f016efc1118f68b949fec3990&q=";
  function reciveterm(value){
    url = "https://pixabay.com/api/?key=39318999-f016efc1118f68b949fec3990&q=" + value;
  }
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        SetArray(data.hits);
      });

  }, [ImgArray,url]);
  return (
    <div className="App">
      <Search Sendterm={reciveterm} />
      <div className="Main">
        {ImgArray.map((item)=>(
          <Card 
          editor = {item.user}
          views = {item.views}
          down = {item.downloads}
          likes = {item.likes}
          key = {item.id}
          image = {item.largeImageURL}
          tags = {item.tags}
          largeImage={item.largeImageURL}

          />
        ))}
      </div>
    
    </div>
  );
}


export default App;
