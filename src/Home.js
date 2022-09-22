import { useState } from "react";
import Blogs from "./Blogs";

const Home = () => {
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(22);

    const clickE = () => {
        setName('luigi');
        setAge(23);
    }

    const clicks = (name,age) => {
        setName(name);
        setAge(age)
    }

    const [blogs, setBlogs] = useState([
        {title: 'the new one', author: 'mario', id: 1},
        {title: 'the old one', author: 'mario', id: 2},
        {title: 'the right one', author: 'luigi', id: 3}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    
    return (
        <div>
            <p>{name} is {age} y.o.</p>
            <button onClick={clickE}>change</button>
            <button onClick={() => {
                clicks('bowser',22);
            }}>changename</button>
           <Blogs blogs={blogs} title="bloggers" handleDelete={handleDelete} />
        </div>
    );
}
 
export default Home;