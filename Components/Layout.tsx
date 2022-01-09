import * as React from 'react'
import NavBar from "./NavBar";

export default function Layout({ children }) {
 return (
   <React.Fragment>
    <NavBar />
    <div>{children}</div>
   </React.Fragment>
 )
}
