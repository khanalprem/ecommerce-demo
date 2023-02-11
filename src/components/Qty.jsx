import React from 'react'
import {MdAdd, MdRemove} from 'react-icons/md'

const Qty = ({quantity, setDecrease, setIncrease}) => {
  return (
    <div className="qty-btns">
      <button className="btn btn-sm" onClick={() => setDecrease()}>
        <MdRemove/>
      </button>
      <span className="pd-8">{quantity}</span>
      <button className="btn btn-sm" onClick={() => setIncrease()}>
        <MdAdd/>
      </button>
    </div>
  )
}

export default Qty