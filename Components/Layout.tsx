import * as React from 'react'
import NavBar from "./NavBar";
import { ReactChildren } from "react";

interface Props {
  children: ReactChildren;
}

export default function Layout({ children }: Props) {
 return (
   <React.Fragment>
    <NavBar />
    <div>{children}</div>
   </React.Fragment>
 )
}
