import React, {Component} from 'react'

class Folder extends Component{
    constructor(props){
        super(props);

        this.state = {
            clicked: true,
        };

    this.myToggle = this.myToggle.bind(this);
    }

    myToggle = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
        <div className="Folder">
            <label>Home</label><br/>
            {(this.state.clicked) ?
                    <ul>
                        <li>File 1</li>
                        <li>File 2</li>
                        <li>File 3</li>
                    </ul>
            : null}
        <button id="toggle" onClick={this.myToggle}>Toggle</button>
         </div>  
        )     
        
        
            
            
        
    }
}

export default Folder;