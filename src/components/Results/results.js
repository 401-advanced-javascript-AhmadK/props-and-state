/* eslint-disable no-unused-vars */
import React from 'react';

function Results (props){
  if (props.response.Headers) {
    return (
      <section className='results'>
        <p>{(JSON.stringify(props.response ,null , '\t'))}</p>
      </section>
    );
  }else return <section></section>;
}
export default Results;