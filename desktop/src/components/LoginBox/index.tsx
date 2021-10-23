import { useContext, useEffect } from 'react'
import { VscGithubInverted } from 'react-icons/vsc'
import { AuthContext } from '../../context/auth'
import styles from './styles.module.scss'

function LoginBox() {
   const { signInUrl, user, signOut } = useContext(AuthContext);

  console.log(user)

  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Envie e compartilhe sua mensagem</strong>
      <a href={signInUrl} className={styles.singInWithGithub}>
        <VscGithubInverted size="20"/>
        Entrar com github
      </a>
    </div>
  );
}

export { LoginBox };
