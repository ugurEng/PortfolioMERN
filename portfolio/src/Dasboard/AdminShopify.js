import React, { useState } from "react";
import axios from "axios"
import './Admin.css';
import Sidebarcomponent from "./DashComponents/Sidebarcomponent";
import NavComponent from "./DashComponents/NavComponent";

function AdminShopify() {

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
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
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
        <div id="adsa" class="alert alert-primary" role="alert">
          A simple primary alert—check it out!
        </div>
        <form onSubmit={(e) => submit(e)} >
          <div class="form-group-sm ada">
            <label class="labell" for="exampleFormControlSelect1">Select Your Project</label>
            <select class="form-control labell"
              id="projectselect"
              value={data.projectselect} onChange={(e) => handleselect(e)}>
              <option>MERN Stack</option>
              <option>Shopify</option>
              <option>Mentoring Project</option>
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



}

export default AdminShopify;
