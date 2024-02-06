import React from 'react'

const Rows = ({rowData}) => {
  return (
    <tr class="bg-white dark:bg-gray-200">
    <th
      scope="row"
      class="px-6 py-4 font-medium  whitespace-nowrap text-black 2xl:text-base"
    >
      {rowData.name}
    </th>

    <td class="px-6 py-4 text-black 2xl:text-base">{rowData.age}</td>
  </tr>
  )
}

export default Rows
