import {BrowserRouter as Router,  Redirect,  useHistory} from "react-router-dom";
import {useState} from 'react';
import HomePage from '../HomePage';
import {fabric} from 'fabric';
import FabricCanvas from './Avatar/FabricCanvas';
import TemplateList from './Avatar/TemplateList';
import {facelist, eyeslist} from './Images/templatelist';
import {Col, Tabs, Tab, Jumbotron, Button } from 'react-bootstrap';
// import {Button, Typography, Paper, Box, Container} from '@material-ui/core'
import React, {Component} from "react";
import "./CustomAva.css"


class CustomAva extends Component {

    constructor(props){
      super(props);
  
      this.state = {
         activeProperty : null
      };
    }
  
    addToCanvas = (imgElement, property_type, z_Index) => {
  
      var imgInstance = new fabric.Image(imgElement, {  
        width: 400,
        height: 400,
        the_type: property_type,
        zIndex : z_Index
      });
  
      this.setState({activeProperty: imgInstance });
  
    }
  
    render() {
      return (
        <div className="App">
  

          <h1 className = "header">Your Avatar</h1>

  
          <div className="App">
            <div className="row">
  
              <Col md={6}>
                <Tabs defaultActiveKey={1} justified id="main_tabs">
                  <Tab className = "animal" eventKey={1} title="Animal">
                    
                    <TemplateList
                        data = {facelist}
                        property_type = "face"
                        zIndex = {0}
                        addtocanvas ={this.addToCanvas}
                    />
  
                  </Tab>
                  <Tab className = "hat" eventKey={2} title="Hat">
  
                    <TemplateList
                      data = {eyeslist}
                      property_type= "eyes"
                      zIndex = {2}
                      addtocanvas ={this.addToCanvas}
                    />
  
                  </Tab>
                  {/* <Tab eventKey={3} title="Beard">
  
                    <TemplateList 
                      data = {faciallist}
                      property_type= "beard"
                      zIndex = {2}
                      addtocanvas ={this.addToCanvas}
                    />
  
                  </Tab>
                  <Tab eventKey={4} title="Hair">
  
                    <TemplateList 
                      data = {hairlist}
                      property_type= "hair"
                      zIndex = {2}
                      addtocanvas ={this.addToCanvas}
                    />
  
                  </Tab>
                  <Tab eventKey={5} title="Background">
  
                    <TemplateList 
                      data = {bglist}
                      property_type= "bg"
                      zIndex = {-9999}
                      addtocanvas ={this.addToCanvas}
                    />
  
                  </Tab> */}
                </Tabs>
              </Col>
              
              <Col md={6}>
  
                <FabricCanvas 
                  activeProperty = {this.state.activeProperty}
                />
              
              </Col>

  
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default CustomAva;