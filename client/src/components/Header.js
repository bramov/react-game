import React from 'react';

const Header = () => {
  return (
      <header>
        <nav>
          <div className="nav-wrapper container">
            <div className="brand-logo"><i className="material-icons right">visibility</i> Memory Game</div>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="https://github.com/bramov/"><i className="material-icons left">person</i> gitHub</a></li>
              <li><a href="https://rs.school/"><i className="material-icons left">lightbulb_outline</i>RS School</a></li>
            </ul>
          </div>
        </nav>
      </header>
  )
}

export default Header;
