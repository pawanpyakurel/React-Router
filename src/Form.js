import React, {Component } from 'react';
import './Form.css';


class Form extends Component{
	constructor(props){
		super(props);

		this.state = { fullname: "PawaanPyakurel",
						email: "Enter Email",
						phone: "9876789765",
						message: " Hy bro! "
		}
	}

	// handlename =(event) =>{
	// 	this.setState({ fullname: event.target.value})
	// }

	// handleemail =(event) =>{
	// 	this.setState({ email: event.target.value})
	// }

	// handlephone =(event) =>{
	// 	this.setState({ phone: event.target.value})
	// }

	// handlemessage =(event) =>{
	// 	this.setState({ message: event.target.value})
	// }

	 handlesubmit =(event) =>{
	
		alert(JSON.stringify(this.state));
	 	event.preventDefault();
	 	console.log(JSON.stringify(this.state))

	 }

	handelchane = (event) =>{
		this.setState( { [event.target.name]:event.target.value } )
	}

	render (){
		return(
			<div> 
				<form onSubmit ={this.handlesubmit}>
					<label>Full Name</label> <br/>
					<input type="text" name="fullname" value={this.state.fullname} onChange={this.handelchane} /> <br/>

					<label>Email</label>< br/>
					<input type="email" name="email"  value= {this.state.email} onChange={this.handelchane}/> <br/>

					<label>Mobile No</label> <br/>
					<input type="number" name="phone" value= {this.state.phone} onChange={this.handelchane}/> <br/>

					<label>Message</label> <br/>
					<textarea name ="message" value= {this.state.message} onChange={this.handelchane}/> <br/>

					<input type= "submit" value ="Submit" /> <br/>
				</form>
			</div>
		)
	}
}

export default Form;