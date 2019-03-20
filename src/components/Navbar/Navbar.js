import React from 'react';


export default class Mainnav extends React.Component {

  render() {
    return (
<nav class="navbar navbar-dark bg-dark">

  <a class="navbar-brand" href="#">
    <img src="images/v-nav-logo.png" width="30" height="30" alt="" />
  </a>

  <ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">FAQ</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Contact</a>
  </li>
</ul>


</nav>        );
      }
}