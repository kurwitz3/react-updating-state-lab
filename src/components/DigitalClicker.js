import React,{Component} from 'react'

class DigitalClicker extends Component{
    constructor(){
        super()
        this.state={
           timesClicked: 0 
        }
    }
    buttonClick = (e) => {
        this.setState(previousState => {
            return {
              timesClicked: previousState.timesClicked + 1
            }
          })
    }
    render(){
        return(
            <div>
               <button onClick={this.buttonClick} label={this.state.timesClicked}>{this.state.timesClicked}</button>
            </div>
        )
    }
}

export default DigitalClicker
