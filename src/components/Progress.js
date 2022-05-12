import React from 'react';
import PropTypes from 'prop-types';
import "./Progress.css";
import Styled from "styled-components";

const Styleddiv = Styled.div`


progress[value] {
    width: ${props => props.width};
    -webkit-appearance: none;
    appearance: none;

}
progress[value]::-webkit-progress-bar{
  border-radius:20px;
  background-color:rgb(243, 243, 243);
  
}
progress[value]::-webkit-progress-value {
  border-radius:20px;
  background-color:rgb(75, 78, 221);
  box-shadow:0px 0px 15px rgb(159, 160, 231)
}
`;



const Progress  = ({value, max, color, width}) => {
const head="Your Progress";

  return (
   
    <div className='progress'>
      
      <Styleddiv color={color} width={width}>
      <h6 className='heading'>{head}</h6>
      <progress id='file'  value={value} max={max} ></progress>
      <span className='percentage mx-4'>{value/max *100}%</span>
      </Styleddiv>
      </div>
    
  )

 
};
Progress.propTypes={
  value:PropTypes.number.isRequired,
  max: PropTypes.number,
  width: PropTypes.string,
  color: PropTypes.string,
  
};
Progress.defaultProps={
width:'1000px',

}
export default Progress 