import React from 'react';
import './Trending.css';

class Trending extends React.Component {
    render() { 
        return (
            <div className="trending-component-full-body">
                       <div className="Trending-wrapper">
                <h4>Trending today</h4>
                <section className="trending-boxes">
                    <div className="trending-box-div" 
                         style={{
                         backgroundImage: "url('/images/one.jpg')",
                         backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                         
                    }}>
                        <div className="trending-box-content-div">
                            <h3>Sinatraa</h3>
                            <p className="p1">SF Shock statement on Sinatraa</p>
                            <p><span><i class="fa fa-camera"></i></span> r/pcgaming and more</p>
                        </div>
                    </div>
                    <div className="trending-box-div"
                       style={{
                         backgroundImage: "url('/images/two.jpg')",
                         backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                    }}>
                        <div className="trending-box-content-div">
                            <h3>Ovh</h3>
                            <p className="p1">Random woman tries to convince kids to be Christian and not be</p>
                            <p><span><i class="fa fa-camera"></i></span> r/pcgaming and more</p>
                        </div>

                    </div>
                    <div className="trending-box-div"
                     style={{
                         backgroundImage: "url('/images/three.jpg')",
                         backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                    }}>
                        <div className="trending-box-content-div">
                            <h3>David hissy</h3>
                            <p className="p1">Random woman tries to convince kids to be Christian and not be</p>
                            <p><span><i class="fa fa-camera"></i></span> r/pcgaming and more</p>
                        </div>

                    </div>
                    <div className="trending-box-div"  style={{
                         backgroundImage: "url('/images/four.jpg')",
                         backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                         
                    }}>
                       <div className="trending-box-content-div">
                            <h3>tiwmmy </h3>
                            <p className="p1">Random woman tries to convince kids to be Christian and not be</p>
                            <p><span><i class="fa fa-camera"></i></span> r/pcgaming and more</p>
                        </div>

                    </div>
                </section>
            </div>
        </div>
            
          );
    }
}
 
export default Trending;