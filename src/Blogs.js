const Blogs = ({blogs,title}) => {
    return ( 
        <div>
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div style={{
                    display: 'flex'
                }} key={blog.id}>
                    <p>{blog.title}</p>
                </div>
            ))}
        </div>
    );
}
 
export default Blogs;