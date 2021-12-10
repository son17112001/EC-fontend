import React from "react";
function AdminNav() {
  
  return (
    
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark admin-page" style={{ backgroundColor: 'blue'}} >
  {/* Container wrapper */}
  <div className="container-fluid">
    {/* Toggle button */}
    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i className="fas fa-bars" />
    </button>
    {/* Collapsible wrapper */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* Navbar brand */}
      <a className="navbar-brand mt-2 mt-lg-0" href="#">
        <img src="/logo.png" height={40 } alt="LTS Logo" loading="lazy" />
      </a>
      
    </div>
    {/* Collapsible wrapper */}
    {/* Right elements */}
    <div className="d-flex align-items-center">
      {/* Icon */}
      <a className="text-reset me-3" href="#">
        <i className="fas fa-shopping-cart" />
      </a>
      {/* Notifications */}
      <a className="text-reset me-3 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
        <i className="fas fa-bell" />
        <span className="badge rounded-pill badge-notification bg-danger">1</span>
      </a>
      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
        <li>
          <a className="dropdown-item" href="#">Some news</a>
        </li>
        <li>
          <a className="dropdown-item" href="#">Another news</a>
        </li>
        <li>
          <a className="dropdown-item" href="#">Something else here</a>
        </li>
      </ul>
      {/* Avatar */}
      <a className="dropdown-toggle d-flex align-items-center hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
        <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" className="rounded-circle" height={25} alt="Black and White Portrait of a Man" loading="lazy" />
      </a>
      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
        <li>
          <a className="dropdown-item" href="#">My profile</a>
        </li>
        <li>
          <a className="dropdown-item" href="#">Settings</a>
        </li>
        <li>
          <a className="dropdown-item" href="#">Logout</a>
        </li>
      </ul>
    </div>
    {/* Right elements */}
  </div>
  {/* Container wrapper */}
</nav>


  );
}

export default AdminNav
