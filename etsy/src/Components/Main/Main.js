import React from 'react'
import Discover from './Discover'
import data from '../../dataBase.json'
import RecentlyViewed from './RecentlyViewed'
import EditorsPick from './EditorsPick'
import ShopSelection from './ShopSelection'
import EmailSubscribe from './EmailSubscribe'
import FreshBlog from './FreshBlog'

function Main() {
  const discover = data.discover
  const recentlyViewed = data.recentlyViewed
  const editorsPick = data.editorsPick
  const shopSelection = data.shopOurSelection
  return (
    <>
      <Discover discover={discover}></Discover>
      {/* <RecentlyViewed recentlyViewed={recentlyViewed}></RecentlyViewed> */}
      {/* <EditorsPick data={editorsPick}></EditorsPick> */}
      <ShopSelection data={shopSelection}></ShopSelection>
      <EmailSubscribe></EmailSubscribe>
      <FreshBlog></FreshBlog>
    </>
  )
}

export default Main