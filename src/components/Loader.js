import { Fragment } from 'react'
import styled from 'styled-components'

const Loader = () => {
  return (
    <Fragment>
      <Overlay />
      <Spinner />
    </Fragment>
  )
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.primaryBackground};
`
const Spinner = styled.div`
  border-radius: 50%;
  animation: rotate 1s infinite linear;
  border: 10px solid ${({ theme }) => theme.primaryText};
  height: 100px;
  width: 100px;
  z-index: 10;
  position: absolute;
  border-top-color: ${({ theme }) => theme.border};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export default Loader
