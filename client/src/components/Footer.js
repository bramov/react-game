import React from 'react';

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Описание</h5>
            <p className="grey-text text-lighten-4">Данная игра разработана в рамках прохождения курса RS School по Реакту. </p>
          </div>
          <div className="col l4 offset-l2 s12 right-align">
            <h5 className="white-text">Ссылки</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="https://github.com/bramov">GitHub</a></li>
              <li><a className="grey-text text-lighten-3" href="https://rs.school/js">RSSchool</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container center-align">
          © 2021 Aleksei Abramov
        </div>
      </div>
    </footer>
  )
}

export default Footer;
