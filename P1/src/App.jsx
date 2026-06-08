import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import logo from './assets/Microsoft-Logo.png'

function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [etapa, setEtapa] = useState("email");
  const [tentouLogar, setTentouLogar] = useState(false);
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    if (!tentouLogar) return;

    if (email === "analuisacunhareis@gmail.com" && senha === "2303") {
      mostrarMensagem("Login realizado com sucesso!");
      window.location.href = "https://www.xbox.com/pt-br/games?xr=shellnav"

    } else {
      mostrarMensagem("Usuário ou senha incorretos.");
    }

    setTentouLogar(false);
  }, [tentouLogar]);

  function mostrarMensagem(msg){
    setMensagem(msg);
    setTimeout(() => setMensagem(""), 3000);
  }

  function handleProximo() {
    if (email === "") {
      mostrarMensagem("Digite um email.");
      return;
    }
    if (email !== "analuisacunhareis@gmail.com") {
      mostrarMensagem("Email não encontrado.");
      return;
    }
    setEtapa("senha");
  }

  return (
    <section className={styles.fundo}>
      <div className={styles.login}>

      <div className={styles.logo}>
        <img className={styles.image} src={logo} alt="Microsoft" />
        <h3 className={styles.site}>MICROSOFT</h3>
      </div>
    
         {etapa === "email" ? (
          <>
            <h2 className={styles.titulo}> Entrar </h2>
            <p className={styles.descricao}>Use a sua conta Microsoft.</p>
            
            <input
            className={styles.input} 
            type="email"
            placeholder=' Email ou número de telefone'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <a className={styles.link} href="#"> Esqueceu seu nome de usuário?</a>

            <button className={styles.button} onClick={handleProximo}> Avançar </button>

          </>
         ) : 
         <>
            <h2 className={styles.titulo}> ENTRAR </h2>
            <p className={styles.descricao}>Use a sua conta Microsoft.</p>
            
            <input
            className={styles.input} 
            type="password"
            placeholder=' Digite sua senha'
            value={senha}
            onChange={(s) => setSenha(s.target.value)}
            />

            <a className={styles.link} href="#"> Esqueceu sua senha?</a>

            <button className={styles.button} onClick={() => setTentouLogar(true)}> Entrar </button>
         </>
         }
      </div> 

      {mensagem && (
      <div className={styles.mensagem}>
        {mensagem}
      </div>
      )}

    </section>
  )
}

export default App