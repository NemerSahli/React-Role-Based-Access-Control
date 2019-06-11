import React from 'react';

export default function Footer() {
  return (
    <div className="footer">
      &copy; 2019 Nemer EL-Sahli
      <a href="https://nemer-sahli.com" target="_blank">
        <i className="fas fa-globe fa-20px" />
      </a>
      <a
        href="mailto:nemer.sahli@gmail.com?Subject=Hello%20again"
        target="_top"
      >
        {' '}
        <i className="fas fa-at fa-20px" />
      </a>
      <a href="https://www.linkedin.com/in/NemerSahli/" target="_blank">
        {' '}
        <i class="fab fa-linkedin fa-20px " />
      </a>
      <a href="https://github.com/NemerSahli" target="_blank">
        {' '}
        <i class="fab fa-github fa-20px " />
      </a>
      <a href="https://stackoverflow.com/users/10749443/nemer" target="_blank">
        {' '}
        <i class="fab fa-stack-overflow fa-20px " />
      </a>
    </div>
  );
}
