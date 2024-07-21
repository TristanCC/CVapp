export default function CurrentExperience({index, details,onRemove}) {

    function handleRemove() {
        onRemove(index)
    }

    return (
    <>
    <div className="blex remove">

        <div className="titles">
            <h2>{details.workplace}</h2>
            <h3>{details.title}</h3>
            <button onClick={handleRemove}>x</button>
        </div>
        <h3>{details.dateStarted} - {details.dateEnded}</h3>
        {/* <h3>{details.description}</h3> */}
    </div>
</>
    )
}