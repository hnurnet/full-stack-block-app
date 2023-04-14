import React from 'react'

const Menu = () => {
    const posts = [
        {
          id:1,
          title:"Lorem Ipsum is simply dummy text of the printing",
          desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          img: "https://images.pexels.com/photos/57556/pexels-photo-57556.jpeg"
    
        },
        {
          id:2,
          title:"Lorem Ipsum is simply dummy text of the printing",
          desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          img: "https://images.pexels.com/photos/3025236/pexels-photo-3025236.jpeg"
    
        },
        {
          id:3,
          title:"Lorem Ipsum is simply dummy text of the printing",
          desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          img: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg"
    
        },
        {
          id:4,
          title:"Lorem Ipsum is simply dummy text of the printing",
          desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          img: "https://images.pexels.com/photos/65620/fruit-tomato-vegetable-nature-65620.jpeg"
    
        },
    
      ]
  return (
    <div className="menu">
        <h2>Other posts you may like</h2>
        {posts.map(post=>(
            <div className="post" key={post.id}>
                <img src={post.img} alt=""/>
                <h2>{post.title}</h2>
                <button>Read More</button>

            </div>
        ))}
      
    </div>
  )
}

export default Menu




