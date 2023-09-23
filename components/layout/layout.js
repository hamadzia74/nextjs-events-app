import { Fragment } from "react";
import MainHeadeer from "./main-headeer";

export default function Layout(props) {
  return (
    <Fragment>
        <MainHeadeer />
        <main>
            {props.children}
        </main>
    </Fragment>
  )
}
