import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class Listing extends Component {
        render(){
            return (
            <div>
                <Card>
                <CardImg top width="100%" src={this.props.image} alt="Card image cap" />
                <CardBody>
                    <CardTitle style={{ color:'black', padding: '20px'}}>{this.props.title}</CardTitle>
                    <CardText style={{ color:'black', padding: '20px'}}>{this.props.description}</CardText>
                    <Button>Button</Button>
                </CardBody>
                </Card>
            </div>
            );
        }
  };
  
  export default Listing;