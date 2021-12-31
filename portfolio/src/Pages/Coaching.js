import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import axios  from "axios"



function Mentoring() {

  const [posts, setPosts] = useState([])

  useEffect( ()=>{
    axios.get("http://localhost:5002/coaching")
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
    
  
  <div class="container">
      <div class="row">
        {posts.map(post => (
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-0 shadow">
              <img key={post.id} src={post.projectimage} class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h5 key={post.id} class="card-title mb-0">{post.projectname}</h5>
                <div key={post.id} class="card-text text-black-50">{post.projectdesc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
</div>
  }

  export default Mentoring;
