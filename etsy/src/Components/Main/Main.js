import React from 'react'
import Discover from './Discover'
import data from '../../dataBase.json'
import RecentlyViewed from './RecentlyViewed'
import EditorsPick from './EditorsPick'

function Main() {
    const discover = data.discover
    const recentlyViewed = data.recentlyViewed
    const editorsPick = data.editorsPick
  return (
    <>
        <Discover discover={discover}></Discover>
        <RecentlyViewed recentlyViewed={recentlyViewed}></RecentlyViewed>
        <EditorsPick data={editorsPick}></EditorsPick>
    </>
  )
}

export default Main