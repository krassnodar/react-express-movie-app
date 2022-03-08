import {
  HeaderWrapper
} from './header.style';


const Header = () => {
  return (
    <HeaderWrapper onClick={() => window.scroll(0, 0)}>
        MOVIES CATALOG
    </HeaderWrapper>
  )
}

export default Header;