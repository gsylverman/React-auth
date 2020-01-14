import React from 'react';
import Header from '../Header/Header';

const App = ({ children }) => {
    return (
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
            <Header />
            {children}
        </div>
    );
};

export default App;