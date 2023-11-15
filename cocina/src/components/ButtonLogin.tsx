import styles from "@/styles/ButtonLogin.module.css";
import React from "react";

type ButtonLoginProps = React.PropsWithChildren<{
	type: "button" | "submit";
}>;

export default function ButtonLogin({ type, children }: ButtonLoginProps) {
	return (
		<button type={type} className={styles.ButtonLogin}>
			{children}
		</button>
	);
}
