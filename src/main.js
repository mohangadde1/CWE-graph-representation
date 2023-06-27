import CWEData from "./data.json";
import React from "react";
import GraphView from "./GraphView";
import ReactModal from "react-modal";
import Tooltip from "./ToolTip";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.nodedata = {
      description: "",
      cvelinks: [],
      x: 0,
      y: 0,
    };

    this.state = {
      showModal: false,
      showToolTip: false,
      focusedValue: "",
      inputCWE: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.onClickNode = this.onClickNode.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.onMouseOverNode = this.onMouseOverNode.bind(this);
    this.onMouseOutNode = this.onMouseOutNode.bind(this);
  }

  handleSubmit(event) {
    this.setState({ focusedValue: this.state.inputCWE });
    event.preventDefault();
  }
  handleChange(event) {
    this.setState({ inputCWE: event.target.value });
  }
  onClickNode = function (nodeId, node) {
    console.log(node);
    if (node.Description) this.nodedata.description = node.Description;
    else this.nodedata.description = "no description avaliable";
    if (node.cvelinks) this.nodedata.cvelinks = node.cvelinks;
    else this.nodedata.cvelinks = [];
    this.setState({ showModal: true });
  };

  onMouseOverNode = function (nodeId, node) {
    console.log(node);
    this.nodedata.x = node.x;
    this.nodedata.y = node.y;
    if (node.Description) this.nodedata.description = node.Description;
    else this.nodedata.description = "no description avaliable";

    this.setState({ showToolTip: true });
  };
  onMouseOutNode = function (nodeId, node) {
    console.log("out-node" + nodeId);
    this.setState({ showToolTip: false });
  };
  handleCloseModal() {
    this.setState({ showModal: false });
  }
  render() {
    return (
      <div>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          shouldCloseOnOverlayClick={true}
          onRequestClose={this.handleCloseModal}
        >
          <div
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <div style={{ alignSelf: "flex-end" }}>
              <button onClick={this.handleCloseModal}>X</button>
            </div>
            <p>{this.nodedata.description}</p>
            {this.nodedata.cvelinks.map((link) => (
              <div>
                <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
              </div>
            ))}
            <div style={{ alignSelf: "flex-end" }}>
              <button onClick={this.handleCloseModal}>Close</button>
            </div>
          </div>
        </ReactModal>
        <Tooltip visible={this.state.showToolTip} offsetX={10} offsetY={10}>
          <div
            style={{
              backgroundColor: "white",
              borderStyle: "solid",
              maxwidth: window.innerWidth - 30,
            }}
          >
            {this.nodedata.description}
          </div>
        </Tooltip>

        <GraphView
          id={"graph"}
          links={CWEData.links}
          nodes={CWEData.nodes}
          focusedNodeId={this.state.focusedValue}
          onClickNode={this.onClickNode}
          onMouseOverNode={this.onMouseOverNode}
          onMouseOutNode={this.onMouseOutNode}
        />

        <form onSubmit={this.handleSubmit}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <label>
              CWEID:
              <input
                type="text"
                value={this.state.inputCWE}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default Main;
