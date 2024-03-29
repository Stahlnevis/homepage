import React from 'react'
import '../App';
const Hero = () => {
  return (
    <div className='hero '>
      <div className='hero-width'> 

      <div className="white-gradient"></div>

      <div className="hero-left">
        <div className='hero-title'>
          <h1>
          Discover<br/> Most Suitable <br/>Property 
          </h1>
        </div>
        <div className='hero-content'>
            <p>Find a variety of properties that suit you very easilty</p>   
            <p>Forget all difficulties in finding a residence for you</p>
        </div>
        <div className='hero-search'>
          <div className="search-bar input">
          <input type="text"></input>
          <div className="button">
            <button>search</button>
          </div>
          </div>
          <div>
            <div className="statistics">
              <div className="stats">
                   <span>
              <span>9,000</span>
              <span>+</span>
                  </span>
              <div className="secondary text">Premium product</div>
              </div>

              <div className="stats">
                    <span>
              <span>2,000</span>
              <span>+</span>
                   </span>
              <div className="secondary text">Happy customer</div>
              </div>

              <div className="stats">
                    <span>
              <span>28</span>
              <span>+</span>
                    </span>
              <div className="secondary text">Awards winning</div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
      <div className="hero-right">
       <div className='image-container'>    
        <img src="./img 321.png" alt="" />
        </div> 
      </div>
    </div></div>
  )
}

export default Hero;