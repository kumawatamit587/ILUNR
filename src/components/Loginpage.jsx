import React from "react";
import Loged from "./Loged";
import { Link} from "react-router-dom";
function Loginpage() {
    return (
      <div>
      <div>
    <img src="../images/pexels-katerina-holmes-5905700 (1).jpg" class="home img-fluid" alt="Responsive image"/>
    </div>
     <img class="dark img-fluid" src="../images/Rectangle 1.svg" alt="dark"/>
  <button type="button" class="btn join"><p>Join as a Tutor</p></button>
     <img class="dark contact" src="../images/Group 441.svg"/>
    <Link to="/"><img class="dark logo" src="https://events.ilrnu.com/asset/front/images/logo-black.png"/></Link>


     <div class="dark form">
<Link to="/"><img class="wrong" src="../images/Path 5616.svg"/></Link>
     <form class="login-form">
      <h3>LogIn</h3>

  <div class="form-group">
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    </div>
  <div class="form-group">
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <Link to="/loged"><button type="submit" class="submit btn"><a>Log In</a></button></Link>
  <button type="submit" class="submit1 btn "><a href="...">LogIn with gmail</a></button>
  <h6>Note a Member of ILRNU? <a href="">SignUp</a></h6>
</form>
     </div>
</div>
    );
}

export default Loginpage;
