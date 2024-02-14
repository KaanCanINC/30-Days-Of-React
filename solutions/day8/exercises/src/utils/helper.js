import showDate from "./showDate";

export function addOne() {
  this.setState({ count: this.state.count + 1 });
}

export function minusOne() {
  this.setState({ count: this.state.count - 1 });
}

export function handleTime() {
  alert(showDate(new Date()));
  console.log("https://restcountries.com/v3.1/all");
}

export function greetPeople() {
  alert(`Merhaba 30 Günde react kursuna hosgeldin`);
}

export function changeBackground() {
  const newStyle = {
    backgroundColor: "#31393C",
    color: "#fff",
  };
  const defaultStyle = {
    backgroundColor: "",
    color: "",
  };

  this.setState((prevState) => ({
    styles: prevState.styles.backgroundColor === "" ? newStyle : defaultStyle,
  }));
}


