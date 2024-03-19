import "../assets/css/base.css";

const TheWelcome = () => {
  return (
    <>
      <main className="main-container">
        <div className="main">
          <div>
            <h1 className="main-title">Welcome To Create React Next</h1>
          </div>

          <div className="center">
            <img
              className="logo"
              src="https://api.iconify.design/vscode-icons:file-type-reactts.svg"
              alt="React Logo"
            />
          </div>

          <div className="grid">
            <div className="card">
              <a
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>Documentation</h2>
                <p>Find in-depth information about ReactJs hooks.</p>
              </a>
            </div>
            <div className="card">
              <a
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>React Router v6</h2>
                <p>
                  Find in-depth information about React Router's implementation.
                </p>
              </a>
            </div>

            <div className="card">
              <a
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>Redux ToolKit</h2>
                <p>Explore React's powerful state management library.</p>
              </a>
            </div>

            <div className="card">
              <a
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>TypeScript</h2>
                <p>
                  Explore TypeScript's robust type safety for codebase
                  reliability.
                </p>
              </a>
            </div>

            <div className="card">
              <a
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>Eslint</h2>
                <p>
                  Explore Eslint's static code analysis for JavaScript and
                  TypeScript.
                </p>
              </a>
            </div>

            <div className="card">
              <a
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>TailwindCss</h2>
                <p>
                  Explore the utility first CSS framework for building sites
                  rapidly.
                </p>
              </a>
            </div>

            <div className="card">
              <a
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>React Query</h2>
                <p>
                  Explore React Query for streamlined data fetching in React
                  apps.
                </p>
              </a>
            </div>

            <div className="card">
              <a
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>React useHooks</h2>
                <p>Explore a collection of modern, server safe React hooks.</p>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default TheWelcome;
