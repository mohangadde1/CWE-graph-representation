import React from 'react';
import PropTypes from 'prop-types';

class Tooltip extends React.Component {
  static defaultProps = {
    visible: true,
    offsetX: 0,
    offsetY: 0,
  };

  state = {
    xPosition: 0,
    yPosition: 0,

  };

  


  

  render() {
    return (
      <div
        className={this.props.className}
        style={{
          display: this.props.visible  ? 'block' : 'none',
          position: 'fixed',
          top: this.state.yPosition + this.props.offsetY,
          left: this.state.xPosition + this.props.offsetX,
          ...this.props.style,
        }}
      >
        {this.props.children}
      </div>
    );
  }
}



export default Tooltip;