import './App.css';
import Header from './components/Header/Header';

function App() {
  const data = {
    "welcome":"30 Günde React kursuna hoşgeldiniz",
    "title":"Reacta başlarken",
    "subtitle":"javaScript kütüphanesi",
    "author":{
        "firstName":"KaanCan",
        "lastName":"Incirkus"
    },
    "date": new Date()
  }
  return (
    <div className="App">
      <Header data={data} />
    </div>
  );
}

export default App;
