import React from "react";


class Search extends React.Component{
    state={
        enteredText:""
    }
    onInputChange=(e)=>{
        // console.log(e.target.value)
        this.setState({enteredText:e.target.value})
    }
    onFormSubmit=(e)=>{
                    e.preventDefault()
                    // console.log(this.state.enteredText)
                    this.props.onSubmited(this.state.enteredText)
    }
    render(){
        return(
            <div className="ui segment  p-5">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label >Image Search</label>
                        <input type="text" className=""  placeholder="Image Search"
                        onChange={this.onInputChange}
                        value={this.state.enteredText} />
                    </div>
                </form>
               
            </div>
        );
    
    }
}
export default Search;






// function Search(){
//     return(
//         <div >
//             <input type="text" className="form-control-lg m-5 ml-5" />
//         </div>
//     );
// }
