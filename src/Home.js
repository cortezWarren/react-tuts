import { useState } from "react";

const Home = () => {
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(22);

    const clickE = () => {
        setName('luigi');
        setAge(23);
    }

    const blogs = [
        {title: 'the new one',id: 1},{title: 'the old one',id: 2}];
    
    return (
        <div>
            <p>{name} is {age} y.o.</p>
            <button onClick={clickE}>change</button>
           <div>
                {blogs.map((blog) => (
                    <div key={blog.id}>
                        <p>{blog.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Home;