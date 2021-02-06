import React from 'react';
import MedicationList from './components/MedicationList';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            respose :[],
            medList :[]
        }
    }

    componentDidMount() {
        fetch("http://localhost:3001/")
        .then(res => res.json())
        .then(res => this.setState({respose: res}))
        .catch(error => error);
    }
    getData(key){
        fetch(`http://localhost:3001/medication/${key}`)
        .then(res => res.json())
        .then(res => this.setState({medList: res}))
        .catch(error => error);
    }

    render(){
        const data = this.state.respose;
        if(data.length > 0){
            return(
            <React.Fragment>
            {data.map(res => {
                return (
                    <div key={res.PatientKey}>
                        <p>{res.FirstName}</p>
                        <p>{res.LastName}</p>
                        <p>{res.Age}</p>
                        <p>{res.Pulse}</p>
                        <p><button type="button" onClick={() => this.getData(res.PatientKey)}>get</button></p>
                    </div>
                )
            })}
            <MedicationList
            props={this.state.medList}
            />
            </React.Fragment>);
        }
        return '...loading';
    }
}

export default App;