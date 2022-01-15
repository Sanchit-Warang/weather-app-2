const Cards = () => {
    return (
        <div>
           <Container >

<Row>
  <Col lg={1}> </Col>

  <Col sm={12} lg={2} >

    <Card variant="dark" bg="light" text="dark" style={{ width: 'auto' }}>

      <Card.Body>
        <Card.Title className="text-center ">{this.weather[0].dt}</Card.Title>
        <Card.Text className="text-center">
          31st Dec, 1:00 pm
        </Card.Text>


      </Card.Body>
    </Card>
  </Col>
  <Col sm={12} lg={2}><Card variant="dark" bg="light" text="dark" style={{ width: 'auto' }}>

    <Card.Body>
      <Card.Title className="text-center">Saturday</Card.Title>
      <Card.Text className="text-center">
        1st Jan, 1:00 pm
      </Card.Text>

    </Card.Body>
  </Card></Col>
  <Col sm={12} lg={2}><Card variant="dark" bg="light" text="dark" style={{ width: 'auto' }}>

    <Card.Body>
      <Card.Title className="text-center">{ }</Card.Title>
      <Card.Text className="text-center">
        2nd Jan, 1:00 pm
      </Card.Text>

    </Card.Body>
  </Card></Col>
  <Col sm={12} lg={2}><Card variant="dark" bg="light" text="dark" style={{ width: 'auto' }}>

    <Card.Body>
      <Card.Title className="text-center">Monday</Card.Title>
      <Card.Text className="text-center">
        3rd Jan, 1:00 pm
      </Card.Text>

    </Card.Body>
  </Card></Col>
  <Col sm={12} lg={2}><Card variant="dark" bg="light" text="dark" style={{ width: 'auto' }}>

    <Card.Body>
      <Card.Title className="text-center">Tuesday</Card.Title>
      <Card.Text className="text-center">
        4th Jan, 1:00 pm
      </Card.Text>

    </Card.Body>
  </Card></Col>
  <Col lg={1}></Col>
</Row>
</Container>
        </div>
    )
}

export default Cards
