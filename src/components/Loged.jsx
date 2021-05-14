import React from "react";
import { Link} from "react-router-dom";
function Loged() {
    return (
<div>
      <div>
    <img src="../images/pexels-katerina-holmes-5905700 (1).jpg" class="home img-fluid" alt="Responsive image"/>
    </div>
     <img class="dark img-fluid" src="../images/Rectangle 1.svg" alt="dark"/>
     <Link to="/"><img class="dark logo" src="https://events.ilrnu.com/asset/front/images/logo-black.png"/></Link>

     <button type="button" class="btn join1"><p>Join as a Tutor</p></button>
     <img class="dark r424" src="../images/Rectangle 424.svg"/>
     <img class="dark g440" src="../images/Group 440.svg"/>
     <img class="dark g442 contact" src="../images/Group 442.svg"/>
</div>
    );
}

export default Loged;
