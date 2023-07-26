import React, { useState } from 'react'
import './Navbar.css'
import { AiFillTwitterCircle, AiOutlineMail } from "react-icons/ai"
import { IoIosNotifications } from "react-icons/io"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";

const IconStyle = {
  width: "40px",
  height: "40px",
  margin: "0 20px"
}
const otherIconStyle = {
  padding: "12px",
  width: "25px",
  height: "25px",
  borderRadius: "100%",
}


export default function Navbar() {
  const [activated, setActivated] = useState(false)

  return (
    <div className='Navbar'>

      <div className="navLeft">
        <Link to="/">
        <AiFillTwitterCircle style={IconStyle} className='iconTwitterHub' />

        </Link>
        <div className="searchBar">
          <input type="text" placeholder="Search.." />

        </div>
      </div>

      <div className="navRight">


        <AiOutlineMail style={otherIconStyle} />
        <IoIosNotifications style={otherIconStyle} />
        <div className="myProfile" onClick={() => setActivated(!activated)}>
          <img src="https://media.licdn.com/dms/image/C4D03AQEBJlgYXKNZQA/profile-displayphoto-shrink_800_800/0/1645980997002?e=2147483647&v=beta&t=8A5iqgsmCL0LFwrhT1vXaDGBTFon_eJHf8x6qyUVghk" alt="pp" />
          <p>Mehmet Nail Mutlu</p>
          <h2>&gt;</h2>
          {activated ? <div className="myProfileModal" >
            <a href=""><p>Log Out</p></a>
          </div> : ""}


        </div>


      </div>


    </div>
  )


}
