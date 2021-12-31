import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import axios  from "axios"


function CommercialProjects() {

  const [posts, setPosts] = useState([])

  useEffect( ()=>{
    axios.get("http://localhost:5002/commercial")
    .then(res=> {
      setPosts(res.data)
    })
    .catch(err=> {
      console.log(err)
    })
  }, [])
    return <div> 
    <Header></Header>
  <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light" > Loren ipsum otklere eroere</h1>
        <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
        <p>
          <a href="/" class="btn btn-primary my-2">Main call to action</a>
          <a href="/" class="btn btn-secondary my-2">Secondary action</a>
        </p>
      </div>
    </div>
  </section>
  <div class="album py-5 bg-light">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {posts.map(post=> (
        <div class="col">
          <div class="card shadow-sm">
          <img key={post.id} src={post.projectimage} alt="BigCo Inc. logo"/>
            <div  style={{height: 200}} class="card-body">
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

  export default CommercialProjects;
