import styles from "./styles.module.css";

const ShowCurrentDate = ({handleNextWeek, handlePreviousWeek, date}) => {


    return (
        <div className={styles.container}>
            <button onClick={handlePreviousWeek}>Previous Week</button>
            <span>{date.format('MMMM Do, YYYY')}</span>
            <button onClick={handleNextWeek}>Next Week</button>
        </div>
    )
}


export default ShowCurrentDate;