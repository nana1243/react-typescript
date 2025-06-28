import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import {useState} from "react";
import LoginStatus from "./components/LoginV2/LoginStatus";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      {/*<Header/>*/}
      {/*  <Main/>*/}
      {/*<Footer/>*/}
        <LoginStatus
            isLoggedIn={isLoggedIn}
            handleLogin={handleLogin}
            handleLogout={handleLogout}
        />
    </>
  )
}

export default App
