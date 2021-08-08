/* eslint-disable no-useless-escape */
import React, { useState, useEffect } from "react";
import {Form} from "react-bootstrap"

import { Link } from "react-router-dom";
import { login as authUser, login } from "../../services/auth";
import { ValidationForm, TextInput } from "react-bootstrap4-form-validation";
import validator from "validator";
import executeTostr from "../../containers/common/tostrMsg/TostrComponent";

import loginImg from "../../assets/images/login-img.png";

import { register } from "../../services/auth";
import { defaulSuccessMsgs as Messages } from "../../utils/messages";
import registerYatriBG from "../../assets/vectors/register-bg.svg";
import registerHostBG from "../../assets/vectors//register-bg-light.svg";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import Navbar from "../../components/Navbar/Navbar";
import FormInput from "./../../utils/FormInput";





import fbLogin from "../../assets/buttons/fb-login.png";
import googleLogin from "../../assets/buttons/google-login.png";

import useInput from "./../../utils/useInput";

import { GoogleLogin, GoogleLogout } from "react-google-login";
import { refreshTokenSetup } from "../../containers/common/refreshToken";
import "./CreateOpportunity.scss";


const notifications = {
    margin: '20px 20px',
    display: 'flex',

}

const search = {
    margin: '10px 140px',
}
const adminheading = {
    margin: '27px 25px'

}


const CreateOpportunity = ({ match: { params }, history }) => {
	// console.log("props : ", props);
	useEffect(() => window.scrollTo(0, 0), [])

	const registerSubmit = async (e) => {
		e.preventDefault();
		e.stopPropagation();

		try {
			//   if (userpassword !== confPassword) {
			// 	executeTostr(Messages.registrationPassMismatch, { type: 'warn' });
			// 	return false;
			//   }
			//   SetSpinner(true);
			const registerData = await register(
				title,
				description,
				state,
				city,
				zip,
			
			);
			// console.log("registerData : ", registerData);
			if (registerData && !registerData.data) {
				executeTostr(Messages.registrationFail, { type: "error" });
				return false;
			}
			if (
				registerData &&
				(registerData.data.data.token === "<AUTH_TOKEN>" ||
					registerData.data.data.token === "" ||
					!registerData.data.data.token)
			) {
				executeTostr(Messages.registrationFail, { type: "error" });
			} else if (registerData && registerData.data && registerData.data.data.token) {
				executeTostr(registerData.data.data.message, { type: "success" });
			}
		} catch (error) {
			if (error && error.response && error.response.status === 409) {
				executeTostr(Messages.userAlreadyRegistered, { type: "error" });
			} else {
				executeTostr(Messages.registrationFail, { type: "error" });
			}
			// SetSpinner(false);
		}
	};
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [zip, setZip] = useState("");




	useEffect(() => window.scrollTo(0, window.innerHeight / 3.2), []);

	let form = (
		<React.Fragment>
			<div className="row">
				{/* <div className="p4 px-3 text-semi-bold">
					Name <span className="text-danger">*</span>
				</div> */}
				<div className="col-sm-12">
					<div className="p4 px-3 text-semi-bold">
						Title <span className="text-danger">*</span>
					</div>
					<TextInput
						name="title"
						id="title"
						autoFocus
						placeholder="Enter title here"
						required
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>

			</div>
			<div className="p4 px-3 text-semi-bold">
				Description <span className="text-danger">*</span>
			</div>
			<TextInput
				name="description"
				id="input-with-icon-grid"
				type="description"
				placeholder="Enter description here"
				required
				autoComplete="false"
				maxLength={1000}

				value={description}
				onChange={(e) => {
					setDescription(e.target.value);
				}}
			/>
			<div className="row">
				<div className="col-sm-4">
					<div className="p4 px-3 text-semi-bold">
						City<span className="text-danger">*</span>
					</div>
					<TextInput
						name="city"
						id="city"
						placeholder="Eg: Jaipur"
						required
						value={city}
						onChange={(e) => setCity(e.target.value)}

					/>
				</div>
				<div className="col-sm-4">
					<div className="p4 px-3 text-semi-bold">
						State<span className="text-danger">*</span>
					</div>
					<TextInput
						name="state"
						id="state"
						placeholder="Eg: Rajasthan"
						required
						value={state}
						onChange={(e) => setState(e.target.value)}

					/>
				</div>
				<div className="col-sm-4">
					<div className="p4 px-3 text-semi-bold">
						Zip<span className="text-danger">*</span>
					</div>
					<TextInput
						name="zip"
						id="zip"
						placeholder="Eg: 733101"
						required
						value={zip}
						onChange={(e) => setZip(e.target.value)}

					/>
				</div>

			</div>
			<br></br>
			<div>
			<Form.Group controlId="formFileMultiple" className="mb-3">
				<Form.Control required type="file" multiple />
			</Form.Group>
			</div>

			<div className="form-input-section text-center mt-5">
				<button
					type="submit"
					className={`'text-medium zoom-2 bg-color-${params.reg === "host" ? "1" : "2"
						}`}
				>
					Create
				</button>
			</div>
		</React.Fragment>
	);

	return (
		<>
			<Header />
			<Navbar />
			<div className='container'>
            <div className='row text-bold no-gutters'>
                <div className='column col col-xs-4' >
                   <Link to='hostpanel'> <h4 className='text-bold lead' style={adminheading}>
                        Host Dashboard
                    </h4></Link>
                </div>



                <div className='column col col-xs-4' style={search}>

                </div>
                <div className='column col col-xs-4' style={notifications} >
                    <Link className='nav-link' to='hostnotification' >
                        Notifications &nbsp;
                    </Link>

                    <Link className='nav-link' to='hostprofile' >
                        Profile &nbsp;
                        &nbsp;
                    </Link>

                    <Link to="/login">
                        <button type="button" className="btn btn-logout zoom-2">
                            <span className="text-bold">Logout</span>
                        </button>
                    </Link>
                </div>


            </div>
            </div>
	

			<div
				className={`register-screen ${params.reg && params.reg === "host" ? "host-bg-color" : ""
					} py-5`}
			>
				<div className="container-fluid mt-5 mb-4 p-0">
					<div className="register-card">
						<div className="row no-gutters">
							<div
								className={`col-5 d-flex flex-column justify-content-center m-0 ${params.reg && params.reg === "host"
										? "green-blue-bg"
										: "yellow-bg lead"
									}`}
								style={{
									backgroundImage: `url(${params.reg && params.reg === "host"
											? registerHostBG
											: registerYatriBG
										})`,
								}}
							>
								<h1
									className={`text-semi-bold ${params.reg && params.reg === "host" ? "white" : "lead"
										}`}
								>
									{params.reg && params.reg === "host"
										? "Opportunities for yatris!"
										: "Opportunities create here!"}
								</h1>
								<p
									className={`p2 text-medium py-4 ${params.reg && params.reg === "host" ? "white" : "lead"
										}`}
								>
									{params.reg && params.reg === "host"
										? "Create an account to meet enthusiastic Yatris."
										: "Create an opportunity to finish your projects."}
								</p>
							</div>
							<div className="col-7 bg-white py-4 px-3">
								<div className="horizontal-padding">
									<h3 className="text-center lead text-semi-bold py-3">
										Create a new Opportunity
									</h3>

								</div>
								<ValidationForm
									// className={classes.form}
									onSubmit={registerSubmit}
									onError={(errors) => console.log(errors)}
								>
									{form}
								</ValidationForm>

							</div>
						</div>
					</div>
				</div>
			</div>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<Footer showShadow={true}  />
		</>);
};

export default CreateOpportunity;
