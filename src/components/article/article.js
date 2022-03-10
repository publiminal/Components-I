import './article.less'
// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
import articleData from '../../data/articleData'
// console.log("articleData", articleData);

/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton">+</span>
  </div>

  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.

  Step 3: Don't forget to return something from your function!

  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).

  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/

const articleMaker = function ({title, date, firstParagraph, secondParagraph, thirdParagraph}) {
 
/* init DOM */
const d = document;

const compArticle = d.createElement("div")
compArticle.classList.add("article")

const h2 = d.createElement("h2")

const p  = d.createElement("p")
p.classList.add("date")

const p1 = d.createElement("p")
const p2 = d.createElement("p")
const p3 = d.createElement("p")

const span = d.createElement("span") // .classList.add("expandButton")
span.classList.add("expandButton")
span.textContent = "+"


/* nesting dom */
compArticle.appendChild(h2)
compArticle.appendChild(p)
compArticle.appendChild(p1)
compArticle.appendChild(p2)
compArticle.appendChild(p3)
compArticle.appendChild(span)

/* add content  */
h2.textContent = title
p.textContent  = date
p1.textContent = firstParagraph
p2.textContent = secondParagraph
p3.textContent = thirdParagraph


/* adding listeners */
function doExpandButton() {
  compArticle.classList.toggle('article-open')
}

span.addEventListener('click',doExpandButton)
  return compArticle
}

// const fData ={title:'myTitle', date:'Feb 20', firstParagraph:'text fist p', secondParagraph:'text snd p', thirdParagraph:'text third p'}
const articles = document.querySelector('div.articles')
// const article = articleMaker(fData)
// articles.appendChild(article)


/* render */
articleData.forEach( dataArticle => {
  const article = articleMaker(dataArticle)
    articles.appendChild(article)
})
