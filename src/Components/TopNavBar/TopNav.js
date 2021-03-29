import React, {useState} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Modal from 'react-modal';
import './TopNav.css';

function TopNav () {
    
      const [modalIsOpen, setModalIsOpen] = useState(false);
      const [modalIsOpeen, setModalIsOpeen] = useState(false);
      const [modalIsOpeeen, setModalIsOpeeen] = useState(false);

        return (
            <div className="TopNav">
              <div className="reddit-icon-div">
                 <span><i class="fa fa-reddit fa-2x"></i></span>
                 <h2>reddit</h2>
               </div>
                <div className="searchbar-component-div">
                  <SearchBar />
                </div>
                <div className="topNav-btn-div">
                    <button id="login-btn" className="topNav-btn" onClick={()=> setModalIsOpen(true)}>Log In</button>
                     <button id="signup-btn" className="topNav-btn" onClick={()=> setModalIsOpeen(true)}>Sign Up</button>
                </div>

                {/*--below-modal-one--*/}
                <Modal className="modal-login-section-wrapper" isOpen={modalIsOpen}>
                          <section className="sign-in-modal-section">
                             <div className="sign-in-modal-section-div-one"
                                 style={{
                         backgroundImage: "url('/images/art.jpg')",
                         backgroundSize: "cover ",
                          backgroundRepeat: "no-repeat",
                         
                    }}>

                             </div>
                             <div className="sign-in-modal-section-div-two">
                                <div className="sign-in-modal-section-div-two-a">
                                   <h3>Login</h3>
                                   <p>By continuing, your agree to our <span className="usernm-blue">User Agrement</span> and <span className="usernm-blue">Privacy Policy.</span>.</p>
                                </div>
                                <div className="sign-in-modal-section-div-two-b">
                                  <button>
                                    <i class="fa fa-google fa-2x"></i>
                                    <h4>CONTINUE WITH GOOGLE</h4>
                                  </button>
                                  <button>
                                  <i class="fa fa-apple fa-2x"></i>
                                    <h4>CONTINUE WITH APPLE</h4>
                                  </button>
                                  <button>
                                  <i class="fa fa-envelope fa-2x"></i>
                                    <h4>CONTINUE WITH EMAIL</h4>
                                  </button>
                                </div>
                                <div className="sign-in-modal-section-div-two-c">
                                  <h4>OR</h4>
                                </div>
                                <div className="sign-in-modal-section-div-two-d">
                                  <form>
                                    <input type="text" placeholder="USERNAME" required/><br></br>
                                    <input type="text" placeholder="PASSWORD" required/><br></br>
                                    <input className="btn-sbmt" type="submit" value="Log In" /><br></br>
                                    <p className="forgot">Forgot your <span className="usernm-blue">username</span> or <span className="usernm-blue">password?</span></p>
                                  </form>
                                  <p  className="forgot">New to Reddit? <strong>SIGN UP</strong></p>
                                </div>
                             </div>
                             <button className="modal-edit-adress-cancel-btn" onClick={()=> setModalIsOpen(false)}>
                                      <i class="fa fa-times-circle fa-2x"></i>
                              </button>
                          </section>
                     </Modal>
                     
                     {/*--below-modal-two--*/}

                     <Modal className="modal-login-section-wrapper" isOpen={modalIsOpeen}>
                          <section className="sign-in-modal-section">
                             <div className="sign-in-modal-section-div-one"
                                 style={{
                         backgroundImage: "url('/images/art.jpg')",
                         backgroundSize: "cover ",
                          backgroundRepeat: "no-repeat",
                         
                    }}>

                             </div>
                             <div className="sign-in-modal-section-div-two">
                                <div className="sign-in-modal-section-div-two-a">
                                   <h3>SIGNUP</h3>
                                   <p>By continuing, your agree to our <span className="usernm-blue">User Agrement</span> and <span className="usernm-blue">Privacy Policy.</span>.</p>
                                </div>
                                <div className="sign-in-modal-section-div-two-b">
                                  <button>
                                    <i class="fa fa-google fa-2x"></i>
                                    <h4>CONTINUE WITH GOOGLE</h4>
                                  </button>
                                  <button>
                                  <i class="fa fa-apple fa-2x"></i>
                                    <h4>CONTINUE WITH APPLE</h4>
                                  </button>
                                </div>
                                <div className="sign-in-modal-section-div-two-c">
                                  <h4>OR</h4>
                                </div>
                                <div className="sign-in-modal-section-div-two-d">
                                  <form>
                                    <input type="text" placeholder="EMAIL" required/><br></br>
                                    <input className="btn-sbmt" type="submit" value="Log In" /><br></br>
                                  </form>
                                  <p  className="forgot">Already a Redditor?<strong>LOG IN</strong></p>
                                </div>
                             </div>
                             <button className="modal-edit-adress-cancel-btn" onClick={()=> setModalIsOpeen(false)}>
                                      <i class="fa fa-times-circle fa-2x"></i>
                              </button>
                          </section>
                     </Modal>


                <div>
                    <button className="topnav-dropdown-button" onClick={()=> setModalIsOpeeen(true)}>
                        <span><i class="fa fa-user fa-lg"></i></span>
                        <span className="caret-down"><i class="fa fa-caret-down fa-lg"></i></span>
                    </button>

                    {/*--below-the-third modal for right button of top navbar with further options--*/}

                    <Modal className="right-btn-modal" isOpen={modalIsOpeeen} onRequestClose={()=> setModalIsOpeeen(false)}>
                       <section className="right-btn-modal-section">
                         <div className="right-btn-modal-section-div-one">
                           <h6>VIEW OPTIONS</h6>
                           <div className="right-btn-modal-section-div-one-a">
                             <img className="moon" src="/images/moon-solid.svg"/>
                             <p>Night Mode</p>
                             <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                             </label>
                           </div>
                         </div>
                         <div className="right-btn-modal-section-div-two">
                              <h6>MORE STUFF</h6>
                             <div className="right-btn-modal-section-div-two-a">
                                <i class="fa fa-copyright fa-lg"></i>
                                <div className="reddit-coin">
                                 <h5>Reddit Coins</h5>
                                 <p>0 coins</p>
                                </div>
                             </div>
                             <div className="right-btn-modal-section-div-two-a">
                                <i class="fa fa-drupal fa-lg"></i>
                               <h5>Reddit Premium</h5>
                             </div>
                             <div className="right-btn-modal-section-div-two-a">
                                <i class="fa fa-question-circle fa-lg"></i>
                                <h5>Help Center</h5>
                             </div>
                             <div id="login-signup" className="right-btn-modal-section-div-two-a">
                               <i class="fa fa-sign-in fa-lg"></i>
                               <h5>Log IN / Sign Up</h5>
                             </div>
                         </div>
                       </section>
                    </Modal>
                </div>
            </div>
          );
    }
 
export default TopNav;