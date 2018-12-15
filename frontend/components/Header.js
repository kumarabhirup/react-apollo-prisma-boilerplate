import Router from 'next/router'
import styled from 'styled-components'
import NProgress from 'nprogress'


Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()


// CSS
const StyledHeader = styled.header`
  padding: 20px;
  background: #368EBB;
  color: #FFFFFF;
  text-align: center;
  font-weight: normal;
`
const BigText = styled.div`
    font-size: 100px;
`

// Component
const Header = () => (
    <StyledHeader>
        <h1>⚛️ <u>React.js</u> + <u>Next.js</u> + <u>Apollo Client</u> + <u>GraphQL Yoga</u> 🧘🏻‍♂️</h1>
        <BigText>
            🎉
        </BigText>
    </StyledHeader>
)


export { Header }