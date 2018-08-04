'use strict';

class GroupNav extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <li class="nav-item">
        <a class="nav-link" href="#">
          <span data-feather="hash"></span> Group 1
        </a>
      </li>
    );
  }
}

document.querySelectorAll('.groupCell')
  .forEach(domContainer => {
    const commentID = parseInt(domContainer.dataset.commentid, 10);
    ReactDOM.render(<GroupNav />, domContainer);
  });

