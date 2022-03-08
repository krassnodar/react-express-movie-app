import { Route, Routes } from 'react-router-dom';
import { GlobalStyle, Container, AppWrapper } from './globalStyle';
import Home from './pages/home/Home';
import Header from './components/header/Header';

function App() {
  return (
    <>  
      <GlobalStyle />
      <Header />
      <AppWrapper>
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Container>
      </AppWrapper>
    </>
  );
}

export default App;
