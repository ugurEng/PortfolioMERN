import React, { useState } from "react";
import axios from "axios"
import './Admin.css';
import Sidebarcomponent from "./DashComponents/Sidebarcomponent";
import NavComponent from "./DashComponents/NavComponent";

function Admin() {

  const [data, setData] = useState({
    projectname: "",
    projectdesc: "",
    projectselect: "",
    projectimage: ""

  })

  function submit(e) {
    e.preventDefault();
    const postData = {
      projectname: data.projectname,
      projectdesc: data.projectdesc,
      projectselect: data.projectselect,
      projectimage: data.projectimage

    };
    axios.post(`http://localhost:5002/projects/add`, postData)
      .then(res => {
        console.log(res.data)
        var x = document.getElementById("adsa");
        x.style.display = "block";
        function myGreeting() {
          x.style.display = "none";
        }
        setTimeout(myGreeting, 3000)
      })
  }

  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }

  function handlelink(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }

  function handleselect(e) {
    const selectdata = { ...data }
    selectdata[e.target.id] = e.target.value
    setData(selectdata)
    console.log(selectdata)
  }

  return <div>
    <NavComponent/>
    <div>
     <Sidebarcomponent/>
      <div class="content overflow-auto">
        <div className="d-flex">
          <div class="card text-white bg-primary mb-3 cardd"
            style={{ width: "14rem" }}>
            <div class="card-body d-flex">
              <div> <svg viewBox="0 0 24 24" width="50" height="50" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12.5 17.52c1.415-1.054 3.624-1.846 5.5-2v6.479c-1.739.263-3.755 1.104-5.5 2v-6.479zm-1 0c-1.415-1.054-3.624-1.846-5.5-2v6.479c1.739.263 3.755 1.104 5.5 2v-6.479zm-6.5 2.917c-2.049-.674-2.996-1.437-2.996-1.437l-.004-2.025c-.008-2.127.088-3.344 2.648-3.909 2.805-.619 5.799-1.317 4.241-3.521-3.901-5.523-.809-9.545 3.111-9.545 3.921 0 6.996 3.991 3.11 9.545-1.529 2.185 1.376 2.888 4.242 3.521 2.57.568 2.657 1.791 2.647 3.934l-.003 2s-.947.763-2.996 1.437v-6.003l-1.082.089c-2.054.169-4.36 1.002-5.918 2.128-1.559-1.126-3.863-1.959-5.918-2.128l-1.082-.089v6.003z" /></svg>
              </div>
              <div>
                <h5 class="card-title">Students</h5>
                <p class="card-text">150</p>
              </div>
            </div>
          </div>
          <div class="card text-white bg-primary mb-3 cardd"
            style={{ width: "14rem" }}>
            <div class="card-body d-flex">
              <div> <svg viewBox="0 0 24 24" width="50" height="50" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M9.484 15.696l-.711-.696-2.552 2.607-1.539-1.452-.698.709 2.25 2.136 3.25-3.304zm0-5l-.711-.696-2.552 2.607-1.539-1.452-.698.709 2.25 2.136 3.25-3.304zm0-5l-.711-.696-2.552 2.607-1.539-1.452-.698.709 2.25 2.136 3.25-3.304zm10.516 11.304h-8v1h8v-1zm0-5h-8v1h8v-1zm0-5h-8v1h8v-1zm4-5h-24v20h24v-20zm-1 19h-22v-18h22v18z" /></svg>
              </div>
              <div>
                <h5 class="card-title">Students</h5>
                <p class="card-text">150</p>
              </div>
            </div>
          </div>
          <div class="card text-white bg-primary mb-3 cardd"
            style={{ width: "14rem" }}>
            <div class="card-body d-flex">
              <div> <img src="https://img.icons8.com/ios/50/000000/shopify.png" alt="imga" />
              </div>
              <div>
                <h5 class="card-title">Students</h5>
                <p class="card-text">150</p>
              </div>
            </div>
          </div>
          <div class="card text-white bg-primary mb-3"
            style={{ width: "14rem" }}>
            <div class="card-body d-flex">
              <div> <img src="https://img.icons8.com/ios/50/000000/react-native--v2.png" alt="imga" />
              </div>
              <div>
                <h5 class="card-title">Students</h5>
                <p class="card-text">150</p>
              </div>
            </div>
          </div>
        </div>

        
         <div id="adsa" class="alert alert-primary" role="alert">
          A simple primary alert—check it out!
        </div>

        <div className="formcss">
          <div className="addprojectdiv">
            <div>
              <h2 className="addproject">Add Your Project</h2>
            </div>
            <div>
              <form className="" onSubmit={(e) => submit(e)} >
                <div class="form-group-sm ada">
                  <label class="labell" for="exampleFormControlSelect1">Select Your Project</label>
                  <select class="form-control labell"
                    id="projectselect"
                    value={data.projectselect} onChange={(e) => handleselect(e)}>
                    <option>Commercial Projects</option>
                    <option>Coaching Project</option>
                  </select>
                </div>
                <div class="form-group-sm ada">
                  <label class="labell" for="exampleFormControlInput1">Project Name</label>
                  <input onChange={(e) => handle(e)} class="form-control" id="projectname" value={data.projectname} />
                </div>
                <div class="form-group-sm ada">
                  <label class="labell" for="exampleFormControlInput1">Project Image Link</label>
                  <input onChange={(e) => handlelink(e)} class="form-control" id="projectimage" value={data.projectimage} />
                </div>
                <div class="form-group-sm ada">
                  <label class="labell" for="exampleFormControlTextarea1">Project Description</label>
                  <textarea onChange={(e) => handle(e)} type="email" id="projectdesc" value={data.projectdesc}
                    class="form-control" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



}

export default Admin;


