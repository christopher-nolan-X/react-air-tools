import React from 'react';
import { Card, CardText, CardHeader, CardBody, CardTitle, CardFooter, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderCard({item}) {
  return (
    <Card className="card">
      <CardHeader>
        <Link to={`/tool/${item.id}`}>
          <CardTitle tag="h2" className="text-left my-auto">{item.name}</CardTitle>
        </Link>
      </CardHeader>
      <CardBody>
        <CardText className="text-left">{item.description}</CardText>
      </CardBody>
      <CardFooter>
        <Button color="primary">
          Use Now
        </Button>
      </CardFooter>
    </Card>
  );
}

function Home(props) {

  const tools = props.tools.map(tool => {
    return (
      <div key={tool.id} className="col-xs-6 mb-5">
        <RenderCard item={tool} />
      </div>
    );
  });

  return (
    <div className="container mt-5">
      <div className="row mx-auto justify-content-center">
        {tools}
      </div>
    </div>
  );
}

export default Home;