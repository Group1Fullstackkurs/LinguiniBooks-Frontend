import { useState } from "react";
import { useRecoilState } from "recoil";
import cartState  from "../../atoms/cartState";
import { BookModel } from "../../Typescript/BookModel";
import CartModel from "../../Typescript/CartModel";
import "./Book.css";

// how each book will be displayed
function Book(book: BookModel) {
  const [isShowInfo, setIsShowInfo] = useState(false);
  const [cart, setCart] = useRecoilState(cartState);
 
  const ShowInfo = () =>{
    return isShowInfo ? (
      <div className="book-info" onClick={(event: React.MouseEvent<HTMLElement>) => handleClick()} >
        <h2>{book.title}</h2>
        <h3>by {book.firstName} {book.lastName}</h3>
        <p>Publication Year: {book.publicationYear}</p>
        <p>Category: {book.category}</p>
        <p>Condition: {book.new ? "New" : "Used"}</p>
        <p>Seller: {book.seller}</p>
      </div>
    ) : null; 
  }

  const handleClick = () => {
    setIsShowInfo(!isShowInfo);
  }

  const handleAddCart = (book: BookModel) => {
    let isFound: boolean = false;
    let index: number = -1;
    
    cart.forEach((item) => {
      index++;
      if (item.book.id === book.id) {
        let newCart: Array<CartModel> = Object.assign({}, cart);
        newCart[index].quantity++;
        console.log("Hello!", newCart[index].quantity);
        setCart(newCart);
        isFound = true;
        return;
      }
    });
    if(!isFound) {
      let newBook: CartModel = new CartModel(book, 0);
      setCart([...cart, newBook]);
    }
    
    
    console.log("Cart: ", cart);

  }

  return (
    <div className="book-container">
      < ShowInfo />
      <div className="book" onClick={(event: React.MouseEvent<HTMLElement>) => handleClick()}>
        {(book.new) ? <div className="book-new-icon"> New </div> : <div className="book-new-icon"> Used </div>}
        <div className="book-title">
          <p>{book.title}</p>
        </div>
        <div className="book-author">
          <p>{book.firstName} {book.lastName}</p>
        </div>
      </div>
      <div className="book-sale-info">
        <p>{book.price} ({book.publicationYear})</p>
          <div className="book-cart-btn"
            onClick={(event: React.MouseEvent<HTMLElement>) => handleAddCart(book)}
              >
            Add to cart
          </div>
      </div>
      
        
    </div>
  );
}
export default Book;
