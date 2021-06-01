import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FaSearch } from 'react-icons/fa'

export const SearchInput = ({
  handleInput,
  handleSubmit,
  placeholder,
  value,
  type = 'text'
}) => {
  return (
    <InputContainer>
      <FaSearch size='16' onClick={handleSubmit} />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={event => handleInput(event)}
      />
    </InputContainer>
  )
}

SearchInput.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string
}

const InputContainer = styled.div`
  width: 327px;
  height: 48px;
  border: 1px solid;
  display: flex;
  align-items: center;

  ${({ theme: { border, primaryText, secondaryBackground } }) => ({
    background: secondaryBackground,
    borderColor: border,
    color: primaryText,
    '&:focus-within': {
      borderColor: primaryText
    }
  })}

  svg {
    margin: 0 16px;
    cursor: pointer;
  }

  input {
    height: 100%;
    width: 100%;
    outline: none;
    background: inherit;
    border: none;
    color: inherit;
    line-height: 24px;
    font-size: 16px;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
