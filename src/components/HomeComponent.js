import React from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderCard({item}) {
  return (
    <Card>
      <Link to={`/tool/${item.id}`}>
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          <CardText>{item.description}</CardText>
        </CardBody>
      </Link>
    </Card>
  );
}

function Home(props) {

  const tools = props.tools.map(tool => {
    return (
      <div key={tool.id} className="col-md-5 m-1">
        <RenderCard item={tool} />
      </div>
    );
  });

  return (
    <div className="container-fluid mt-5">
      <div className="row mx-auto justify-content-center">
        {tools}
      </div>
    </div>
  );
}

export default Home;