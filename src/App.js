import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';


function App() {
  const [data, setData] = useState([]);
  const [selectState, setSelectState] = useState(5);
  const fetchApiData = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => console.log(json.products));
  };
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=40")
      .then((res) => res.json())
      .then((json) => {
        let data = json.products;
        setData(json?.products);
        //let selected = selected.i
      });
    //fetchApiData();
  }, []);
  const handle = (e) => {
    console.log(e.target.name);
    if (e.target.name === "left") {
      setSelectState((prev) => prev - 1);
    }
    if (e.target.name === "right") {
      setSelectState((prev) => prev + 1);
    }
  };
  return (
    <div className="App">
     <div className="carousal">
        <button name="left" disabled={selectState <= 5} onClick={handle} className="button">
          l
        </button>
        <div className="image-div">
          {data?.map((each, index) => {
            if (index + 5 > selectState && index < selectState) {
              return (
                <>
                  <img className="images" src={each.images} />
                </>
              );
            } else if (index === selectState) {
              return <img className="images selected" src={each.images} />;
            } else if (index - 5 < selectState && index > selectState) {
              return <img className="images" src={each.images} />;
            }
          })}
        </div>
        <button disabled={selectState >= data.length-5} name="right" onClick={handle} className="button">

          r
        </button>
      </div>
    </div>
  );
}

export default App;
