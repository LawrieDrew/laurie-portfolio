import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

function Portfolio() {
    return (
<CardDeck>
  <Card>
    <Card.Img variant="top" src="./images/TipsyTarot.jpg" />
    <Card.Body>
      <Card.Title>Tipsy Tarot</Card.Title>
      <Card.Text>
      This application uses dynamic css and html powered by javascript, and provides a unique experience for the social drinker. Once legal drinking age of the user has been confirmed, The Tipsy Tarot generates both a randomized Tarot Reading and Cocktail Recipe for the user based on their inputed criteria utilizing two supporting application programming interfaces.


      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="./images/Yupp.jpg" />
    <Card.Body>
      <Card.Title>Yupp!</Card.Title>
      <Card.Text>
      Yup Schlepp is the beginning of an intensive project revolving around the needs of your average NYC leasing agent. The goal is to build a full force CRM over time, specific to the needs of Yup Realty, LLC.

In our first version we present the ability to add and edit listings through their numerous data points spanning from data that corresponds to the landlord, building, unit, amenities, location, etc.

While we have the ability to delete from the database n our routes, we don't offer it through the UI. We chose to deliver the initial version this way with purpose. We don't encourage agents to remove listings from the database. Instead we encourage agents to mark the unit's status to show it's availability. Apartments come back on the market on a yearly basis and we want to offer ease of renewing listings with all of their corresponding data when units come back on the market.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="./images/DayPlanner.jpg" />
    <Card.Body>
      <Card.Title>My Fabulous Day</Card.Title>
      <Card.Text>
      Welcome to My Fabulous Day! Your 9 to 5, Simplified. This simple work day calendar application allows the fabulous user (that's you!) to save appointments and events for every hour of the day. This App runs in browser on dynamically updaed HTML and CSS powered by jQuery. Using the Moment.js library enables easy use of current date and time. Using pastels, we make it easy on the eyes!
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="./images/Ring.jpg" />
    <Card.Body>
      <Card.Title>Jewelry</Card.Title>
      <Card.Text>
        In addition to my Web Development work, I am a Metalsmith! Head on over to my Instagram page via the Links Tab to view some of my work.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
    )
};

export default Portfolio;