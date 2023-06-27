import React from "react";
import { Graph } from "react-d3-graph";

class GraphView extends React.Component {
  constructor(props) {
    super(props);

    this.previousNode={
      index:-1,
      color:null
    }
      this.data= {
        focusedNodeId: "",
        nodes: props.nodes,
        links: props.links,
      };
    
    this.myConfig = {
      automaticRearrangeAfterDropNode: false,
      collapsible: false,
      directed: false,
      focusAnimationDuration: 0.75,
      focusZoom: 2.5,
      freezeAllDragEvents: false,
      height: window.innerHeight - 50,
      highlightDegree: 1,
      highlightOpacity: 0.2,
      linkHighlightBehavior: false,
      maxZoom: 8,
      minZoom: 0.1,
      nodeHighlightBehavior: false,
      panAndZoom: false,
      staticGraph: false,
      staticGraphWithDragAndDrop: false,
      width: window.innerWidth - 30,
      d3: {
        alphaTarget: 0.05,
        gravity: -400,
        linkLength: 10,
        linkStrength: 1,
        disableLinkForce: false,
      },
      node: {
        color: "#d3d3d3",
        fontColor: "black",
        fontSize: 12,
        fontWeight: "normal",
        highlightColor: "red",
        highlightFontSize: 12,
        highlightFontWeight: "bold",
        highlightStrokeColor: "SAME",
        highlightStrokeWidth: 1.5,
        labelProperty: "name",
        mouseCursor: "pointer",
        opacity: 1,
        renderLabel: true,
        size: 450,
        strokeColor: "none",
        strokeWidth: 1.5,
        svg: "",
        symbolType: "circle",
      },
      link: {
        color: "#d3d3d3",
        fontColor: "red",
        fontSize: 10,
        fontWeight: "normal",
        highlightColor: "blue",
        highlightFontSize: 8,
        highlightFontWeight: "bold",
        mouseCursor: "pointer",
        opacity: 1,
        renderLabel: false,
        semanticStrokeWidth: false,
        strokeWidth: 4,
        markerHeight: 6,
        markerWidth: 6,
        strokeDasharray: 0,
        strokeDashoffset: 0,
        strokeLinecap: "butt",
      },
    };

    this.onClickNode = this.onClickNode.bind(this);
    this.onMouseOverNode = this.onMouseOverNode.bind(this);
    this.onMouseOutNode = this.onMouseOutNode.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    
    
    if (this.props.focusedNodeId !== nextProps.focusedNodeId) {
      
      if(this.previousNode.index!==-1)
      {
      this.data.nodes[this.previousNode.index].color= this.previousNode.color
      }
      this.previousNode.index=this.data.nodes.findIndex(node => node.id === nextProps.focusedNodeId);
      if(this.previousNode.index!==-1)
      {
      this.previousNode.color=this.data.nodes[this.previousNode.index].color
      this.data.nodes[this.previousNode.index].color='red'
      }
      else
      {
        alert('CWEID not found');
      }
      this.data.focusedNodeId=nextProps.focusedNodeId
      
      return true; 
    }
    return false;
  }

  onClickNode = function (nodeId, node) {
    this.props.onClickNode(nodeId, node);
  };

  onMouseOverNode = function (nodeId, node) {
    this.props.onMouseOverNode(nodeId, node);
  };
  onMouseOutNode = function (nodeId, node) {
    this.props.onMouseOutNode(nodeId, node);
  };

  render() {
    return (
      <div style={{ borderStyle: "solid", width: "min-content" }}>
        <Graph
          id={this.props.id} // id is mandatory
          data={this.data}
          config={this.myConfig}
          onClickNode={this.onClickNode}
          onMouseOverNode={this.onMouseOverNode}
          onMouseOutNode={this.onMouseOutNode}
        />
      </div>
    );
  }
}
export default GraphView;
