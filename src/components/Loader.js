import { Fragment } from 'react'
import styled from 'styled-components'

const Loader = () => {
  return (
    <Fragment>
      <Overlay />
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
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
  z-index: 1000;
`

const SpinnerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Spinner = styled.div`
  border-radius: 50%;
  animation: rotate 1s infinite linear;
  border: 10px solid ${({ theme }) => theme.primaryText};
  height: 100px;
  width: 100px;
  border-top-color: ${({ theme }) => theme.border};

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
