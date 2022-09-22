import './App.css'
import Header from './components/Header'
import Bookpage from './components/Bookpage';
import Landingpage from './components/Landingpage'
import {useRecoilValue, useRecoilState} from 'recoil';
import searchInfoState from "./atoms/searchInfoState";
import { useState, useEffect } from "react";
import fetchAllBooks from "./Typescript/fetch";
import booksState from './atoms/booksState';
import Profilepage from './components/Profilepage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const searchInfo = useRecoilValue(searchInfoState)
  const [books, setBooks] = useRecoilState(booksState);

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
