
Exercises: What is React?

What is React?
React is a Uİ JS library

What is a library?
pass

What is a single page application?
creating whole web site for using one html document 

What is a component ?
pass

What is the latest version of React?
16.13.1

What is DOM?
for using access and manipulate HTML elements

What is React Virtual DOM?
quot to react web site: a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM.

What does a web application or a website(composed of) have?
main content page(like index.html), concept or concet, styling, maybe other pages or using SPA

Exercises: Why React?
Why did you chose to use react?
job opportunity, popularity, community and resources, fast, flexible, responsive, 

What measures do you use to know popularity ?
companies that use it, websites that use it, people who recommend it and use it. 

What is more popular, React or Vue ?
React

Exercises: JSX
What is an HTML element?
used to style the website and add content

How to write a self closing HTML element?
tag(<)tagname(h1)close tag(>)  

What is an HTML attribute? Write some of them
used to adjust the behavior or display of an HTML element.

What is JSX?
allows use to write HTML elements with JS code

What is babel?
JSX to pure JS converter

What is a transpiler?
source-to-source translator or compiler

Exercises: JSX Elements
What is a JSX element?
allows use to write HTML elements in JS code and place then in to DOM

Write your name in a JSX element and store it in a name variable
const name = <h1>KaanCan</h1>;

Write a JSX element which displays your full name, country, title, gender, email, phone number. Use h1 for the name and p for the rest of the information and store it in a user variable
const user  = (
    <h1>KaanCan</h1>
    <p>Türkiye</p>
    <p>male</p>
)

Write a footer JSX element
const footer = (
    <footer>Copyright 2020</footer>
    <p>Author:KaanCan</p>
)

Exercises: Inline Style
Create a style object for the main JSX
const mainStyles = {
    backgroundColor: '#f0f0f0',
    padding: '20px',
}

Create a style object for the footer and app JSX
const footerStyles = {
    backgroundColor: '#f0f0f0',
    padding: '20px',
}

const appStyles = {
    fontFamily: 'Arial, sans-serif'
} 

Add more styles to the JSX elements
const style = { border: '2px solid orange', color: 'black', fontSize: '18px' }

Exercises: Internal Styles
Apply different styles to your JSX elements
const main = (
    <main style={style},{mainStyles}>
        <h1>Başlık</h1>
    </main>
)

Exercise: Inject data to JSX

const inject = (
    <div className="name">{name}</div>
)

Practice how to make JSX element and injecting dynamic data(string, number, boolean, array, object)
```js
{
const name = "Kaan";
const element = <h1>Merhaba, {name}!</h1>;

const age = 45;
const element = <p>{age} Yaşındayım</p>;

const isLoggedIn = true;
const element = <p>Kullanıcı giriş durumu: {isLoggedIn.toString()}</p>;

const fruits = ["Apple", "Banana", "Orange"].map(element => <li key={element}>{element}</li>);
const element = (
  <ul>{fruits}</ul>
);

const person = { name: "Kaan", age: 31 };
const element = (
  <div>
    <p>Name: {person.name}</p>
    <p>Age: {person.age}</p>
  </div>
);

}