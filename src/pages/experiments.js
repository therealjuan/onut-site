import React from 'react'
import Template from '../components/template'
import Link from 'gatsby-link'

import exp1 from './exp1.svg'
import exp2 from './exp2.svg'
import exp3 from './exp3.svg'
import exp4 from './exp4.svg'

import './Experiments.css'

const Icon = () => (
  <svg width="200px" height="200px" viewBox="0 0 200 200" version="1.1" className="experiment-icon">
  <g id="exp1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
  <ellipse id="outside" stroke="#000000" stroke-width="1.6" cx="99.9642218" cy="100.03876" rx="79.9642218" ry="80.0387597"></ellipse>
  <ellipse id="inside" stroke="#000000" stroke-width="1.6" cx="99.9749553" cy="100.027132" rx="55.9749553" ry="56.0271318"></ellipse>
  <ellipse id="inner" stroke="#000000" stroke-width="1.6" cx="99.9660107" cy="100.036822" rx="75.9660107" ry="76.0368217"></ellipse>
</g>
  </svg>
)

const ExpPage = () => (
  <Template>
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
  </Template>
)

export default ExpPage