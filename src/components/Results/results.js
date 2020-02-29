/* eslint-disable no-unused-vars */
import React from 'react';
import ReactJSon from 'react-json-view';

function Results (props){
  if (props.response.Headers) {
    return (
      <section className='results'>
        <ReactJSon src = {props.response} />
      </section>
    );
  }else return <section></section>;
}
export default Results;