import React from 'react';
import Arrow from '../../components/Arrow';
import './Header.css';
import MonthHeader from "../../components/MonthHeader";


const Header = ({selectedDate, toSelectedDate}) => {

  return (
    <div className={"Header"}>
      <Arrow  direction={"fa fa-angle-left"}
              toSelectedDate={toSelectedDate}
      />
      <MonthHeader date={selectedDate}/>
      <Arrow  direction={"fa fa-angle-right"}
              toSelectedDate={toSelectedDate}
      />
    </div>
  );
};

export default Header;
