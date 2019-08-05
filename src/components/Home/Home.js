import React from 'react';
import {Container} from 'reactstrap';
import './Home.scss';

class Home extends React.Component {
  render() {
    return <Container>
      <h2 className='sectionHeading projects__heading'>Welcome!</h2>
      <br></br>
      Hi. I'm Justin. 
      <br></br>
      <br></br>
&ensp;&ensp;This is my github hosted page. I've recently learned I learn things a lot better just by diving in, so I'm attempting to start some open source projects or contribute to already existing ones that match my interests / abilities. 
<br></br>
<br></br>
&ensp;&ensp;I'm currently a data scientist at Archer Daniel Midlands company, one of the largest processors of oilseeds and corn products in the world. I help with economic forecasting and generally anything that can help improve profitability. I think agriculture and botany is pretty neat. Specifically, my interests tend to center around commodity trading and weather forecasting.
<br></br>
<br></br>
&ensp;&ensp;I like mathematical optimization, stacked ensemble models, and probabilistic programming. I haven't had much exposure with deep learning yet, but I'm trying to learn outside of work. My weapons of choice are Python, Scala, and Apache Spark. I like Haskell as a tool to learn functional programming, but I've never gotten to use it in production before. Also Julia is pretty neat. I've been spending more time learning software engineering principles lately, CI/CD, and things of that nature. Ideally in the future, I'd like to consider myself a "full stack" data scientist.

	</Container>
	}
}



export default Home;
