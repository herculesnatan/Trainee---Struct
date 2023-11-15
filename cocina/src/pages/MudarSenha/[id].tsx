import styles from "@/styles/MudarSenha.module.css";

import InputLogin from "@/components/InputLogin";
import ButtonLogin from "@/components/ButtonLogin";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { dom } from "@fortawesome/fontawesome-svg-core";

import Head from "next/head";
import { Manrope } from "next/font/google";
import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/router";

const manrope = Manrope({ subsets: ["latin"] });

export default function MudarSenha() {
	const router = useRouter();
	const [isempty, setIsempty] = useState(false);
	const [isequal, setIsequal] = useState(false);

	const [form, setForm] = useState({
		senha: "",
		confsenha: "",
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		let aux_form: any = form;
		aux_form[e.target.name] = e.target.value;
		setForm({ ...aux_form });
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		let campos_vazios = Object.values(form).some((val) => val == "");
		setIsempty(campos_vazios);

		setIsequal(form["senha"] != form["confsenha"]);

		console.log(form, router.query.id);
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
					<h1 className={styles.title}>Mudar senha</h1>
					<InputLogin
						type="password"
						name="senha"
						placeholder="Senha"
						onChange={(e) => {
							handleChange(e);
						}}
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
					<InputLogin
						type="password"
						name="confsenha"
						placeholder="Confirme a senha"
						onChange={(e) => {
							handleChange(e);
						}}
					>
						<FontAwesomeIcon
							className={styles.icon}
							icon={faKey}
							size="lg"
						/>
					</InputLogin>
					{isempty && form["confsenha"] == "" && (
						<p className={styles.p}>
							O campo de confirmar senha deve ser preenchido
						</p>
					)}
					{isequal && (
						<p className={styles.p}>
							Os campos de senha devem coincidir
						</p>
					)}
					<ButtonLogin type="submit">Confirmar</ButtonLogin>
				</form>
			</main>
		</>
	);
}
