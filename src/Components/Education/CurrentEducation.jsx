function CurrentEducation({ index, details, onRemove }) {
    function handleRemove() {
        onRemove(index);
    }

    return (
        <>
    <div className="blex remove">

        <div className="titles">
            <h2>{details.institution}</h2>
            <h3>{details.studyArea}</h3>
            <button onClick={handleRemove}>x</button>
        </div>
    <h3>{details.dateStarted} - {details.dateEnded}</h3>
    </div>
        </>
    );
}

export default CurrentEducation;

