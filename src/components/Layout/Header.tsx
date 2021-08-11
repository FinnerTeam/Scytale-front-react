import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
        <div className={classes.logo}>Scytale</div>
      <nav>
        <ul>
            <li>
              <button >Pull Request</button>
            </li>
          )
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
