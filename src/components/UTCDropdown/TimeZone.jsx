import styles from "./TimeZone.module.css";

const TimeZone = ({handleTimezoneChange, timezone}) => {

    return (
        <div>
            <select value={timezone} onChange={handleTimezoneChange} className={styles.dropdown}>
                <option value="UTC">UTC 00:00</option>
                <option value="America/New_York">America/New_York</option>
            </select>
        </div>
    )
}

export default TimeZone;