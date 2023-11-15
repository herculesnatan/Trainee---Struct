import styles from "@/styles/Login.module.css";

import InputLogin from "@/components/InputLogin";
import ButtonLogin from "@/components/ButtonLogin";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { dom } from "@fortawesome/fontawesome-svg-core";

import Link from "next/link";
import Head from "next/head";
import { Manrope } from "next/font/google";
import { ChangeEvent, FormEvent, useState } from "react";

const manrope = Manrope({ subsets: ["latin"] });

export default function Login() {
	const [form, setForm] = useState({
		email: "",
		senha: "",
	});

	const [isempty, setIsempty] = useState(false);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		let aux_form: any = form;
		aux_form[e.target.name] = e.target.value;
		setForm({ ...aux_form });
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		console.log("entrou");
		e.preventDefault();

		let campos_vazios = Object.values(form).some((val) => val == "");
		setIsempty(campos_vazios);

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
					></img>
					<h1 className={styles.title}>Fazer login</h1>
					<InputLogin
						type="email"
						name="email"
						placeholder="E-mail"
						onChange={(e) => handleChange(e)}
					>
						<FontAwesomeIcon
							className={styles.icon}
							icon={faEnvelope}
							size="lg"
						/>
					</InputLogin>
					{isempty && form["email"] == "" && (
						<p className={styles.p}>
							O campo do e-mail deve ser preenchido
						</p>
					)}
					<InputLogin
						type="password"
						name="senha"
						placeholder="Senha"
						onChange={(e) => handleChange(e)}
					>
						<FontAwesomeIcon
							className={styles.icon}
							icon={faKey}
							size="lg"
						/>
					</InputLogin>
					{isempty && form["senha"] == "" && (
						<p className={styles.p}>
							O campo da senha deve ser preenchido
						</p>
					)}
					<Link href="RecuperarSenha" className={styles.esqueceu}>
						Esqueceu a senha?
					</Link>
					<ButtonLogin type="submit">Entrar</ButtonLogin>
					<hr className={styles.hr}></hr>
					<Link className={styles.cadastro} href="Cadastro">
						<ButtonLogin type="button">Criar conta</ButtonLogin>
					</Link>
				</form>
			</main>
		</>
	);
}
