import { Link } from 'react-router-dom';
import Register from './Register';
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
import clarity from "../images/clarity.png"
import validate from "../images/validate.png";
import quality from "../images/quality.png";
import back from "../images/back.jpg";
import badge from "../images/badge.png";

import "./Home.css"
const Home = () => {
    return (
        <>
            <div sm={12} className="mx-0 px-0 ">
            <div className="firstpart">
            <img className="firstimg" src={back}></img>
            <div className="firstpartb">
            <h1 className="display-4">Task Manager</h1>
                    <p className="lead">
                        paltform for task, project management and more...
                    </p>
                   
                   <div  className="sign-me-up">
                   <Link as="input" type="submit" value="Sign me Up!"
                    to="/Register">Sign me Up!</Link>
                   </div>
            </div>
            </div>
                {/* <div className="Jumbotron">
                    <h1 className="display-4">Task Manager</h1>
                    <p className="lead">
                        Simple task manager to keep track of your todos and
                        notes.
                    </p>
                   
                   <div  className="sign-me-up">
                   <Link as="input" type="submit" value="Sign me Up!"
                    to="/Register">Sign me Up!</Link>
                   </div>
                    

                </div> */}

                <div className="card-container">
                  
                {/* <img className="badge" src={badge}></img>  */}

                <div className="card"style={{ width: '18rem', margin:'2rem'}}>
               
                    <img className="card-image"variant="top" src={quality} />
                                    <div>
                        <p className="pickups">Improve work quality</p>
                        <p>
                        Quality work is a task, service, or job completed at high standards to meet or exceed the expectation of everyone with a vested interest in it
                        </p>
                    </div>
                    
                    <div>
              
                        <a href="#">View more...</a>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem', margin:'2rem'}}>
                    <img className="card-image"variant="top" src={clarity} />
                    <div>
                        <p className="pickups">get clarity on tasks</p>
                        <p>
                        Clarify and continuously communicate the purpose of your organization. This is a foundational step toward fostering a team culture
                        </p>
                    </div>
                    
                    <div>
                        
                        <a href="#">View more...</a>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem', margin:'2rem'}}>
                    <img className="card-image" variant="top" src={validate} />
                    <div>
                        <p className="pickups">Validate and monitor tasks</p>
                        <p>
                        Validation is essential to fostering a sense of competence and sustaining motivation, two pivotal pieces of job satisfaction. 
                        </p>
                    </div>
                    
                    <div>
                        <a href="#">View more...</a>
                        
                    </div>
                </div>
                </div>

                <hr></hr>
                <div className="somelines">
                  <div className="someline">
                    <h1>Grow your business</h1>
                    <p>all tools you need to scale</p>
                  </div>
                  <div className="someline">
                    <h1>work better together</h1>
                    <p>your project work in one place</p>
                    </div>
                  <div className="someline">
                    <h1>enjoy the process</h1>
                    <p>reconnect with the joy of creating</p>
                  </div>
                </div>

            </div>
            <div className="site-footer">
      <div className="container">
        <div className="footer-row">
              <div >
                <h6>About</h6>
                <p className="text-justify">Task managers have always been popular and relevant. However, in the context of the mass transition to remote work, many companies felt an urgent need for such a tool. Еhe number of people working remotely has grown by as much as 44%. Now that you know what a task manager is and what criteria will help you in finding a suitable option, we suggest finding the best task managerю</p>
              </div>

              <div>
                <h6>Categories</h6>
                <ul className="footer-links">
                  <li><a href="#">quality</a></li>
                  <li><a href="#">perfection</a></li>
                  <li><a href="#">validation</a></li>
                  <li><a href="#">calrity</a></li>
                
                </ul>
              </div>

              <div>
                <h6>Quick Links</h6>
                <ul className="footer-links">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Contribute</a></li>
                  <li><a href="#">Privacy Policy</a></li>
      
                </ul>
              </div>
        </div>
    
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
         <a href="#"> task manager</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
              <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</div>
        </>
    );
};

export default Home;
