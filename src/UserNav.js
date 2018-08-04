'use strict';

class UserNav extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <li class="nav-item">
        <a class="nav-link" href="#">
            <span data-feather="user"></span>   User 1
        </a>
      </li>
    );
  }
}

document.querySelectorAll('.userCell')
  .forEach(domContainer => {
    const commentID = parseInt(domContainer.dataset.commentid, 10);
    ReactDOM.render(<UserNav />, domContainer);
  });

