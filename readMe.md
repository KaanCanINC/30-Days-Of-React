<div>
<img align="right" width="100%"  src="./images/30_days_of_react.jpg" />
</div>

<div align="center">

  <h1> 30 Günde React</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>

  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

<sub>Author: <a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
<small> October, 2020</small></sub>

</div>

[1.Gün >>](./01_Day_JavaScript_Refresher/01_javascript_refresher.md)

| # Day |                                                           Topics                                                            |
| ----- | :-------------------------------------------------------------------------------------------------------------------------: |
| 00    | [Introduction](#introduction)<br> [How to Use Repo](#how-to-use-repo)<br> [Requirements](#requirements)<br> [Setup](#setup) |
| 01    |                      [JavaScript Refresher](./01_Day_JavaScript_Refresher/01_javascript_refresher.md)                       |
| 02    |                     [Getting Started React](./02_Day_Introduction_to_React/02_introduction_to_react.md)                     |
| 03    |                                     [Setting Up](./03_Day_Setting_Up/03_setting_up.md)                                      |
| 04    |                                     [Components](./04_Day_Components/04_components.md)                                      |
| 05    |                                             [Props](./05_Day_Props/05_props.md)                                             |
| 06    |                              [List, Map and Keys](./06_Day_Map_List_Keys/06_map_list_keys.md)                               |
| 07    |                            [Class Components](./07_Day_Class_Components/07_class_components.md)                             |
| 08    |                                           [States](./08_Day_States/08_states.md)                                            |
| 09    |                     [Conditional Rendering](./09_Day_Conditional_Rendering/09_conditional_rendering.md)                     |
| 10    |         [React Project Folder Structure](./10_React_Project_Folder_Structure/10_react_project_folder_structure.md)          |
| 11    |                                           [Events](./11_Day_Events/11_events.md)                                            |
| 12    |                                             [Forms](./12_Day_Forms/12_forms.md)                                             |
| 13    |       [Controlled and Uncontrolled Component](./13_Day_Controlled_Versus_Uncontrolled_Input/13_uncontrolled_input.md)       |
| 14    |                     [Component Life Cycles](./14_Day_Component_Life_Cycles/14_component_life_cycles.md)                     |
| 15    |                        [Third Party Packages](./15_Third_Party_Packages/15_third_party_packages.md)                         |
| 16    |                     [Higher Order Components](./16_Higher_Order_Component/16_higher_order_component.md)                     |
| 17    |                                    [React Router](./17_React_Router/17_react_router.md)                                     |
| 18    |                                [Fetch versus Axios](./18_Fetch_And_Axios/18_fetch_axios.md)                                 |
| 19    |                                          [Projects](./19_projects/19_projects.md)                                           |
| 20    |                                          [Projects](./20_projects/20_projects.md)                                           |
| 21    |                                   [Hooks](./21_Introducing_Hooks/21_introducing_hooks.md)                                   |
| 22    |                              [Forms Using Hook](./22_Form_Using_Hooks/22_form_using_hooks.md)                               |
| 23    |                 [Fetching Data Using Hooks](./23_Fetching_Data_Using_Hooks/23_fetching_data_using_hooks.md)                 |
| 24    |                                     [Project using Hooks](./24_projects/24_projects.md)                                     |
| 25    |                                    [Custom Hooks](./25_Custom_Hooks/25_custom_hooks.md)                                     |
| 26    |                                            [Context](./26_Context/26_context.md)                                            |
| 27    |                                                  [Ref](./27_Ref/27_ref.md)                                                  |
| 28    |                                            [project](./28_project/28_project.md)                                            |
| 29    |                                            [Explore](./29_explore/29_explore.md)                                            |
| 30    |                                      [Conclusions](./30_conclusions/30_conclusions.md)                                      |

🧡🧡🧡 İYİ KODLAMALAR 🧡🧡🧡

<div>
<small>Daha fazla eğitici içerik üretebilmesi için <strong>içerik sahibini destekleyin</strong></small> <br />  
<a href = "https://www.paypal.me/asabeneh"><img src='./images/paypal_lg.png' alt='Paypal Logo' style="width:10%"/></a>
</div>

---

- [Giriş](#introduction)
- [Gereksinimler](#requirements)
- [Repo nasıl kullanılır](#how-to-use-repo)
  - [Bu Repo'yu Yıldızlayın ve Forklayın](#star-and-fork-this-repo)
  - [Fork'unuzu klonlayın](#clone-your-fork)
  - [Yeni Branch oluşturun](#create-a-new-branch)
  - [Structure egzersiz çözümleri](#structure-exercise-solutions)
  - [Egzersiz çözümlerinizi Commitleyin](#commit-exercise-solutions)
  - [Fork'unuzu günlük olarak güncelleyin](#update-your-fork-daily)
- [Kurulum](#setup)
  - [Node.js yükleyin](#install-nodejs)
  - [Tarayıcı](#browser)
    - [Google Chrome yükleme](#installing-google-chrome)
    - [Google Chrome geliştirici konsolu açma](#opening-google-chrome-console)
    - [Geliştirici konsolunda kod yazma](#writing-code-on-browser-console)
      - [Console.log](#consolelog)
      - [Çoklu argüman ile Console.log](#consolelog-with-multiple-arguments)
      - [Yorum satırları](#comments)
      - [Sözdizimi](#syntax)
    - [Aritmetik işlemler](#arithmetics)
  - [Kod editör](#code-editor)
    - [Visual Studio Code kurulumu](#installing-visual-studio-code)
    - [Visual Studio Code nasıl kullanılır](#how-to-use-visual-studio-code)

---

## Giriş

30 Günde React rehberimize katılmaya karar verdiğiniz için **Tebrikler**. Bu rehberimizde React uygulaması geliştirirken ihtiyacınız olacak her şeyi öğreneceksiniz. 30 Günlük programımızın sonunda "30DaysOfReact programming challenge completion" sertifikası alacaksınız. Yardıma ihtiyacınız olduğunda veya başkalarına yardım etmek isterseniz [telegram grubumuza](https://t.me/thirtydaysofreact) katılabilirsiniz.

**30GündeReact** hem yeni başlayan hemde ileri seviye JavaScript ve React geliştiricileri için bir rehberdir. 30 Günde React'a hoş geldiniz. React bir JavaScript kütüphanesidir. React'ı kullanmaktan ve öğretmekten keyif alıyorum umarım siz de keyif alırsınız. Adım adım 30 Günde React rehberimizde, en popüler kullanıcı arayüzü JavaScript kütüphanelerinden biri olan React'ı öğreneceksiniz. React, JavaScript'in yapabildiği her şeyi yapabilir. React **_etkileşimli internet siteleri, mobil uygulamalar, masaüstü uygulamalar, oyunlar_** geliştirmek için kullanılabilir. Önümüzdeki 30 günde bir çok şey öğrenceğinize, programlama ve problem çözme becerilerinizi oldukça geliştirebileceğinize inanıyorum.

Bu rehberi yazarken konuşma dili kullancağım ve jargonları elimden geldiğince az kullanacağım. İçerik sürekli olarak güncellenecektir. Herhangi bir yazım hatası veya gramer hatası bulduysanız şaşırmayın çünkü yayınlamadan önce herhangi bir düzeltme okuması yapmıyorum. Yazım ve bazı küçük hatalar yerine rehberin ana konusuna odaklanmazını tavsiye ederim. Rehberi iyileştirmem için pull request gönderirseniz gerçekten minettar olurum. Lütfen Pull request'i master'dan almayı unutmayın. Bu rehberde kullandığım görsellerin çoğu 30GündeJavaScript rehberinde kullandığım görseller, bu nedenle dosya ve klasör isimlerini 30GündeReact olarak değiştirmeniz gerekebilir. Diziler, döngüler, fonksiyonlar, nesneler, işlevsel programlama, destructuring(parçalama), spreading(yayma) ve sınıflar konusunda iyiseniz bu rehberi iyi bir şekilde takip edebilirsiniz. Aksi taktirde, [30GündeJavaScript](https://github.com/Asabeneh/30-Days-Of-JavaScript) rehberimize göz atmanızı şiddetle tavsiye ederim.

Kursa derinlemesine girmeden önce [30 Günde React incelemesine](https://t.me/thirtydaysofreact) göz atabilirsiniz.

Bu rehber,okuması kolay, konuşma diliyle yazılmış, ilgi çekici, motive edici ve aynı zamanda oldukça zorlayıcıdır. Bu rehberi tamamlayabilmeniz için büyük bir zaman ayırmanız gerekecek. Eğer görsel öğrenmeye yatkınsanız, video dersi <a href="https://www.youtube.com/channel/UC7PNRuno1rzYPb1xLa4yktw"> Washera</a> Youtube kanalında bulabilirsiniz. Kanala abone olun, videolara yorum yapın ve sorular sorun; proaktif olun, İçerik sahibi size cevap verecektir.

İçerik sahibi rehber hakkındaki fikirlerinizi duymaktan mutluluk duyar, 30GündeJavaScript rehberi hakkındaki düşüncelerinizi paylaşın. Referansınızı bu bağlantıya bırakabilirsiniz [link](https://testimonial-vdzd.onrender.com/)

## Gereksinimler

Bu rehberi takip edebilmeniz için sahip olmanız gereken bazı şeyler:

1. Motivasyon
2. Bilgisayar
3. İnterner
4. Tarayıcı
5. Kod editörü
6. Orta seviye HTML, CSS ve JavaScript bilgisi

## Repo nasıl kullanılır

Yeni Branch oluşturun
Structure egzersiz çözümleri
Egzersiz çözümlerinizi Commitleyin
Fork'unuzu günlük olarak güncelleyin

### Bu Repo'yu Yıldızlayın ve Forklayın

Çalışmayı desteklemek için bu repoyu yıldızlayın. Üzerinde çalışabileceğiniz bir kopyasını oluşturmak için bu repoyu forklayın.

### Fork'unuzu klonlayın

Her zaman forkladığınız kopyanızdan çalışın.

```bash
# Not: Burada `ssh` bağlantısı kullanılmıştır, fakat `https` bağlantısı'da aynı işlevi görecektir
git clone git@github.com:username/30-Days-Of-React.git
cd 30-Days-Of-React
```

### Yeni bir Branch oluşturun

Günlük egzersizleri tamamlamak için, my suggestion is to create a separate branch to house your exercise folder or any other changes you make. This will keep your master branch clean at all times, which means your master will always be similar to the original master.

```bash
git checkout -b exercise-solutions # `-b` creates the branch if it does not exist
```

### Structure Exercise Solutions

In your new branch, you can use files/folders to structure your solutions to daily exercises

```bash
mkdir -p solutions/day-01 # `-p` helps create nested directories
touch solutions/day-01/level1.js # touch creates a file
```

### Commit Exercise Solutions

Commit your solutions to your Fork

```bash
git add solutions/day-01/level1.js
git commit -m "chore: exercise level1 complete"
git push origin exercise-solutions # branch `exercise-solutions` was created earlier
```

### Update your Fork Daily

This repo will be updated daily throughout the month. When a new day's content becomes available, you can update your forked copy with the steps below.

```bash
# 1. switch to master branch
git checkout master
# 2. check if your local copy has a link to original `...Asabeneh/30-Days-Of-React.git`
git remote -v
# 3. if not, add a link to original, you can choose any name for the link or use `upstream`
git remote add upstream git@github.com:Asabeneh/30-Days-Of-React.git
# 4. check again to confirm link added
git remote -v
# 5. now you can fetch updates from original repo, assuming you named this `upstream`
git fetch upstream
# 6. merge the updates to your local master branch
git merge upstream/master master
# 7. push the merged updates to your Forked copy on GitHub
git push origin master
```

> Note that the updates are only applied to the master branch. If you wish to update any other branch, repeat steps 6-7 with the branch name. See snippet below for `exercise-solutions` branch

```bash
git merge upstream/master exercise-solutions
git push origin exercise-solutions
```

## Setup

I believe you have the motivation and a strong desire to be a developer, a computer and Internet. In addition to that basic to intermediate level HTML, CSS and JS. If you have those, then you have everything to get started.

### Install Node.js

You may not need node.js right now but you may need it for later. Install [node.js](https://nodejs.org/en/).

![Node download](images/download_node.png)

After downloading double click and install

![Install node](images/install_node.png)

We can check if node is installed on our local machine by opening our device terminal or command prompt.

```sh
asabeneh $ node -v
v12.14.0
```

When making this tutorial I was using node version 12.14.0, but now the recommended version of node.js for download is 12.17.0.

### Browser

There are many browsers out there. However, I strongly recommend Google Chrome.

#### Installing Google Chrome

Install [google chrome](https://www.google.com/chrome/) if you do not have one yet. We can write small JavaScript code on the browser console, but we do not use the browser console to develop applications.

![Google Chrome](images/google_chrome.png)

#### Opening Google Chrome Console

You can open Google Chrome console either by clicking three dots at the top right corner of the browser, selecting _More tools -> Developer tools_ or using a keyboard shortcut. I prefer using shortcuts.

![Opening chrome](images/opening_developer_tool.png)

To open the Chrome console using a keyboard shortcut. It is good to know the shortcut too as a JavaScript and React developer you will spend much time on a browser console and don't be lazy to open it during development.

```sh
Mac
Command+Option+J

Windows/Linux:
Ctl+Shift+J
```

![Opening console](images/opening_chrome_console_shortcut.png)

After you open the Google Chrome console, try to explore the marked buttons. We will spend most of the time on the Console. The Console is the place where your JavaScript code goes. The Google Console V8 engine changes your JavaScript code to machine code.
Let us write a JavaScript code on the Google Chrome console:

![write code on console](./images/js_code_on_chrome_console.png)

#### Writing Code on Browser Console

We can write any JavaScript code on the Google console or any browser console. However, for this challenge, we only focus on Google Chrome console. Open the console using:

```sh
Mac
Command+Option+I

Windows:
Ctl+Shift+I
```

##### Console.log

To write our first JavaScript code, we used a built-in function **console.log()**. We passed an argument as input data, and the function displays the output. We passed 'Hello, World' as input data or argument in the console.log() function.

```js
console.log("Hello, World!");
```

##### Console.log with Multiple Arguments

The **console.log()** function can take multiple parameters separated by comma. The syntax looks like as follows:**console.log(param1, param2, param3)**

![console log multiple arguments](./images/console_log_multipl_arguments.png)

```js
console.log("Hello", "World", "!");
console.log("HAPPY", "NEW", "YEAR", 2020);
console.log("Welcome", "to", 30, "Days", "Of", "JavaScript");
```

As you can see from the snippet code above, _console.log()_ can take multiple arguments. It is recommended to use as many console.log() prints to check what is happening in your code but don't keep all console.log() tests on your code forever. Make your life easy by keeping the browser console open.

##### Comments

We add comments to our code. Comments are very important to make code more readable and to leave remarks in our code. JavaScript does not execute the comment part of our code.In JavaScript, any text line starting with // in JavaScript is a comment, and anything enclosed like this /\* \*/ is also a comment.

**Example: Single Line Comment**

// This is the first comment  
 // This is the second comment  
 // I am a single line comment

**Example: Multiline Comment**

/\*
This is a multiline comment  
 Multiline comments can take multiple lines  
 JavaScript is the language of the web  
 \*/

##### Syntax

Programming languages are similar to human languages. English or many other language uses words, phrases, sentences, compound sentences and other more to convey a meaningful message. The English meaning of syntax is _the arrangement of words and phrases to create well-formed sentences in a language_. The technical definition of syntax is _the structure of statements in a computer language._ Programing languages have syntax. JavaScript is a programming language and like other programming languages it has its own syntax. If we do not write a syntax that JavaScript understands, it will raise different types of errors. We will explore different kinds of JavaScript errors later. For now, let us see syntax errors.

![Error](images/raising_syntax_error.png)

I made a deliberate mistake. As a result, the console raises syntax errors. Actually, the syntax is very informative. It informs what type of mistake was made. By reading the error feedback guideline, we can correct the syntax and fix the problem. The process of identifying and removing errors from a program is called debugging. Let us fix the errors:

```js
console.log("Hello, World!");
console.log("Hello, World!");
```

So far, we saw how to display text using the _console.log()_. If we are printing text or string using _console.log()_, the text has to be inside the single quotes, double quotes, or a backtick quotes.
**Example:**

```js
console.log("Hello, World!");
console.log("Hello, World!");
console.log(`Hello, World!`);
```

#### Arithmetics

Now, let us practice more writing JavaScript codes using _console.log()_ on google chrome console for number data types.
In addition to the text, we can also do mathematical calculations using JavaScript. Let us do the following simple calculations.
The console can directly take arguments without the **_console.log()_** function. However, it is included in this introduction because most of this challenge would be taking place in a text editor where the usage of the function would be mandatory. You can play around directly with instructions on the console.

![Arithmetic](images/arithmetic.png)

```js
console.log(2 + 3); // Addition
console.log(3 - 2); // Subtraction
console.log(2 * 3); // Multiplication
console.log(3 / 2); // Division
console.log(3 % 2); // Modulus - finding remainder
console.log(3 ** 2); // Exponentiation 3 ** 2 == 3 * 3
```

### Code Editor

We can write our codes on the browser console, but it won't do for bigger projects. In a real working environment, developers use different code editors to write their codes. In this 30 days JavaScript challenge, we will be using Visual Studio Code.

#### Installing Visual Studio Code

Visual studio code is a very popular open-source text editor. I would recommend to [download Visual Studio Code](https://code.visualstudio.com/), but if you are in favor of other editors, feel free to follow with what you have.

![Vscode](images/vscode.png)

If you installed Visual Studio Code, let us start using it.

#### How to Use Visual Studio Code

Open the Visual Studio Code by double-clicking its icon. When you open it, you will get this kind of interface. Try to interact with the labeled icons.

![Vscode ui](./images/vscode_ui.png)

![Vscode add project](./images/adding_project_to_vscode.png)

![Vscode open project](./images/opening_project_on_vscode.png)

![script file](images/scripts_on_vscode.png)

![Installing Live Server](images/vsc_live_server.png)

![running script](./images/running_script.png)

![coding running](./images/launched_on_new_tab.png)

Congratulations! You have completed the setup you need to get started with React, but before we dive into React let's do a JavaScript refresher. If you are very comfortable with JavaScript you may skip day 1 JavaScript refresher. The JavaScript refresher section is vast and it may take more than one day. From my experience people usually get stuck in React because their JavaScript knowledge is very shallow therefore to fill that gap all the necessary JavaScript features which can be used in React are covered in the JavaScript refresher section. There are many exercises but you are not required to solve them. Click [here](../30-Days-Of-React/02_Day_Introduction_to_React/02_introduction_to_react.md) if you want skip JavaScript and jump directly into React.

🎉 CONGRATULATIONS ! 🎉

[Day 1 >>](./01_Day_JavaScript_Refresher/01_javascript_refresher.md)
