import showDate from "./showDate";

export function addOne() {
  this.setState({ count: this.state.count + 1 });
}

export function minusOne() {
  this.setState({ count: this.state.count - 1 });
}

export function handleTime() {
  alert(showDate(new Date()));
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


export function randomFlag() {
  const randomFlagIndex = Math.floor(Math.random() * 251); // Rastgele bir ülke indisini al
  this.setState({ randomNumber: randomFlagIndex }, () => {
    this.fetchData(); // Veriyi güncellemek için fetchData fonksiyonunu çağır
  });
}
