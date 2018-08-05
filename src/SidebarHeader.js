'use strict';

class SidebarHeader extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
      <span>Messaging</span>
      <button class = "add_button1 btn btn-light">
        <a class="d-flex align-items-center text-muted" href="#">
          <span data-feather="plus-circle"></span>
        </a>
      </button>
    </h6>
);
  }
}

document.querySelectorAll('.messageSidebarHeader')
  .forEach(domContainer => {
    const commentID = parseInt(domContainer.dataset.commentid, 10);
    ReactDOM.render(<SidebarHeader />, domContainer);
  });

