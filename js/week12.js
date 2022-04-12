const quoteButton = document.querySelector('#js-new-quote');

quoteButton.addEventListener('click', getQuote);

const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random'

async function getQuote()
{
  console.log("quote button was clicked")
  const progressBar = document.querySelector('.progress-bar');
  progressBar.setAttribute('id','play-animation');
  try
  {
    const response = await fetch(endpoint);
    if(!response.ok)
    {
      throw Error(response.statusText)
    }
    const json = await response.json();
    console.log(json);
    function deleteBar()
    {
      progressBar.removeAttribute('id');
    }
    setTimeout(deleteBar, 6000);
    displayQuote(json.message)
  }
  catch(err)
  {
    console.log(err)
    alert('Failed');
  }
  function displayQuote(quote)
  {
    const quoteText = document.querySelector('#js-quote-text')
    quoteText.textContent = quote;
  }
  setTimeout(displayQuote, 6000);
}
