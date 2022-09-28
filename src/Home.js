import { useEffect } from "react";
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

    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[]);
    
    return (
        <div>
            <p>{name} is {age} y.o.</p>
            <button onClick={clickE}>change</button>
            <button onClick={() => {
                clicks('bowser',22);
            }}>changename</button>
           { blogs && <Blogs blogs={blogs} title="bloggers" />}
        </div>
    );
}
 
export default Home;