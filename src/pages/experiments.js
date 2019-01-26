import React from 'react'
import { withRouteData } from 'react-static'
import { Link } from '@reach/router'

export default withRouteData(({ experiments }) => (
  <div>
    <h1>Things I've Made</h1>
    
    <p>Various states of <code>:under-construction:</code></p>
    
    <ul>
      {experiments.map(experiment => 
        <li key={experiment.name}>
          <a href={`/${experiment.name}`}>Web Audio Mod Player</a>
        </li>
      )}
    </ul>
  </div>
))
