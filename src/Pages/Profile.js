import App from "../App";
import NavBar from "../Layouts/NavBar";
import SideBar from "../Layouts/SideBar";
import React from "react";
import Footer from "../Components/Footer";


function Profile() {
   return (
       <div className="wrapper">
          <SideBar />

          <div className="main">
             <NavBar  />

             <main className="content">
                <div className="container-fluid p-0">

                   <h1 className="h3 mb-3">Blank Page</h1>

                   <div className="row">
                      <div className="col-12">
                         <div className="card">
                            <div className="card-header">
                               <h5 className="card-title mb-0">Empty card</h5>
                            </div>
                            <div className="card-body">
                            </div>
                         </div>
                      </div>
                   </div>

                </div>
             </main>

             <Footer />
          </div>
       </div>
   )
}

export default Profile;