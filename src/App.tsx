import './App.css'
import Header from './components/Header'
import Bookpage from './components/Bookpage';
import Landingpage from './components/Landingpage'
import {useRecoilValue, useRecoilState} from 'recoil';
import searchInfoState from "./atoms/searchInfoState";
import { useState, useEffect } from "react";
import fetchAllBooks from "./Typescript/fetch";
import filterdBooks from './atoms/filteredBooksState';
import Profilepage from './components/Profilepage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import pureBookState from './atoms/pureBookState';

function App() {
  const [books, setBooks] = useRecoilState(pureBookState);

  useEffect(() => {
    fetchAllBooks().then((bookList) => setBooks(bookList));
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/ProfilePage" element={<Profilepage />} />
          <Route path="/*" element={<Landingpage />} />
        </Routes> 
      </div>
    </Router>
  );
}
export default App
