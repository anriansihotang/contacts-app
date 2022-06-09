import React from "react";
import ContactList from "./ContactList";
import { getData } from "../utils/data";

// * styling
import '../styles/style.css';
const ContactApp = () => {
	const contacts = getData();

	return (
		<div className="contact-app">
			<h1>Daftar Kontak</h1>
			<ContactList contacts={contacts} />
		</div>
	);
}

export default ContactApp;