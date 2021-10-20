import { useEffect } from 'react'
import { VscGithubInverted } from 'react-icons/vsc'
import { api } from '../../services/api'
import styles from './styles.module.scss'

type AuthResponse = {
  token: string;
  user: {
    id: string;
    avatar_url: string;
    name: string;
    login: string;
  }
}


function LoginBox() {
  const singInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=522229163783d3a0bddf`

  async function singIn(githubCode: string) {
    const response = await api.post<AuthResponse>('authenticate', {
      code: githubCode
    })

    const { token, user } = response.data;

    localStorage.setItem('@dowhile:token', token)

    console.log(user)
  }

  useEffect(() => {
    const url = window.location.href
    const hasGithubCode = url.includes('?code=')

    if (hasGithubCode) {
      const [urlWithoutCode, githubCode] = url.split('?code=');
      window.history.pushState({}, '', urlWithoutCode);
      singIn(githubCode)
    }

  }, [])

  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Envie e compartilhe sua mensagem</strong>
      <a href={singInUrl} className={styles.singInWithGithub}>
        <VscGithubInverted size="20"/>
        Entrar com github
      </a>
    </div>
  );
}

export { LoginBox };
