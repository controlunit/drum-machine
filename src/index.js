import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';


class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.display = this.display.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(e) {
    let sound = document.getElementById(e.keyCode).childNodes[0];
    sound.play();
  }

  playSound(id) {
    let sound = document.getElementById(id).childNodes[0];
    sound.play();
    this.display(id);
  }

  display(id){
    let trackTitle = document.getElementById(id).childNodes[0].src.slice(44);
    document.getElementById('display').innerHTML = trackTitle;
  }

  render() {
    return (
      <div id="drum-machine">
      <h1 id="title">Drum Machine</h1>
      <div id="display">This will be the unique string</div>
      <hr/>
      <div>
      <button id="81" className="drum-pad" onClick={e => this.playSound(e.target.id)}><audio className="clip" id="Q" src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'></audio> Q </button>
      <button id="87" className="drum-pad" onClick={e => this.playSound(e.target.id)}><audio className="clip" id="W" src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'></audio> W </button>
      <button id="69" className="drum-pad" onClick={e => this.playSound(e.target.id)}><audio className="clip" id="E" src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'></audio> E </button>
      <button id="65" className="drum-pad" onClick={e => this.playSound(e.target.id)}><audio className="clip" id="A" src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'></audio> A </button>
      <button id="83" className="drum-pad" onClick={e => this.playSound(e.target.id)}><audio className="clip" id="S" src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'></audio> S </button>
      <button id="68" className="drum-pad" onClick={e => this.playSound(e.target.id)}><audio className="clip" id="D" src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'></audio> D </button>
      <button id="90" className="drum-pad" onClick={e => this.playSound(e.target.id)}><audio className="clip" id="Z" src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'></audio> Z </button>
      <button id="88" className="drum-pad" onClick={e => this.playSound(e.target.id)}><audio className="clip" id="X" src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'></audio> X </button>
      <button id="67" className="drum-pad" onClick={e => this.playSound(e.target.id)}><audio className="clip" id="C" src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'></audio> C </button>
      </div>
      </div>
    );
  }
}

ReactDOM.render(<DrumMachine />, document.getElementById("app"));
