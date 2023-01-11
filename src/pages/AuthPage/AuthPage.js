import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './AuthPage.module.scss'

export default function AuthPage (props) {
  return (
    <main className={styles.AuthPage}>
      <h1>Sign up to get ready for the Tea?</h1>
      <SignUpForm setUser={props.setUser} />
      <h1>Login because the library is open</h1>
      <LoginForm setUser={props.setUser} />
    </main>
  )
}
