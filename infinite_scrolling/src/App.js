import { useEffect, useRef, useState } from "react";
import "./App.css";
import axios from "axios";
import Card from "./Components/Card";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const ref = useRef(null);
  const [loading,setLoading] = useState(false);

useEffect(()=>{
    ref.current.addEventListener("scroll",handlScroll);
    return ()=>{
      ref.current.removeEventListener("scroll",handlScroll)
    }
  })

useEffect(() => {
    handleAPI(page);
  }, [page]);

  function handlScroll(){
      let clientHeight = ref.current.clientHeight;
      let scrollTop = ref.current.scrollTop;
      let scrollHeight = ref.current.scrollHeight;
      // console.log("Scroll:",scrollTop+clientHeight,"ScrollHeight:",scrollHeight);
      if(Math.ceil(clientHeight+scrollTop)>=scrollHeight)
      {
          console.log("hello")
          setPage(page+1)
      }
  }


  function handleAPI(page = 1) {
    // console.log("page:",page)
    getData(page);
  }

  async function getData(page = 1) {
    setLoading(true);
    try {
      let res = await axios(`${process.env.REACT_APP_URL}?page=${page}`);
    
      setLoading(false);
      if(res.data.length)
      {
        setData([...data,...res.data]);
      }
      console.log(res.data);
    } catch (err) {
      console.log("Error:", err);
      setLoading(false);
    }
  }

  return (
    <div className="App">
      <div className="TopBox" ref={ref}>
        {data &&
          data?.map((el,i) => {
            return <Card key={i} data={el} />;
          })}
          {
            loading && <div className="loader">
              <div></div>
            </div>
          }
      </div>
    </div>
  );
}

export default App;
