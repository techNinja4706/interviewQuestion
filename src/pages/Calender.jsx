import ShowCurrentDate from "../components/ShowCuurentDate/ShowCurrentDate";
import TimeZone from "../components/UTCDropdown/TimeZone";
import moment from "moment"
import { useState } from "react";
import Days from "../components/Days/Days";
import styles from "./Calender.module.css"

const Calender = () => {
    const [date, setDate] = useState(moment());
    const [timezone, setTimezone] = useState('UTC');

    const handleNextWeek = () => {
      const nextWeek = moment(date).add(1, 'week');
      setDate(nextWeek);
    };
  
    const handlePreviousWeek = () => {
      const previousWeek = moment(date).subtract(1, 'week');
      setDate(previousWeek);
    };
  
    const handleTimezoneChange = (event) => {
        setTimezone(event.target.value);
        const updatedDate = moment().tz(event.target.value);
        setDate(updatedDate);
      };

    return (
        <div className={styles.container}>
            <h1>Calender</h1>
            <ShowCurrentDate handleNextWeek={handleNextWeek} handlePreviousWeek={handlePreviousWeek} date={date} />
            <TimeZone timezone={timezone} handleTimezoneChange={handleTimezoneChange}/>
            <Days date={date}/>
        </div>
    );
};

export default Calender;