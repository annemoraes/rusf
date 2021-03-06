import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn/index';
import SignUp from './pages/SignUp/index';

import AuthContext from './context/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthContext.Provider value={{ name: 'Anne' }}>
        <SignIn />
      </AuthContext.Provider>
      <GlobalStyle />
    </>
  );
};

export default App;
