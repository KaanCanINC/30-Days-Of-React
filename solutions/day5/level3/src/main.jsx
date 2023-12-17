import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './Components/Main'
import Footer from './Components/Footer'


const App = () => {

    return (
        <div className='app'>
            <Main />
            
        </div>
    )

}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
