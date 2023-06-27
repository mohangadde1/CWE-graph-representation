
import { Graph } from "react-d3-graph";
function App(props) {
  const id=props.id; 
  const data = {
    focusedNodeId: props.focusedNodeId,
    nodes:props.nodes,
    links:props.links
  };
  
  const myConfig = {
    
  "automaticRearrangeAfterDropNode": false,
  "collapsible": false,
  "directed": false,
  "focusAnimationDuration": 0.75,
  "focusZoom": 2.5,
  "freezeAllDragEvents": false,
  "height": (window.innerHeight-50),
  "highlightDegree": 1,
  "highlightOpacity": 0.2,
  "linkHighlightBehavior": true,
  "maxZoom": 8,
  "minZoom": 0.1,
  "nodeHighlightBehavior": true,
  "panAndZoom": false,
  "staticGraph": false,
  "staticGraphWithDragAndDrop": false,
  "width": (window.innerWidth-30),
  "d3": {
    "alphaTarget": 0.05,
    "gravity": -400,
    "linkLength": 10,
    "linkStrength": 1,
    "disableLinkForce": false
  },
  "node": {
    "color": "#d3d3d3",
    "fontColor": "black",
    "fontSize": 12,
    "fontWeight": "normal",
    "highlightColor": "red",
    "highlightFontSize": 12,
    "highlightFontWeight": "bold",
    "highlightStrokeColor": "SAME",
    "highlightStrokeWidth": 1.5,
    "labelProperty": "name",
    "mouseCursor": "pointer",
    "opacity": 1,
    "renderLabel": true,
    "size": 450,
    "strokeColor": "none",
    "strokeWidth": 1.5,
    "svg": "",
    "symbolType": "circle"
  },
  "link": {
    "color": "#d3d3d3",
    "fontColor": "red",
    "fontSize": 10,
    "fontWeight": "normal",
    "highlightColor": "blue",
    "highlightFontSize": 8,
    "highlightFontWeight": "bold",
    "mouseCursor": "pointer",
    "opacity": 1,
    "renderLabel": false,
    "semanticStrokeWidth": false,
    "strokeWidth": 4,
    "markerHeight": 6,
    "markerWidth": 6,
    "strokeDasharray": 0,
    "strokeDashoffset": 0,
    "strokeLinecap": "butt"
  }

  };
  
  const onClickNode = function(nodeId) {
    console.log(id)
    window.alert(`Clicked node ${nodeId}`);
  };
  
  const onClickLink = function(source, target) {
    window.alert(`Clicked link between ${source} and ${target}`);
  };
    const onMouseOverNode = function(nodeId) {
    window.alert(`Clicked link between ${nodeId}`);
  };
  return (
    <div style={{borderStyle:'solid',width:"min-content"}}>
    
    <Graph 
      id={id}// id is mandatory
      data={data}
      config={myConfig}
      onClickNode={onClickNode}
      onClickLink={onClickLink}
      onMouseOverNode={onMouseOverNode}
    /> 
    </div>
  );
}



export default App;


 