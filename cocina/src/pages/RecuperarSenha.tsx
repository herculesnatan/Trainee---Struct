import styles from "@/styles/RecuperarSenha.module.css";

import InputLogin from "@/components/InputLogin";
import ButtonLogin from "@/components/ButtonLogin";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { dom } from "@fortawesome/fontawesome-svg-core";

import Head from "next/head";
import { Manrope } from "next/font/google";
import { ChangeEvent, FormEvent, useState } from "react";

const manrope = Manrope({ subsets: ["latin"] });

export default function RecuperarSenha() {
	const [form, setForm] = useState({
		email: "",
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		let aux_form: any = form;
		aux_form[e.target.name] = e.target.value;
		setForm({ ...aux_form });
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		console.log(form);
	};

	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<style>{dom.css()}</style>
			</Head>
			<main style={manrope.style} className={styles.main}>
				<form
					className={styles.form}
					onSubmit={(e: FormEvent<HTMLFormElement>) => {
						handleSubmit(e);
					}}
				>
					<img
						className={styles.logo}
						src="/cocina-logof.png"
						alt="Logo Cocina"
					/>
					<h1 className={styles.title}>Recuperar senha</h1>
					<InputLogin
						type="email"
						placeholder="E-mail"
						name="email"
						onChange={(e) => {
							handleChange(e);
						}}
					>
						<FontAwesomeIcon
							className={styles.icon}
							icon={faEnvelope}
							size="lg"
						/>
					</InputLogin>
					<ButtonLogin type="submit">Enviar</ButtonLogin>
					<p className={styles.p}>Verifique sua caixa de e-mail.</p>
				</form>
			</main>
		</>
	);
}
