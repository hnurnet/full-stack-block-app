import React, {useState,useEffect} from 'react';
import {Link,useLocation} from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [posts,setPosts] = useState([])
  const cat = useLocation().search


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`)
        setPosts(res.data)


      }
      catch(err) {
        console.log(err)
      }

    }
    fetchData()


  }, [cat])
  // const posts = [
  //   {
  //     id:1,
  //     title:"Lorem Ipsum is simply dummy text of the printing",
  //     desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  //     img: "https://images.pexels.com/photos/57556/pexels-photo-57556.jpeg"

  //   },
  //   {
  //     id:2,
  //     title:"Lorem Ipsum is simply dummy text of the printing",
  //     desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  //     img: "https://images.pexels.com/photos/3025236/pexels-photo-3025236.jpeg"

  //   },
  //   {
  //     id:3,
  //     title:"Lorem Ipsum is simply dummy text of the printing",
  //     desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  //     img: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg"

  //   },
  //   {
  //     id:4,
  //     title:"Lorem Ipsum is simply dummy text of the printing",
  //     desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  //     img: "https://images.pexels.com/photos/65620/fruit-tomato-vegetable-nature-65620.jpeg"

  //   },

  // ]
  return (
    <div className="home">
      <div className="posts">
        {posts.map(post=>(
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt=""/>
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
              <h1>{post.title}</h1>
              
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Home
