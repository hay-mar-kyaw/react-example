import logo from './logo.svg';
import './App.css';
import Image from './assets/image.avif';
import { useState } from 'react';
import Navbar from './components/Navbar';
import PostsList from './components/PostsList';

function App() {

  // let name="hay mar kyaw";
  // let [name,setName] = useState("Hay Mar Kyaw");//[getter,setterFun]

  // Increasement counter using prevState 

  // let[count,setCount] = useState(0);

  // let increaseCount = () => {
  //   setCount((prevState)=>prevState+1); //using prevState instead of (count) 
    
  // }

  // create post 

 let [posts,setPost] = useState([
  {
    id:1,
    title:"title 1"
  },
  {
    id:2,
    title:"title 2"
  },
  {
    id:3,
    title:"title 3"
  },
 ])

//  Deleting Post using useState 

//  let deletePost = (id) =>{
//   setPost((prevState)=>prevState.filter(post => post.id !== id));
  
//  }

 //Change name using useState
  // let changeName=()=>{
  //   setName("Aung Aung");
  //   console.log(name);
    
  // }
  return (
        <>
          <Navbar/>
          <PostsList posts={posts}/>  
        </>
        






      // <div>
          //{/* <h1>{name}</h1> */}
          /* relative path  */
          //{/* <img src="/image.avif"></img> */}
         // {/* <img src={Image}></img> */}
         // {/* <button onClick={changeName}>change name</button> */}

          /* <ul>
              { !!posts.length && posts.map((post)=>(
                <li key={post.id}>
                  {post.title}
                  <button onClick={()=>deletePost(post.id)}>delete</button>
                </li>
                
              ))
                
              }
              {
                !posts.length && <p>No Post Available</p>
              }
          </ul>

          <div>
              <h1>Counter</h1>
              <p>Count - {count}</p>
              <button onClick={increaseCount}>Increasement</button>
          </div>
      </div> */
      
      
  );
}

export default App;
