import React from 'react'
import './Header.css'
import {Link} from "react-router-dom"


const Header = () => {
  return (
    <div className="header">    
        <div className='headerLeft'>
            {/* <Link to="/"><img style={{objectFit: "cover"}} src="https://www.vippng.com/png/full/346-3467181_netflix-white-logo-png.png" className="header__icon"/></Link> */}
            <Link to="/"><img style={{objectFit: "cover"}} src="https://proofmart.com/wp-content/uploads/2021/06/598-2-1-2048x1365.png" className="header__icon"/></Link>
            {/* <Link to="/"><img src="https://th.bing.com/th/id/R.02bc02f81d0acb2bfb9def9801bf7871?rik=nkUFSBzR3OaowQ&riu=http%3a%2f%2fwhatmommiesneed.com%2fwp-content%2fuploads%2f2014%2f12%2fNetflix_Logo_Print_OneColorPMS.png&ehk=u0Rr31SImvrgllqpqlkFXmxMg5hIN7waYA3crOxAgy8%3d&risl=&pid=ImgRaw&r=0" className="header__icon"/></Link> */}
            {/* <Link to="/" ><img style={{borderRadius: "50px", objectFit: "cover"}} alt="logo" src="https://logodix.com/logo/707805.jpg" className="header__icon"/></Link> */}
            <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
            <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
            <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
        </div>
    </div>
  )
}

export default Header