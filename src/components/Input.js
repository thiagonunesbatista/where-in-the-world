import PropTypes from 'prop-types'

import { FaSearch } from 'react-icons/fa'

const Input = ({ placeholder }) => {
  return (
    <div>
      <FaSearch />
      <input type='text' placeholder={placeholder} />
    </div>
  )
}

Input.propTypes = {
  placeholder: PropTypes.string
}

export default Input
