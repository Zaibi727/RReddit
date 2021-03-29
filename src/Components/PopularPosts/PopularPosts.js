import React from 'react';
import './PopularPosts.css';

class PopularPosts extends React.Component {
    render() { 
        return ( 
            <div className="PopularPosts">
               <section className="popular-posts-section-one">
                       <h3>Popular posts</h3>
                    <div className="popular-posts-top-bar">
                        <div className="btn-bar">
                            <button className="btn-bar-btn-one"><i class="fa fa-fire fa-2x"></i>Hot</button>
                            <select  className="btn-bar-btn-two" name="country" id="country">
                                        <option value="everywhere">Everywhere</option>       
                                        <option value="Coumbo">Columbo</option>      
                                        <option value="Cortia">Cortia</option> 
                                        <option value="Finland">Finland</option>      
                                        <option value="Greece">Greece</option>      
                                        <option value="Pakistan">Pakistan</option>      
                                        <option value="India">India</option>      
                                        <option value="bangladesh">Bangladeash</option>
                            </select>
                            <button  className="btn-bar-btn-three"><i class="fa fa-star fa-lg"></i>New</button>
                            <button  className="btn-bar-btn-four">
                               <i class="fa fa-arrow-up fa-lg"></i>
                               Top
                               </button>
                            <button className="btn-bar-btn-five"><i class="fa fa-ellipsis-h fa-lg"></i></button>
                        </div>
                            <button  className="btn-bar-btn-six">
                              <span><i class="fa fa-square fa-lg"></i></span>
                              <span><i class="fa fa-caret-down fa-lg"></i></span>
                            </button>
                    </div>
               </section>
                  {/*--section-one-of -popular-posts--*/}
                 <section className="popular-posts-section-two">
                     <div  className="popular-posts-section-two-divs-wrapper">
                         <div className="popular-posts-section-two-divs-wrapper-div-left">
                             <buuton><i class="fa fa-arrow-up fa-lg"></i></buuton>
                             <a className="up-down-count" href="#">23.9k</a>
                             <button><i class="fa fa-arrow-down fa-lg"></i></button>
                         </div>
                         {/*--left-arrows-div--*/}
                         <div className="section-two-right-div-wrapper">
                             <div className="section-two-right-div-wrapper-div">
                                 <div className="section-two-right-div-wrapper-div-one">    
                                 <div>
                                     <a><i class="fa fa-user"></i><span>/AskMen</span></a>
                                     <a>Posted bt u/artudetan 13 hours ago</a>
                                     <a><i class="fa fa-use"></i></a>
                                     <a><i class="fa fa-user"></i></a>
                                     <a><i class="fa fa-user"></i>38</a>
                                     <a><i class="fa fa-user"></i>37</a>
                                     <a>& 87 More</a>
                                 </div>
                                 <div>
                                     <button className="post-join-btn">
                                         <i class="fa fa-plus"></i> Join
                                     </button>
                                 </div>
                                  </div>
                                 {/*--join button and user detial div--*/}
                                 <div className="section-two-right-div-wrapper-div-two">
                                     <h2>What did you not know or realize until after living with a woman?</h2>
                                     <p>
                                         For example, I had no idea that youweren't supposed to wash your hair everyday until after my girlfriend moved in.
                                     </p>
                                     <img src="/images/crowd.jpg"/>
                                     <div className="comment-div">
                                         <p>
                                         <i class="fa fa-comment"></i>10.k comments
                                         </p>
                                         <p>
                                         <i class="fa fa-share"></i> Share
                                         </p>
                                         <button className="comment-btn">
                                         <i class="fa fa-ellipsis-h"></i>
                                         </button>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </section> 
                 {/*--section-two-of-popular-post--*/}
                        
                 <section className="popular-posts-section-two">
                     <div  className="popular-posts-section-two-divs-wrapper">
                         <div className="popular-posts-section-two-divs-wrapper-div-left">
                             <buuton><i class="fa fa-arrow-up fa-lg"></i></buuton>
                             <a className="up-down-count" href="#">23.9k</a>
                             <button><i class="fa fa-arrow-down fa-lg"></i></button>
                         </div>
                         {/*--left-arrows-div--*/}
                         <div className="section-two-right-div-wrapper">
                             <div className="section-two-right-div-wrapper-div">
                                 <div className="section-two-right-div-wrapper-div-one">    
                                 <div>
                                     <a><i class="fa fa-user"></i><span>/AskMen</span></a>
                                     <a>Posted bt u/artudetan 13 hours ago</a>
                                     <a><i class="fa fa-use"></i></a>
                                     <a><i class="fa fa-user"></i></a>
                                     <a><i class="fa fa-user"></i>38</a>
                                     <a><i class="fa fa-user"></i>37</a>
                                     <a>& 87 More</a>
                                 </div>
                                 <div>
                                     <button className="post-join-btn">
                                         <i class="fa fa-plus"></i> Join
                                     </button>
                                 </div>
                                  </div>
                                 {/*--join button and user detial div--*/}
                                 <div className="section-two-right-div-wrapper-div-two">
                                     <h2>What did you not know or realize until after living with a woman?</h2>
                                     <p>
                                         For example, I had no idea that youweren't supposed to wash your hair everyday until after my girlfriend moved in.
                                     </p>
                                     <img src="/images/ship.jpg"/>
                                     <div className="comment-div">
                                         <p>
                                         <i class="fa fa-comment"></i>10.k comments
                                         </p>
                                         <p>
                                         <i class="fa fa-share"></i> Share
                                         </p>
                                         <button className="comment-btn">
                                         <i class="fa fa-ellipsis-h"></i>
                                         </button>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </section> 
                 {/*--section-two-of-popular-post--*/}
                 <section className="popular-posts-section-two">
                     <div  className="popular-posts-section-two-divs-wrapper">
                         <div className="popular-posts-section-two-divs-wrapper-div-left">
                             <buuton><i class="fa fa-arrow-up fa-lg"></i></buuton>
                             <a className="up-down-count" href="#">23.9k</a>
                             <button><i class="fa fa-arrow-down fa-lg"></i></button>
                         </div>
                         {/*--left-arrows-div--*/}
                         <div className="section-two-right-div-wrapper">
                             <div className="section-two-right-div-wrapper-div">
                                 <div className="section-two-right-div-wrapper-div-one">    
                                 <div>
                                     <a><i class="fa fa-user"></i><span>/AskMen</span></a>
                                     <a>Posted bt u/artudetan 13 hours ago</a>
                                     <a><i class="fa fa-use"></i></a>
                                     <a><i class="fa fa-user"></i></a>
                                     <a><i class="fa fa-user"></i>38</a>
                                     <a><i class="fa fa-user"></i>37</a>
                                     <a>& 87 More</a>
                                 </div>
                                 <div>
                                     <button className="post-join-btn">
                                         <i class="fa fa-plus"></i> Join
                                     </button>
                                 </div>
                                  </div>
                                 {/*--join button and user detial div--*/}
                                 <div className="section-two-right-div-wrapper-div-two">
                                     <h2>What did you not know or realize until after living with a woman?</h2>
                                     <p>
                                         For example, I had no idea that youweren't supposed to wash your hair everyday until after my girlfriend moved in.
                                     </p>
                                     <img src="/images/art-one.jpg"/>
                                     <div className="comment-div">
                                         <p>
                                         <i class="fa fa-comment"></i>10.k comments
                                         </p>
                                         <p>
                                         <i class="fa fa-share"></i> Share
                                         </p>
                                         <button className="comment-btn">
                                         <i class="fa fa-ellipsis-h"></i>
                                         </button>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </section> 
                 {/*--section-two-of-popular-post--*/}
                 <section className="popular-posts-section-two">
                     <div  className="popular-posts-section-two-divs-wrapper">
                         <div className="popular-posts-section-two-divs-wrapper-div-left">
                             <buuton><i class="fa fa-arrow-up fa-lg"></i></buuton>
                             <a className="up-down-count" href="#">23.9k</a>
                             <button><i class="fa fa-arrow-down fa-lg"></i></button>
                         </div>
                         {/*--left-arrows-div--*/}
                         <div className="section-two-right-div-wrapper">
                             <div className="section-two-right-div-wrapper-div">
                                 <div className="section-two-right-div-wrapper-div-one">    
                                 <div>
                                     <a><i class="fa fa-user"></i><span>/AskMen</span></a>
                                     <a>Posted bt u/artudetan 13 hours ago</a>
                                     <a><i class="fa fa-use"></i></a>
                                     <a><i class="fa fa-user"></i></a>
                                     <a><i class="fa fa-user"></i>38</a>
                                     <a><i class="fa fa-user"></i>37</a>
                                     <a>& 87 More</a>
                                 </div>
                                 <div>
                                     <button className="post-join-btn">
                                         <i class="fa fa-plus"></i> Join
                                     </button>
                                 </div>
                                  </div>
                                 {/*--join button and user detial div--*/}
                                 <div className="section-two-right-div-wrapper-div-two">
                                     <h2>What did you not know or realize until after living with a woman?</h2>
                                     <p>
                                         For example, I had no idea that youweren't supposed to wash your hair everyday until after my girlfriend moved in.
                                     </p>
                                     <div className="comment-div">
                                         <p>
                                         <i class="fa fa-comment"></i>10.k comments
                                         </p>
                                         <p>
                                         <i class="fa fa-share"></i> Share
                                         </p>
                                         <button className="comment-btn">
                                         <i class="fa fa-ellipsis-h"></i>
                                         </button>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </section> 
                 {/*--section-two-of-popular-post--*/}
                 <section className="popular-posts-section-two">
                     <div  className="popular-posts-section-two-divs-wrapper">
                         <div className="popular-posts-section-two-divs-wrapper-div-left">
                             <buuton><i class="fa fa-arrow-up fa-lg"></i></buuton>
                             <a className="up-down-count" href="#">23.9k</a>
                             <button><i class="fa fa-arrow-down fa-lg"></i></button>
                         </div>
                         {/*--left-arrows-div--*/}
                         <div className="section-two-right-div-wrapper">
                             <div className="section-two-right-div-wrapper-div">
                                 <div className="section-two-right-div-wrapper-div-one">    
                                 <div>
                                     <a><i class="fa fa-user"></i><span>/AskMen</span></a>
                                     <a>Posted bt u/artudetan 13 hours ago</a>
                                     <a><i class="fa fa-use"></i></a>
                                     <a><i class="fa fa-user"></i></a>
                                     <a><i class="fa fa-user"></i>38</a>
                                     <a><i class="fa fa-user"></i>37</a>
                                     <a>& 87 More</a>
                                 </div>
                                 <div>
                                     <button className="post-join-btn">
                                         <i class="fa fa-plus"></i> Join
                                     </button>
                                 </div>
                                  </div>
                                 {/*--join button and user detial div--*/}
                                 <div className="section-two-right-div-wrapper-div-two">
                                     <h2>What did you not know or realize until after living with a woman?</h2>
                                     <p>
                                         For example, I had no idea that youweren't supposed to wash your hair everyday until after my girlfriend moved in.
                                     </p>
                                     <div className="comment-div">
                                         <p>
                                         <i class="fa fa-comment"></i>10.k comments
                                         </p>
                                         <p>
                                         <i class="fa fa-share"></i> Share
                                         </p>
                                         <button className="comment-btn">
                                         <i class="fa fa-ellipsis-h"></i>
                                         </button>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </section> 
                 {/*--section-two-of-popular-post--*/}
                 <section className="popular-posts-section-two">
                     <div  className="popular-posts-section-two-divs-wrapper">
                         <div className="popular-posts-section-two-divs-wrapper-div-left">
                             <buuton><i class="fa fa-arrow-up fa-lg"></i></buuton>
                             <a className="up-down-count" href="#">23.9k</a>
                             <button><i class="fa fa-arrow-down fa-lg"></i></button>
                         </div>
                         {/*--left-arrows-div--*/}
                         <div className="section-two-right-div-wrapper">
                             <div className="section-two-right-div-wrapper-div">
                                 <div className="section-two-right-div-wrapper-div-one">    
                                 <div>
                                     <a><i class="fa fa-user"></i><span>/AskMen</span></a>
                                     <a>Posted bt u/artudetan 13 hours ago</a>
                                     <a><i class="fa fa-use"></i></a>
                                     <a><i class="fa fa-user"></i></a>
                                     <a><i class="fa fa-user"></i>38</a>
                                     <a><i class="fa fa-user"></i>37</a>
                                     <a>& 87 More</a>
                                 </div>
                                 <div>
                                     <button className="post-join-btn">
                                         <i class="fa fa-plus"></i> Join
                                     </button>
                                 </div>
                                  </div>
                                 {/*--join button and user detial div--*/}
                                 <div className="section-two-right-div-wrapper-div-two">
                                     <h2>What did you not know or realize until after living with a woman?</h2>
                                     <p>
                                         For example, I had no idea that youweren't supposed to wash your hair everyday until after my girlfriend moved in.
                                     </p>
                                     <div className="comment-div">
                                         <p>
                                         <i class="fa fa-comment"></i>10.k comments
                                         </p>
                                         <p>
                                         <i class="fa fa-share"></i> Share
                                         </p>
                                         <button className="comment-btn">
                                         <i class="fa fa-ellipsis-h"></i>
                                         </button>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </section> 
                 {/*--section-two-of-popular-post--*/}
                 <section className="popular-posts-section-two">
                     <div  className="popular-posts-section-two-divs-wrapper">
                         <div className="popular-posts-section-two-divs-wrapper-div-left">
                             <buuton><i class="fa fa-arrow-up fa-lg"></i></buuton>
                             <a className="up-down-count" href="#">23.9k</a>
                             <button><i class="fa fa-arrow-down fa-lg"></i></button>
                         </div>
                         {/*--left-arrows-div--*/}
                         <div className="section-two-right-div-wrapper">
                             <div className="section-two-right-div-wrapper-div">
                                 <div className="section-two-right-div-wrapper-div-one">    
                                 <div>
                                     <a><i class="fa fa-user"></i><span>/AskMen</span></a>
                                     <a>Posted bt u/artudetan 13 hours ago</a>
                                     <a><i class="fa fa-use"></i></a>
                                     <a><i class="fa fa-user"></i></a>
                                     <a><i class="fa fa-user"></i>38</a>
                                     <a><i class="fa fa-user"></i>37</a>
                                     <a>& 87 More</a>
                                 </div>
                                 <div>
                                     <button className="post-join-btn">
                                         <i class="fa fa-plus"></i> Join
                                     </button>
                                 </div>
                                  </div>
                                 {/*--join button and user detial div--*/}
                                 <div className="section-two-right-div-wrapper-div-two">
                                     <h2>What did you not know or realize until after living with a woman?</h2>
                                     <p>
                                         For example, I had no idea that youweren't supposed to wash your hair everyday until after my girlfriend moved in.
                                     </p>
                                     <img src="/images/art-one.jpg"/>
                                     <div className="comment-div">
                                         <p>
                                         <i class="fa fa-comment"></i>10.k comments
                                         </p>
                                         <p>
                                         <i class="fa fa-share"></i> Share
                                         </p>
                                         <button className="comment-btn">
                                         <i class="fa fa-ellipsis-h"></i>
                                         </button>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </section> 
                 {/*--section-two-of-popular-post--*/}
            </div>
         );
    }
}
 
export default PopularPosts;