import { MdBookmarkBorder } from "react-icons/md";


const Blog = ({blog,handleBookmark,handleMarkAsRead }) => {
    const {id,cover,title,author,img,posted_date,reading_time,hashtags,read_time} = blog;
    return (
        <div>
            <img className="w-full mb-2 mt-2" src={cover} alt="" />
            <div className="flex justify-between items-center">
                <div className="flex gap-2">
                    <img src={img} className="w-[60px]" alt="" />
                    <div>
                        <h1 className="text-2xl font-bold">{author}</h1>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="flex ">
                    <span>{reading_time}</span>
                    <button onClick={()=> handleBookmark(blog)}
                    className="ml-2 text-2xl">
                        <MdBookmarkBorder></MdBookmarkBorder>
                    </button>
                </div>
            </div>
            <h2 className="text-2xl">{title}</h2>
            <h3>
                {
                  hashtags.map(hash => <span><a href="">{hash}</a></span>) 
                }
            </h3>
            <br />
            <button onClick={() => handleMarkAsRead(id,read_time)} className="text-purple-600 underline font-bold">Mark As Read</button>

        </div>
    );
};

export default Blog;