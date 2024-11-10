import React from 'react'

function Dropdown({sortOrder,onSortChange}) {
  return (
    <select value={sortOrder} onChange={onSortChange}>
        <option value='asc'>Ascending</option>
        <option value='des'>Descending</option>
    </select>
  )
}

export default Dropdown