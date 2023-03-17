import React from 'react'
import { Button, Card } from 'react-bootstrap'

const About = () => {
  return (
    <div>
           <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/236x/6d/df/6f/6ddf6f07f19b6ca00dfe6fa5dff69c10.jpg" />
      <Card.Body>
        <Card.Title>Nuray</Card.Title>
        <Card.Text>
          age: 18
          <br/>
          from: Kyrgyzstan
          <br/>

          Web Developer
        </Card.Text>
      </Card.Body>
    </Card>
    <div className='about-text'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tenetur dicta exercitationem, ad molestiae nemo aliquam, id non reiciendis porro enim. Nemo veniam nam eos voluptatem illo quo qui illum.</p>
    <br/>
    <br/>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eius iste distinctio eos repudiandae ipsa, quia, praesentium fugit, omnis ipsam ut impedit minima adipisci eaque magnam soluta consequuntur ex.</p>
    <br/>
    <br/>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima at, numquam voluptates ullam praesentium dignissimos qui aspernatur vero perferendis earum repellendus accusamus delectus! Possimus, animi!.</p>

    </div>
    </div>
  )
}

export default About