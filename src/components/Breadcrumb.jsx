import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = ({title}) => {
  return (
    <div className='container'>
      <Link to='/'>Home</Link>/{title}
    </div>
  )
}

export default Breadcrumb