import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useRecoilState } from 'recoil';
import pureBooksState from './atoms/pureBooksState';
import fetchAllBooks from "./Typescript/fetch";
import Header from './components/Header'
import Landingpage from './components/Landingpage'
import Profilepage from './components/Profilepage';
import './App.css'


function App() {
  const [books, setBooks] = useRecoilState(pureBooksState);

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
