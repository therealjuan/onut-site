import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout'
import exp1 from './exp1.svg'
import exp2 from './exp2.svg'
import exp3 from './exp3.svg'
import exp4 from './exp4.svg'

import './Experiments.css'

const ExpPage = () => (
  <Layout>
    <div className="experiments-layout">
      <div className="experiment-block">
          <Link to="/experiments/flowers">
          <img src={exp1} alt="Experiment 2" className="experiment-icon" />
          </Link>
      </div>
      <div className="experiment-block">
        <img src={exp2} alt="Experiment 2" className="experiment-icon disabled" />
      </div>
      <div className="experiment-block">
        <img src={exp3} alt="Experiment 3" className="experiment-icon disabled" />
      </div>
      <div className="experiment-block">
        <img src={exp4} alt="Experiment 4" className="experiment-icon disabled" />
      </div>
      <div className="experiment-block">
        <img src={exp2} alt="Experiment 2" className="experiment-icon disabled" />
      </div>
      <div className="experiment-block">
        <img src={exp3} alt="Experiment 3" className="experiment-icon disabled" />
      </div>
    </div>
    </Layout>
)

export default ExpPage