import { VscGithubInverted } from 'react-icons/vsc'
import styles from "./styles.module.scss";

function LoginBox() {
  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Envie e compartilhe sua mensagem</strong>
      <a href="#" className={styles.singInWithGithub}>
        <VscGithubInverted size="20"/>
        Entrar com github
      </a>
    </div>
  );
}

export { LoginBox };
