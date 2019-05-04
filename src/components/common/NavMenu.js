import React from "react"
import {NavLink} from "react-router-dom"
import {Nav, NavItem } from "reactstrap"
const links = {
   "classContainer":" m-3 ",
   "classItem":" m-3 ",
    "arr": [
    {"path":"/","title":"About", "exact":true},
    {"path":"/experience", "title":"Experience", "exact":false },
    {"path":"/courses","title":"Courses", "exact":false }
  ]};
const NavMenu = () => {
  return (<>
    <Nav>
      {links.arr.map((link,ind)=> <NavItem
          key={`top-nav-${ind}`} className={links.classItem}
        >
          <NavLink  exact={link.exact}  to={link.path}>
            {link.title}
          </NavLink>
        </NavItem>
      )}
    </Nav>
    <hr />
  </>)}

export default NavMenu
