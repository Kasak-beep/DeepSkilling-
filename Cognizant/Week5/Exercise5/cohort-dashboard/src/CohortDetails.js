import styles from "./CohortDetails.module.css";

function CohortDetails(props) {
    return (
        <div className={styles.box}>
            <h3
                style={{
                    color:
                        props.cohort.status.toLowerCase() === "ongoing"
                            ? "green"
                            : "blue",
                }}
            >
                {props.cohort.name}
            </h3>

            <dl>
                <dt>Current Status</dt>
                <dd>{props.cohort.status}</dd>

                <dt>Started On</dt>
                <dd>{props.cohort.startDate}</dd>

                <dt>Coach</dt>
                <dd>{props.cohort.coach}</dd>

                <dt>Trainer</dt>
                <dd>{props.cohort.trainer}</dd>
            </dl>
        </div>
    );
}

export default CohortDetails;
