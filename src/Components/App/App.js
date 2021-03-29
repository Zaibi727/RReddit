import React from 'react';
import  TopNav from '../TopNavBar/TopNav';
import Trending from '../Trending/Trending';
import PopularPosts from '../PopularPosts/PopularPosts';
import './App.css';
import FeaturePosts from '../FeaturePosts/FeaturePosts';

function App() {
  return (
    <div className="App">
    <TopNav />
    <Trending />
    <section className="mix-wrapper">
      <div className="popular-and-feature-post-components">
           <div className="mix-wrapper-div-one">
             <PopularPosts />
           </div>
           <div className="mix-wrapper-div-two">
             <FeaturePosts />
           </div> 
       </div>
    </section>
     
    </div>
  );
}

export default App;
