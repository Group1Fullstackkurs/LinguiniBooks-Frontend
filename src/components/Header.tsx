import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import searchInfoState from "../atoms/searchInfoState";
import { Link } from "react-router-dom"

function Header() {
  const [infoState, setInfoState] = useRecoilState(searchInfoState);

  return (
    <div className="nav-bar">
            <div className="homepage-header">
            <Link to="/">
            <h1>Linguini Books</h1>
            </Link>
            <div className="searchbar">
              <select
                name="menu"
                onChange={(event) =>
                  setInfoState({
                      title: infoState.title,
                      author: infoState.author,
                      publicationYear: infoState.publicationYear,
                      price: infoState.price,
                      category: event.target.value,
                    }
                  )}
              >
                <option value="Category">Category</option>
                <option value="Action">Action</option>
                <option value="Adventure">Adventure</option>
                <option value="Classics">Classics</option>
                <option value="Comedy">Comedy</option>
                <option value="Drama">Drama</option>
                <option value="Horror">Horror</option>
                <option value="Mystery">Mystery</option>
                <option value="Romance">Romance</option>
                <option value="Thriller">Thriller</option>
              </select>
              <input
                type="text"
                placeholder="Search for a book, e.g Parry Hotter"
                onChange={(event) =>
                  setInfoState({
                      title: event.target.value,
                      author: infoState.author,
                      publicationYear: infoState.publicationYear,
                      price: infoState.price,
                      category: infoState.category,
                  })
                }
              />
          </div>
          <Link to="/Profilepage">

            <div className="login-box">
              <FontAwesomeIcon icon={faUser} />
              <p>Sign in</p>
            </div>
            </Link>
            <Link to="/">
            <div className="cart-box">
              <FontAwesomeIcon icon={faCartShopping} />
              <p>Cart</p>
            </div>
            </Link>
          </div>
    </div>
  );
}
export default Header;
