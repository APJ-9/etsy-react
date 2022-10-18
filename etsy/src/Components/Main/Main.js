import React from 'react'
import Discover from './Discover'
import data from '../../dataBase.json'
import RecentlyViewed from './RecentlyViewed'

function Main() {
    const discover = data.discover
    const recentlyViewed = data.recentlyViewed
  return (
    <>
        <Discover discover={discover}></Discover>
        <RecentlyViewed recentlyViewed={recentlyViewed}></RecentlyViewed>
    </>
  )
}

export default Main