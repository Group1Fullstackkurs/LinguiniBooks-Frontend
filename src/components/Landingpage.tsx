import { useState } from 'react'
import './Landingpage.css'
import Book from './Book'

function Landingpage() {
    const [count, setCount] = useState(0)

    return (
        <div className="LandingPage">
            
            <div className="bookbox">
            <Book/>
            <Book/>
            <Book/>
            </div>
           
        </div>
    )
}
export default Landingpage