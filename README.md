<h1 align="center"> numGenerator by Nick Wilder</h1>

## Table of Contents  
[Question & Answer](#code)   
[Broken Apart](#broken)   
[Efficiency & Performance](#analysis)   
[More About Me](#self-plug)   

<p> Hi, my name is Nick. I'm a recent graduate from TAMUCC with a Bachelors in Computer Science, currently working as a Full Stack Developer. I created a small Node.JS app with my answer and a simple HTML file for testing solve this question. Let's jump into the question. <p>

<a name="code"/>
<h2>Question & Answer</h2>
Question:   
Please write a program that generates a list of 10,000 numbers in random order each time it is run. Each number in the list must be unique and be between 1 and 10,000 (inclusive).
<br> <br>
Simply put it, here is the answer: 

```javascript
1   const array = [];
2
3   for(let i = 1; i <= 10000; i++){
4	    array.splice(Math.floor(Math.random() * array.length), 0, i);
5   }
6
7   console.log(array);
```
<br>
<a name="broken"/>
<h2>Broken Apart</h2>
<p> The main crux of this problem is the for loop, we can exclude lines 1 and 7 because those are just simply declaring the array and outputting the new, unique, created array. </p>
<p> Below I've created a more drawn out version of the loop for readability. </p>
  
```javascript
1   for(let i = 1; i <= 10000; i++){
2
3     var randomIndex = Math.random() * array.length;
4     var noDecimals = Math.floor(randomIndex);
5     var numOfItemsRemoved = 0;
6
7     array.splice(noDecimals), numOfItemsRemoved, i);
8   }
```
Let us break this apart even further. <br>

<p> We can start with the for loop, it is counting up all the way to 10000. This insures that we can only have 1 of each integer, [1...10000], inside of the array, no duplicates.</p>

```javascript
1    for(let i = 1; i <= 10000; i++) 
```
                              
<p> In order to make sure that we don't have any duplicate arrays we have to randomly choose an index. For this I used Math.random() * the array's length. However, this gives me a floating point number, which leads to the line 4. <p>

```javascript
3   var randomIndex
```

<p> To take off the decimals we can use Math.floor(), this chops off the trailing decimals after each iteration. </p>
  
```javascript
4    var noDecimals
```

<p> This next line is where the array is created. Utilizing splice() we are able to add and/or remove any array elements. I used noDecimals to establish a random index. In our case we only want to add, this is why I created the variable numOfItemsRemoved to further illustrate. The index, or i, will be the unique number that we are adding into this array.<p>
  
```javascript
7   array.splice(noDecimals), numOfItemsRemoved, i);
```
<br>
<a name="analysis"/>
<h2> Efficiency and Performance </h2>
<p> I created a few tests in the html file in this repo, no styling necessary. The first one is to check for any repeats in the array. Code below.
  
 ```javascript
  function checkForRepeats(array) {
      for (let i = 0; i < array.length; i++) {
          for (let j = i + 1; j < array.length; j++) {
              if (array[i] === array[j]) {
                  return true;
              }
          }
      }
      return false;
    }
 ```
  
<p> The second test is to do a time test for each run of the function, calculating how long it takes to generate a unique array that solves the aformentioned question. From my own local testing, I usually get around 5-6ms per run.</p> 
 
 ```javascript
  for (let i = 0; i < num; i++) {
      array = [];
      var start = new Date().getTime();

      for (let i = 1; i <= 10000; i++) {
          array.splice(Math.floor(Math.random() * array.length), 0, i);
      }

      console.log(array);

      var end = new Date().getTime();
      var time = end - start;

      tempTimeArr.push(time);
  }

  var sum = 0;
  for (let i = 0; i < tempTimeArr.length; i++) {
      sum += tempTimeArr[i];
  }

  var avg = sum / tempTimeArr.length;
 ```
 
<p>Also, just for fun, I made it possible to calculate these tests for 1000, or even 10000 arrays, not for the faint of heart, or CPU cores.</p>

<br>
<a name="self-plug"/>
<h2>More About Me</h2>
<p>Since you've made it this far down, I thought this would be a good opportunity to show some of my other work that isn't necessarily on my resume. I've compiled short preview of project that I've worked on recently. I'd love for you to check them out. </p>

1.  https://churchunlimited.com/studentcamp
2.  https://churchunlimited.com/messagecatalog/
3.  https://churchunlimited.online/nextsteps (Currently in testing phase as of 3/7)

<p>These are just the front facing products that I've created. Mainly, I've been redesigning and creating a lot of employee related products to maximize efficiency of our staff, but unforunately these require some sort of login. Some of the larger "behind-the-scenes projects" are a sub-domain for the production department, a staff website, a ton of work to better assist our volunteers on https://churchunlimited.online, and many many more. I'd love to show you what is all apart of those sites if given the opportunity. </p>

<p> I hope that this project gave a better understanding for my programming abilities. I'd love to show off more over call/zoom/teams. You can contact me via email at 
nickwilder208@gmail.com or by phone at (281) 714-9105. 
<br><br>Thank you!
<br> - Nick</p>
