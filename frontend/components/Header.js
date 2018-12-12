import Router from 'next/router'
import styled from 'styled-components'
import NProgress from 'nprogress'


Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()


// CSS
const StyledHeader = styled.header`
  width: 100px;
  background: #EAEAEA;
`

// Component
const Header = () => (
    <StyledHeader>
        This is the HEADER!
    </StyledHeader>
)


export { Header }