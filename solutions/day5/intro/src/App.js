import "./App.css";
import Header from "./components/Header/Header";
import ShowDate from "./components/Header/ShowDate/ShowDate";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
const imageLink = "https://i.hizliresim.com/4g752eo.jpg"
const App = () => {
  const data = {
    welcome: "30 Günde React kursuna hoşgeldiniz",
    title: "Reacta başlarken",
    subtitle: "javaScript kütüphanesi",
    author: {
      firstName: "KaanCan",
      lastName: "Incirkus",
    },
    date: new Date(),
  };
  const date = new Date()
  const techs = ["HTML", "CSS", "JS", "React", "Angular"];
  const user = {...data.author, image:imageLink}

  const handleTime = () => {
    alert(ShowDate(date(new Date())))
  }

  const greetPeople = () => {
    alert(`Merhaba ${user.firstName} ${user.lastName} 30 Gunde react kursuna hosgeldin`)
  }

  return (
    <div className="App">
      <Header data={data}  />
      <Main user={user} techs={techs} handleTime={handleTime} greetPeople={greetPeople} />
      <Footer copyRight={date}/>
    </div>
  );
};

export default App;
