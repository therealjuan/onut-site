import React from 'react'
import Template from '../components/template'
import Link from 'gatsby-link'

import exp1 from './exp1.svg'

console.log(exp1)

import exp2 from './exp2.svg'
import exp3 from './exp3.svg'
import exp4 from './exp4.svg'

import './Experiments.css'

const ExpPage = () => (
  <Template>
    <div className="experiments-layout">
      <div className="experiment-block">
          <Link to="/experiments/">
              <img src={exp1} alt="Experiment 1" className="experiment-icon" />
          </Link>
      </div>
      <div className="experiment-block">
          <Link to="/experiments/">
              <img src={exp2} alt="Experiment 2" className="experiment-icon" />
          </Link>
      </div>
      <div className="experiment-block">
          <Link to="/experiments/">                
              <img src={exp3} alt="Experiment 3" className="experiment-icon" />
          </Link>                        
      </div>
      <div className="experiment-block">
          <Link to="/experiments/">                
              <img src={exp4} alt="Experiment 4" className="experiment-icon" />
          </Link>                    
      </div>
      <div className="experiment-block">
          <Link to="/experiments/">                
              <img src={exp2} alt="Experiment 2" className="experiment-icon" />
          </Link>                    
      </div>
      <div className="experiment-block">
          <Link to="/experiments/">                
              <img src={exp3} alt="Experiment 3" className="experiment-icon" />
          </Link>
      </div>
    </div>
  </Template>
)

export default ExpPage