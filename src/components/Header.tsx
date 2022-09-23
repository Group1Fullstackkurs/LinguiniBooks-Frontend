import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import searchInfoState from "../atoms/searchInfoState";
import { Link } from "react-router-dom";

function Header() {
  const [infoState, setInfoState] = useRecoilState(searchInfoState);

  return (
    <div className="navbar">
      <div className="homepage-header">
        <Link to="/">
          <h1>Linguini Books</h1>
        </Link>

        <div className="searchbar-container">
          <div className="searchbar">
            <select
              name="menu"
              onChange={(event) =>
                setInfoState({
                  searchKey: infoState.searchKey,
                  category: event.target.value,
                })
              }
            >
              <option value="Category">Category</option>
              <option value="Comedy">Comedy</option>
              <option value="Detective">Detective</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Horror">Horror</option>
              <option value="Mystery">Mystery</option>
              <option value="Romance">Romance</option>
            </select>
            <input
              type="text"
              placeholder="Search for a book, e.g Parry Hotter"
              onChange={(event) =>
                setInfoState({
                  searchKey: event.target.value,
                  category: infoState.category,
                })
              }
            />
          </div>
          <div className="checkbox-container">
            <label>
              <input
                type="checkbox"
                // onChange={handleChange}
              />
              a-z
            </label>
            <label>
              <input
                type="checkbox"
                // onChange={handleChange}
              />
              author
            </label>
            <label>
              <input
                type="checkbox"
                // onChange={handleChange}
              />
              publication year
            </label>
          </div>
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
