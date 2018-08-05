'use strict';

class AddCardForm extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <form>
        <div class="form-group">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
        </div>
        <button type="submit" class="btn btn-success btn-sm">Add Card</button>
        <button class = "add_button1 btn btn-light">
          <a class="d-flex align-items-center text-muted" href="#">
            <span data-feather="x-circle"></span>
          </a>
        </button>
      </form>                
    );
  }
}

document.querySelectorAll('.AddCardForm')
  .forEach(domContainer => {
    const commentID = parseInt(domContainer.dataset.commentid, 10);
    ReactDOM.render(<AddCardForm />, domContainer);
  });

