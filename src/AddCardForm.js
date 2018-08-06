'use strict';

class AddCardForm extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <form id="newItemForm">
        <input type="text" id="itemDescription" placeholder="Add description..." name="textField"/>
        <input type="submit" id="addButton" value="add" name="submitButton"/>
      </form>
    );
  }
}

document.querySelectorAll('.AddCardForm')
  .forEach(domContainer => {
    const commentID = parseInt(domContainer.dataset.commentid, 10);
    ReactDOM.render(<AddCardForm />, domContainer);
  });

