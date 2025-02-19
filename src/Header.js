import React from 'react'
import './Header.css'
function Header() {
  return (
    <>
        <div className="container-fluid">
            {/* <div className="row">
                <div className="col-1"></div>
                <div className="col-2">
                    <img class='logoo' src="./images/Nike_logo.jpg" alt="" />
                </div>
                <div className="col-6">
                    <ul class='tag'>
                        <li class='box'><a href={"./Pages/Home"}>Menu</a></li>
                        <li  class='box'><a>Location</a></li>
                        <li  class='box'><a href={"./Pages/ContactUS"}>Contact</a></li>
                        <li  class='box'><a>About</a></li>
                        
                    </ul>
                    
                </div>
                <div className="col-3">
                    <button class='loogin'>login</button>
                </div>
            </div> */}
            <div className="row">
                <div className="col-2"></div>
                <div className="col-6 ">
                    <h1 class='hading'>
                        YOUR FEET  DESERVE  THE BEST 
                    </h1>
                    <p class='para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel labore impedit ab quam <br />dolorum dolore minus expedita nisi suscipit sit, delectus temporibus. <br /> Veritatis dolore quidem, ex obcaecati cupiditate rerum quia?</p>
                    <button class='btnn'>Shop Now</button>
                    <button class='btnnn'>Category</button>
                    <div>
                        <h4 style={{color:'gray'}}>Also Available on:</h4>
                    </div>
                </div>
                <div className="col-4">
                    <img src="./images/shoe.png" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Header