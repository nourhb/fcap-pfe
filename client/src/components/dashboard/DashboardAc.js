import React from 'react'
import  SoldViaPromotedListing  from './dashType/SoldViaPromotedListing'
import BuyerCountry from './dashType/BuyerCountry'

function DashboardAc() {
  return (<>
    <div>DashboardAc</div> 
    <BuyerCountry/>
    <SoldViaPromotedListing/>
  </>
  )
}

export default DashboardAc