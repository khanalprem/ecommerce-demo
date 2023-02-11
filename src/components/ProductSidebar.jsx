import React from 'react'

const ProductSidebar = () => {
  return (
    <div className='sidebar'>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" name="text" value={text} onChange={updateFilterValue}/>
      </form>
    </div>
  )
}

export default ProductSidebar