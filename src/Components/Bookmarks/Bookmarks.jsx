import Bookmark from "../Bookmark/Bookmark";



const Bookmarks = ({markAsRead,bookmarks}) => {
    return (
        <div className="w-1/3 bg-gray-300 ml-4 rounded-md p-5 mt-2">
            <h1 className="text-3xl text-center border-2 rounded-md m-4 p-3 border-red-500 ">Reading Time :{markAsRead} </h1>
            <h1 className="text-3xl text-center ">Bookmarked Blogs: {bookmarks.length}</h1>

            {/* {
                bookmarks.map( (bookmarkItem) => <Bookmark bookmarkItem ={bookmarkItem}></Bookmark>)
            } */}
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;