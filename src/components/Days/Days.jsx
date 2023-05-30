import moment from "moment";
import styles from "./Days.module.css"

const Days = ({date}) => {
    console.log(date._locale._weekdays);

    const createCheckBoxes = (day, time) => {
        return (
          <label key={time}>
            <input
              type="checkbox"
            />
            {time}
          </label>
        );
      };

    const renderDaySchedule = (day) => {
        const startTime = moment().set({ hour: 9, minute: 0 });
        const endTime = moment().set({ hour: 22, minute: 0 });
        const checkboxes = [];

        while (startTime.isBefore(endTime)) {
          const time = startTime.format('h:mm A');
          checkboxes.push(createCheckBoxes(day, time));
          startTime.add(0.5, 'hour');
        }
    
        return checkboxes;
      };

      console.log("date", date.toObject())

    return (
        <div>
            {date._locale._weekdays.map((week) => {
                return (
                    <div key={week} className={styles.main_container}>
                        <div className={styles.weekDay}>{week}</div>
                        <div>{renderDaySchedule()}</div>
                    </div>
                )
            })} 
        </div>
    )
}

export default Days;