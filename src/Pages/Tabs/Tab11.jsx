import React from 'react'
import Netflix1 from '../../images/netf1.jpg'
import Register from '../Register/Register'
import './Tab11.scss'

function Tab11() {
    return (
        <div className='tab-content'>
            <div id="tab-1-content">
                <div>
                <p className="text-xl">
                If you decide Netflix isn't for you - no problem.  No comittment.
                Cancel online anytime.
              </p>
              <a href={<Register/>} class="btn btn-xl">Watch free for 30 days.</a></div>        
            <img src={Netflix1} alt="" />
            </div>            
        </div>
    )
}

export default Tab11
