import React, { Component } from 'react';

class App extends Component{

    constructor(){
        super();
        this.state = {
            title: '',
            description: '',
        }
        this.addTask = this.addTask.bind(this);
        this.handleChange =this.handleChange.bind(this);
    }

    addTask(e){
        fetch('/api/task', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
        e.preventDefault();
    }

    handleChange(e){
        const { name, value } = e.target; 
        this.setState({
            [name]: value
        });
    }

    render(){
        return(
            <div>
                {/* NAVIGATION */}
                <nav className="light-blue darken-4">
                    <div className="container">
                        <a className="brand-logo" href="/">Mern Stack</a>
                    </div>
                </nav>

                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addTask}>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="title" onChange={this.handleChange} type="text" placeholder="task title" />
                                            </div>     
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea name="description" onChange={this.handleChange} placeholder="Task Description" className="materialize-textarea"></textarea>
                                            </div>    
                                        </div>
                                        <button className="btn light-blue  darken-4" type="submit" >Send</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col s7">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
