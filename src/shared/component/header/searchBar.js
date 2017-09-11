import React, { Component } from 'react';

export default (props) => {
  return (
    <div className="y_h_searchbar">
      <input className="y_searchbar_input" type="text" placeholder="searching..." />
      <span className="y_searchbar_icon"><i className="fa fa-search" aria-hidden="true" /></span>
    </div>
  );
};
