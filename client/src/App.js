
// import './App.css';
// import axios from "axios";
// import Loader from './components/Loader';
// import Home from "./pages/Home";
// import { useEffect, useState } from 'react';
// import { BrowserRouter, Routes , Route } from 'react-router-dom';
// function App() {
//   const [showLoading ,setShowLoading]=useState(false);
//   const getPortfolioData = async()=>{
//     try{
// const response = await fetch("/api/portfolio//get-portfolio-data");
// console.log(response.data);    
// }catch(error){

//     }
//   };
//   useEffect(()=>{
//     getPortfolioData()
  
//   },[])
//   return (
//     <BrowserRouter>
//     {showLoading? <Loader/>:null}
//       <Routes>
//         <Route path = "/" element={<Home/>}></Route>
//       </Routes>
//     </BrowserRouter>
    
//   );
// }

// export default App;
import './App.css';
import axios from "axios";
import Loader from './components/Loader';
import Home from "./pages/Home";
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {HideLoading, SetPortfolioData, ShowLoading, ReloadData} from "./redux/rootSlice";
import Admin from './pages/Admin';
import Login from './pages/Admin/Login';

function App() {
  const {loading , portfolioData, reloadData}= useSelector(state => state.root);
 // const [showLoading, setShowLoading] = useState(false);
 // const [portfolioData, setPortfolioData] = useState(null);
 const dispatch =useDispatch();
  const getPortfolioData = async () => {
    try {
      //setShowLoading(true);
      dispatch(ShowLoading(true));
      const response = await axios.get("/api/portfolio/get-portfolio-data");
     dispatch(SetPortfolioData(response.data));
     dispatch(ReloadData(false));
     dispatch(HideLoading());
      //setPortfolioData(response.data);
      console.log(response.data);    
    } catch (error) {
      dispatch(HideLoading());
      console.error("Error fetching portfolio data:", error);
    } 
    // finally {
    //   setShowLoading(false);
    // }
  };

  useEffect(() => {
    if(!portfolioData){
      getPortfolioData();
    }
   
  }, [portfolioData]);

  useEffect(() => {
    if(reloadData){
      getPortfolioData();
    }
   
  }, [reloadData]);
  // useEffect(() => {
  //  console.log(portfolioData);
  // }, [portfolioData]);

  return (
    <BrowserRouter>
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-login" element={<Login/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

