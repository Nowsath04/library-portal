import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "./Usecontext";

function Sidebar() {
  const {useremail,setUserEmail} = useContext(LoginContext)

    let bookReturn = () => {
        let getbook = window.prompt("Enter ISBN :")
        if (getbook) {
            alert("Book Returned")
        }
    }
  return (
    <>
      <nav class="sb-sidenav accordion sb-sidenav-light bg-secondary" id="sidenavAccordion">
        <div class="sb-sidenav-menu">
          <div class="nav">
            <div class="sb-sidenav-menu-heading">Core</div>
            <Link class="nav-link" to={"/portal/dashboard"}>
              <div class="sb-nav-link-icon">
                <i class="fas fa-tachometer-alt"></i>
              </div>
              Dashboard
            </Link>
            <div class="sb-sidenav-menu-heading">Library-Data</div>
            <Link
              class="nav-link collapsed"
              to={"/portal/book_list"}
              data-bs-toggle="collapse"
              data-bs-target="#collapseLayouts"
              aria-expanded="false"
              aria-controls="collapseLayouts"
            >
              <div class="sb-nav-link-icon">
                <i class="fas fa-columns"></i>
              </div>
              Book List
              <div class="sb-sidenav-collapse-arrow">
                <i class="fas fa-angle-down"></i>
              </div>
            </Link>

            <div class="sb-sidenav-menu-heading">Student-Data</div>
            <Link class="nav-link" to={"/portal/book_issue"}>
              <div class="sb-nav-link-icon">
                <i class="fas fa-chart-area"></i>
              </div>
              Book Issue
            </Link>
            <button onClick={() => {
                bookReturn();
            }} class="nav-link">
              <div class="sb-nav-link-icon">
                <i class="fas fa-table"></i>
              </div>
              Book Return 
            </button>
          </div>
        </div>
        <div class="sb-sidenav-footer">
          <div class="small">Logged in as:</div>
          {useremail.email}
        </div>
      </nav>   
    </>
  );
}

export default Sidebar;