const Header: React.FC = () => {


  return (
    <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                Наша команда
            </h1>
            <h2 className="header__subtitle">
                Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложаться на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.
            </h2>
        </div>
        <button className="header__logout-btn">Выход</button>
    </header>
  )
}

export default Header