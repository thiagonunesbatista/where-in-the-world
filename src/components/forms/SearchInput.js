import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FaSearch, FaTimes } from 'react-icons/fa'

export const SearchInput = ({
  handleClearValue,
  handleInput,
  handleSubmit,
  placeholder,
  value,
  type = 'text',
  submitOnEnterKey = false
}) => {
  const handleInternalSubmit = event => {
    if (submitOnEnterKey && event.key === 'Enter') {
      return handleSubmit(event)
    }
  }

  return (
    <InputContainer>
      <FaSearch size='16' onClick={handleSubmit} />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={event => handleInput(event)}
        onKeyPress={event => handleInternalSubmit(event)}
      />

      {handleClearValue && value.length > 0 && (
        <FaTimes size='16' onClick={handleClearValue} />
      )}
    </InputContainer>
  )
}

SearchInput.propTypes = {
  handleClearValue: PropTypes.func,
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  submitOnEnterKey: PropTypes.bool
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
