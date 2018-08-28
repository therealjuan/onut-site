import React from 'react'
import { checkPropTypes } from 'prop-types';

const Template = ({ children, location }) => (
    <section id="main-content">
        {children}
    </section>
)

export default Template