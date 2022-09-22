const Blogs = ({blogs,title,handleDelete}) => {
    return ( 
        <div>
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div style={{
                    display: 'flex'
                }} key={blog.id}>
                    <p>{blog.title}</p>
                    <button onClick={() => handleDelete(blog.id)}>delete</button>
                </div>
            ))}
        </div>
    );
}
 
export default Blogs;