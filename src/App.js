import GlobalStyle from "./styles/global";

import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      {/* <Footer /> */}
    </>
  );
}

export default App;
