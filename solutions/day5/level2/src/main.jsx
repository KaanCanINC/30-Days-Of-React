import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './Components/Main'
import html5Logo from "./images/html.png";
import cssLogo from "./images/css.png";
import jsLogo from "./images/javaScript.png";
import reactLogo from "./images/react.png";

const techs = [{
  'name': 'HTML',
  'src': html5Logo
},
{
  'name': 'CSS',
  'src': cssLogo
},
{
  'name': 'JavaScript',
  'src': jsLogo
},
{
  'name': 'React',
  'src': reactLogo
},]

const onClick = () => (
  alert('Login success')
)

const text = 'Subscribe'

const header = 'Front end Technologies'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='App'>
    <Main techs={techs} text={text} header={header} onClick={onClick}/>
  </div>
)
