'use strict';

class AddAnotherCardButton extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div class="addCardButton"> 
      <button class="btn btn-sm btn-outline-secondary" style="width: 100%;" onClick="addCard()">
          <span data-feather="plus"></span> Add another card
      </button>
    </div>
);
  }
}

document.querySelectorAll('.addAnotherCardButton')
  .forEach(domContainer => {
    const commentID = parseInt(domContainer.dataset.commentid, 10);
    ReactDOM.render(<AddAnotherCardButton />, domContainer);
  });

