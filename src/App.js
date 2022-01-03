import './App.css';
import Header from './components/Header';
import MonthList from './components/MonthList';
import Month from './components/Month';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from "react";

function App() {
  useEffect(()=>{
    console.log('렌더링이 완료 되었습니다.');
  })
  return (
    <div className="App">
       <Header/>
       <Routes>
          <Route path="/" element={<MonthList/>} />
          <Route path="/page2/:month" element={<Month/>} />     
       </Routes>
    </div>
  );
}
export default App;
