const App = () => {
  return (
    <div className="main-container">
      <header>
        <div className="logo-container">
          <h1>logo</h1>
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Sobre</li>
            <li>Páginas</li>
            <li>Contato</li>
          </ul>
        </nav>
        <div>
          <button>
            <span>Comprar ingresso</span>
          </button>
        </div>
      </header>
      <main>
        <h1>Bem-vindo</h1>
        <div>
          <img src="public/img/undraw_Happy_announcement_re_tsm0.png" alt="" />
        </div>
      </main>
    </div>
  )
}

export { App }
