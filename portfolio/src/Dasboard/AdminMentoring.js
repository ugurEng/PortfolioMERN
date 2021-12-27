import React, { useState,useEffect } from "react";
import axios from "axios"
import './Admin.css';
import Sidebarcomponent from "./DashComponents/Sidebarcomponent";
import NavComponent from "./DashComponents/NavComponent";


function AdminMentoring() {

  const [posts, setPosts] = useState([])

  useEffect( ()=>{
    axios.get("http://localhost:5002/mentoring")
    .then(res=> {
      setPosts(res.data)
    })
    .catch(err=> {
      console.log(err)
    })
  }, [])

  return <div>
    <NavComponent/>
    <div>
    <Sidebarcomponent/>
    </div>
    <div class="MentoringContent overflow-auto">
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
  </div>
}

export default AdminMentoring;
