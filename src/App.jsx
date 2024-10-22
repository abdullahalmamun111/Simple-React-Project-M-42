
import { useState } from 'react'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setbookmarks] = useState([])
  const [markAsRead ,setMarkAsRead ] = useState(0);

  const handleBookmark = blog => {
    const newBookmarks = [...bookmarks, blog]
    setbookmarks(newBookmarks);
  }

  const handleMarkAsRead = (id, time)  => {
    const newMarkRead = markAsRead + time ;
    setMarkAsRead(newMarkRead);
    // remove the read blog from bookmark
    // console.log('remove bookmark', id)
    const remainingBookmarks = bookmarks.filter(bookmark =>bookmark.id !==id);
    setbookmarks(remainingBookmarks)
  }
  return (
    <> 
      <Header></Header>
      <div className='flex py-4 max-w-7xl mx-auto'>
       <Blogs 
       handleBookmark ={handleBookmark}
       handleMarkAsRead ={handleMarkAsRead}
       ></Blogs>
       <Bookmarks 
       bookmarks ={bookmarks}
       markAsRead ={markAsRead}
       ></Bookmarks>
      </div>
    </>
  )
}

export default App
