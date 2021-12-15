import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import axios  from "axios"



function Projects() {

  const [posts, setPosts] = useState([])

  useEffect( ()=>{
    axios.get("http://localhost:5002/projects")
    .then(res=> {
      setPosts(res.data)
    })
    .catch(err=> {
      console.log(err)
    })
  }, [])

 

    return <div> 
    <Header></Header>
        <section class="py-5 text-center container d-flex">
           <div>
               <h1>dwwd</h1>
              <p>wdwdadawdawdawdawdawdawd</p>
           </div>
           <div>
           <img src="https://images.freeimages.com/images/large-previews/ddb/corn-field-2-1368926.jpg" class="img-fluid" alt="Responsive"/>
           </div>
        </section>
  <div class="album py-5 bg-light">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {posts.map(post=> (
        <div class="col">
          <div class="card shadow-sm">
          <img key={post.id} src={post.projectimage} alt="BigCo Inc. logo"/>
            <div style={{height: 300}} class="card-body">
            <p class="card-text"  key={post.id}>Project: {post.projectselect}</p>
              <p class="card-text"  key={post.id}>Project Name: {post.projectname}</p>
              <p class="card-text"  key={post.id}>Description: {post.projectdesc}</p>
            </div>
          </div>
        </div>
         ))}
      </div>
    </div>
  </div>
</div>
  }

  export default Projects;
