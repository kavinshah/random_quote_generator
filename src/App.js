import React from 'react';
import './App.css';

const quotes = [{quote:'Wisdom, when spoken aloud, always sounds a little foolish. Perhaps that\'s because when we hear something that makes sense to us, we think we already know it. But often we don\'t.',
author: 'Herman Hesse'},
{quote:'America owes most of its social prejudices to the exaggerated religious opinions of the different sects which were so instrumental in establishing the colonies.',
author: 'James Fenimore Cooper'},
{quote:'We are here and it is now: further than that all human knowledge is moonshine.',
author: 'H. L. Mencken, 1880 - 1956'},
{quote:'Every right implies a responsibility; Every opportunity, an obligation, Every possession, a duty.',
author: 'John D. Rockafeller'},
{quote:'Success comes from keeping the ears open and the mouth closed.',
author: 'John D. Rockafeller'}]

class NewQuote extends React.Component{
  constructor(props){
    super(props);
    this.state={
      counter:0,
    }
    this.handleCounter=this.handleCounter.bind(this);
  }
  
  handleCounter(event){
    this.setState((state)=>({
      counter:Math.floor(Math.random()*5)
    }));
  }
  
  render(){
	let quote = quotes[this.state.counter].quote;
	let author = quotes[this.state.counter].author;
    return (
      <div id='quote-box' className='quoteCard'>
        <QuoteCard quote={quote} author={author} />
        <NewQuoteButton id='new-quote' handleCounter={this.handleCounter} />
		<Tweet quote={quote} author={author} />
      </div>
    );
  }
}

class NewQuoteButton extends React.Component{
  render(){
    return (
      <div>
        <button className='button' id={this.props.id} onClick={this.props.handleCounter}>New Quote</button>
      </div>
    );
  }
}

class QuoteCard extends React.Component{
	render(){
		return <>
			<p id='text'><i>{this.props.quote}</i></p>
			<p id='author'>{'-' + this.props.author}</p>		
		</>
	}
}

class Tweet extends React.Component{
	render(){
		return <div className='tweet'>
			<a id='tweet-quote' href={'https://twitter.com/intent/tweet?text='+ this.props.quote+'%0A -'+this.props.author}><i>Tweet</i></a>
		</div>
	}
}

export default NewQuote;
