import PropTypes from 'prop-types'
import { useRef, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import styled from 'styled-components'

import { useClickOutside } from 'hooks'

export const Select = ({
  headerMessage = '',
  onChange,
  options = [],
  value
}) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false)

  const selectContainerRef = useRef()

  const handleSelect = event => {
    event.stopPropagation()
    setIsSelectOpen(currentValue => !currentValue)
  }

  useClickOutside(selectContainerRef, () => setIsSelectOpen(false))

  return (
    <SelectContainer onClick={handleSelect} ref={selectContainerRef}>
      <Header>
        <p>{value ? value.label : headerMessage}</p>
        <Chevron up={isSelectOpen ? 1 : 0} />
      </Header>

      <OptionsContainer open={isSelectOpen}>
        {options.length > 0 &&
          isSelectOpen &&
          options.map(option => (
            <Option
              value={option.value}
              key={option.value}
              onClick={() => onChange(option)}
            >
              {option.label}
            </Option>
          ))}
      </OptionsContainer>
    </SelectContainer>
  )
}

Select.propTypes = {
  headerMessage: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
`

const SelectContainer = styled.div`
  width: 242px;
  height: 48px;
  line-height: 24px;
  font-size: 16px;
  padding: 12px 16px 12px 24px;
  border: 1px solid;
  position: relative;
  cursor: pointer;

  ${({ theme: { border, secondaryBackground, primaryText } }) => ({
    background: secondaryBackground,
    'border-color': border,
    color: primaryText
  })}

  @media(max-width: 768px) {
    width: 100%;
  }
`

const OptionsContainer = styled.div`
  position: absolute;
  left: 0;
  max-height: 0px;
  height: auto;
  top: calc(100% + 1px);
  width: inherit;
  background: inherit;
  overflow: hidden;

  ${({ open }) =>
    open && {
      padding: '12px 0 12px 24px',
      'max-height': '300px'
    }}
  transition: max-height 0.1s linear;
`

const Option = styled.option`
  cursor: pointer;
  z-index: 1000;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;

  &:hover {
    opacity: 0.5;
  }

  &:not(:last-child) {
    padding-bottom: 20px;
  }
`

const Chevron = styled(FaChevronDown)`
  ${({ up }) =>
    up === 1 && {
      transform: 'rotate(180deg)'
    }}

  transition: transform 0.1s linear;
`
