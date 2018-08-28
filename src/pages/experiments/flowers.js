import React from 'react'
import Template from '../../components/template'
import Link from 'gatsby-link'

import '../Experiments.css'

const FlowersExperiment = () => (
  <Template>
    <div className="experiments-layout">
      <div className="experiment-block">
          <Link to="/experiments/">
              Hello
          </Link>
      </div>
    </div>
  </Template>
)

export default FlowersExperiment