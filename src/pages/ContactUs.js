import React from "react";
import { Row } from "react-bootstrap";
import styled from "styled-components";

const Container = styled.div`
padding:3%;
margin:3%;
margin-left:15%;
align-items: center;

`;

const Col = styled.div`
background:#990f76;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;

`;

const Contact = () => {
	return (
		<div className="contact">
			<Container>
				<Row>
					<Col sm={10} >
						<h1 style={{
							textAlign: "center",
							margin: "50px",
							color: "white"
						}}>Pruthvi Milk Collection Center Ozewadi</h1>
					</Col>
				</Row>
				<Row>
					<Col sm={10}>
						<h2 style={{
							textAlign: "center",
							margin: "50px",
							color: "white"
						}}
						>Name: Samadhan Pattu Gaikwad</h2>
					</Col>
				</Row>
				<Row>
					<Col sm={10}>

						<h2 style={{
							textAlign: "center",
							margin: "50px",
							color: "white"
						}}>Email Id: samadhangaikwad@2gmail.com</h2>
					</Col>
				</Row>
				<Row>
					<Col sm={10}>
						<h2 style={{
							textAlign: "center",
							margin: "50px",
							color: "white"
						}}
						>Mobile no: 9975852393</h2>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Contact;
