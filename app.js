

setInterval(colorBody, 5000)
setInterval(doIt, 5000)


// Make function to change body background color
function colorBody() {
  const body = document.querySelector('body');
  body.style.backgroundImage = `
                                linear-gradient(
                                  to right, 
                                  rgb(${randColor()}, ${randColor()}, ${randColor()}), 
                                  rgb(${randColor()}, ${randColor()}, ${randColor()})
                                )
                                `
}

// Make function for random color number
function randColor() {
  let randomNumberColor = Math.floor(Math.random() * 255) + 1;
  return randomNumberColor;
}

// Make a function that takes array picks a quote and returns it
function pickQuote(arr) {
  let randomNumber = Math.floor(Math.random() * 50) + 1;
  let randomQuote = `
                        <figure>
                        <blockquote >
                        <p>" ${arr[randomNumber].quote} "</p>
                        </blockquote>
                        <figcaption><strong>—${arr[randomNumber].source}</strong></figcaption>
                      </figure>
                    `
  return randomQuote
}


// Make function that prints quote to screen
function printQuote(quote) {
  const body = document.querySelector('body');
  body.innerHTML = quote;
  
}


function doIt() {
  printQuote(pickQuote(allQuotes))
}

