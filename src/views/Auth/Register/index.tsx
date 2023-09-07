import styles from "./Register.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

type Props = {};

const RegisterView = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push } = useRouter();

  const handleRegister = async (event: any) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);
    const data = {
      fullname: event.target.fullname.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    const result = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (result.status === 200) {
      event.target.reset();
      setIsLoading(false);
      push("/auth/login");
    } else {
      setIsLoading(false);
      setError(result.status === 400 ? "Email already exists" : "");
    }
  };
  return (
    <div className={styles.register}>
      <h1 className={styles.register__title}>Register</h1>
      {error && <div className={styles.register__error}>{error}</div>}
      <div className={styles.register__form}>
        <form onSubmit={handleRegister}>
          <div className={styles.register__form__item}>
            <label
              htmlFor="fullname"
              className={styles.register__form__item__label}
            >
              Fullname
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Jhone Doe"
              className={styles.register__form__item__input}
            />
          </div>
          <div className={styles.register__form__item}>
            <label
              htmlFor="email"
              className={styles.register__form__item__label}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@email.com"
              className={styles.register__form__item__input}
            />
          </div>
          <div className={styles.register__form__item}>
            <label
              htmlFor="password"
              className={styles.register__form__item__label}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              className={styles.register__form__item__input}
            />
          </div>
          <button
            type="submit"
            className={styles.register__form__item__button}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Register"}
          </button>
        </form>
      </div>
      <p className={styles.register__link}>
        Have an account? Sign In <Link href={"/auth/login"}>here</Link>
      </p>
    </div>
  );
};

export default RegisterView;
