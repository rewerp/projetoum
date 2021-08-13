import { Link } from 'react-router-dom';

import illustratrionImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/icon.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';


export function NewRoom() {
  return (
    <div id="page-auth">
      <aside>
        <img src={illustratrionImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire suas dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h2>Criar uma nova sala</h2>
          <form>
            <input 
              type="text"
              placeholder="Nome da sala"
            />
            <Button>
              Criar sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala já existente? <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  )
}
