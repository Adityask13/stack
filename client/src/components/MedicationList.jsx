
const MedicationList = ({props}) => {


   return (props.map(res => {
    return (
        <div key={res.MedicationKey}>
            <p><input type='text' id='name' value={res.Name} disabled/></p>
            <p><input type='text' id='dose' value={res.Dose} disabled/></p>
        </div>)})
    );
}

export default MedicationList;