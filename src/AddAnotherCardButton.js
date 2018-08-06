'use strict';

class AddAnotherCardButton extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
        <button class="btn btn-sm btn-outline-secondary" style="width: 100%;" href="#" id="showForm"><span data-feather="plus"></span> Add another card
        </button>
    );
  }
}

document.querySelectorAll('.newItemButton')
  .forEach(domContainer => {
    const commentID = parseInt(domContainer.dataset.commentid, 10);
    ReactDOM.render(<AddAnotherCardButton />, domContainer);
  });

