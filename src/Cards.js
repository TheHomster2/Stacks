'use strict';

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <ul id="boardCardList">
        <li className="cardPart"><a href="">sfs</a></li>
        <li className="cardPart"><a href="">sfs</a></li>
        <li className="cardPart"><a href="">sfs</a></li>
      </ul>
      );
  }
}

let domContainer = document.querySelector('.cardList');
ReactDOM.render(<Cards />, domContainer);