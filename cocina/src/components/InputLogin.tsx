import styles from "@/styles/InputLogin.module.css";
import React from "react";

type Update = (e: React.ChangeEvent<HTMLInputElement>) => void;

type InputLoginProps = React.PropsWithChildren<{
	type: string;
	name: string;
	placeholder: string;
	onChange: Update;
}>;

export default function InputLogin({
	type,
	name,
	placeholder,
	onChange,
	children,
}: InputLoginProps) {
	return (
		<div className={styles.agrupamento_campo}>
			{children}
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				className={styles.input_esp}
				onChange={onChange}
			></input>
		</div>
	);
}
