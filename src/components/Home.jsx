import React from "react";
import { Link} from "react-router-dom";
function Home() {
    return (
      <div>
      <div>
    <img src="../images/pexels-katerina-holmes-5905700 (1).jpg" class="home img-fluid" alt="Responsive image"/>
    </div>
     <img class="dark img-fluid" src="../images/Rectangle 1.svg" alt="dark"/>
  <button type="button" class="btn join"><p>Join as a Tutor</p></button>
     <Link to="/logintab">
     <img class="dark contact" src="../images/Group 441.svg"/>
     </Link>
     <Link to="/"><img class="dark logo" src="https://events.ilrnu.com/asset/front/images/logo-black.png"/></Link>
</div>
    );
}

export default Home;
