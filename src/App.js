import React, {Component} from 'react'
import Table from './Table';

class App extends Component{
    render(){
        return(
            <div className="App">
                <h1>Hola mundo</h1>
                <div className="Table">
                    <Table />
                </div>
            </div>
            
        )
    }
}

export default App