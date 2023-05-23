import React from 'react'
import Navbar from "../Layout/Navbar"
import Card_Accidents from './Card_Accidents'
import Test from './Test'
import Maps from './Maps'
export default function Accidents(props) {
  return (
    <div>
      <Navbar active={props.active} />
      {/* <Maps />       */}
      <Test/>
    </div>
  )
}
