import HERO_IMAGE from "../src/images/HERO_IMAGE.jpg";
import DUMMYSVG from "../src/svgs/DUMMY.svg";
import "./styles/styles.css";

export const App = () => {
  return (
    <div className="hero-section">
      <div className="left-side-container">
        <h2>React Typescript Bundle Starter</h2>
        <h3>Now Running ENV as: {process.env.NODE_ENV}</h3>
        <h3>This project contains:</h3>
        <ul>
          <li>Configuration from scratch</li>
          <li>
            <a
              href="https://webpack.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Webpack
            </a>
          </li>
          <li>
            <a
              href="https://babeljs.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Babeljs
            </a>
          </li>
          <li>
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Typescript
            </a>
          </li>
          <li>
            Vscode config file that allows to: format code & customize user
            settings.
            <a
              href="https://code.visualstudio.com/docs/getstarted/settings"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vscode Oficcial Site
            </a>
          </li>
          <li>
            Suggested very useful
            <a
              href="https://marketplace.visualstudio.com/vscode"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              extensions{" "}
            </a>
            that you can install and try.
          </li>
        </ul>

        <h4>Advantages of using this starter App</h4>
        <ol>
          <li>You can control all the packages you need & dependencies.</li>
          <li>
            It is better if you are a middle-advanced developer, to know all the
            steps being executed "behind the scenes"
          </li>
          <li>Use development/production + having a build folder.</li>
          <li>
            By using Typecript, you are coding with more control of possible
            errors and App crashing.
          </li>
          <li>
            You can open new tabs, to check all highlighted libraries/configs.
          </li>
          <li>Basic css stylings, so you can use the basic css files.</li>
          <li>Support for png|svg|jpg files</li>
        </ol>
      </div>
      <div className="right-side-container">
        <img src={HERO_IMAGE} alt="HERO IMAGE" className="hero-img" />
        <img src={DUMMYSVG} alt="HERO IMAGE" className="hero-img" />
      </div>
    </div>
  );
};
