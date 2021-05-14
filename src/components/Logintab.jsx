import React from "react";
import { Link} from "react-router-dom";

function Logintab() {
    return (
      <div>
      <div>
    <img src="../images/pexels-katerina-holmes-5905700 (1).jpg" class="home img-fluid" alt="Responsive image"/>
    </div>
     <img class="dark img-fluid" src="../images/Rectangle 1.svg" alt="dark"/>
  <button type="button" class="btn join"><p>Join as a Tutor</p></button>
     <img class="dark contact" src="../images/Group 441.svg"/>
    <Link to="/"><img class="dark logo" src="https://events.ilrnu.com/asset/front/images/logo-black.png"/></Link>

     <div class="dark list-dark">
     <ul class="no-bullets">
   <Link to="/loginpage">
   <li class="list login"><a href="">Log In</a></li></Link>
   <li class="list signup"><a>Sign Up</a></li>
   <li class="list homeonline"><a>Home Online Tutoring Work</a></li>
   <li class="list help"><a>Help Center</a></li>
   </ul>
     </div>
</div>
    );
}

export default Logintab;
