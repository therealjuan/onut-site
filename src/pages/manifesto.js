import React from 'react'
import Layout from '../components/layout'
import stones from './stones.svg'
import './Manifesto.css'

const ManifestoPage = () => (
  <Layout>
      <div className="manifesto-content-layout">
      <h1>ONUT v.1 manifesto</h1>
        <p><strong>Our art is based on human emotions as we are humans.</strong> Let’s express the ordinary. Human emotions are universal and timeless</p>
        <p><strong>Our art is universal and open</strong> with an invite to reflection and dialogue. It celebrates diversity of opinions. There are many realities, always evolving with different interpretations</p>
        <p><strong>Our art brings back production over consumption.</strong> Let’s challenge lethargy</p>
        <p><strong>Our art is feed by history and the future on an ongoing basis.</strong> We will create the future using present tools and techniques. We celebrate our past to welcome our future</p>
        <p><strong>Our art ponders on our legacy and what will remain behind us.</strong> Let’s leave a stamp behind</p>
        <p><strong>Our art is political</strong> and we cannot understand it without the context we live in</p>
        <p><strong>Our art seeks constant evolution</strong> and push to reinvent us with every piece.</p>
        <p><strong>Our art reflects on how we could make this world better</strong></p>
        <p>For all these things:</p>
        <ul>
        <li>We will not follow trends, and only our instincts</li>
        <li>We will be open and share our thinking with anyone who will be keen to know us</li>
        <li>We will create and produce as many pieces as possible</li>
        <li>We will consume art and reflect on it on an ongoing basis</li>
        <li>We will often revisit legacy as a theme</li>
        <li>We will advocate for equal opportunities. Giving access to art and education no matter the background</li>
        <li>We will experiment with every piece produced a new material or technology. For us technology is an enabler, a tool to achieve what we stand for</li>
        <li>We will use our art to enable a better world</li>
        </ul>
        <p>For all these, today we create ONUT v.1 manifesto (London 11/08/2018)</p>
    </div>
    <img src={stones} alt="Stones" className="stones" />
  </Layout>
)

export default ManifestoPage