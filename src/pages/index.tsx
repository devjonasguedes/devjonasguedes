import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="page">
      <Head>
        <title>Senior Front-end Developer - Jonas Guedes</title>
        <meta
          name="description"
          content="Tenho experiência com ReactJS, Angular, Firebase e Wordpress."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.grid}>
            <div className={styles.image}>
              <div className={styles.imageBox}>
                <img src="/images/jonas.jpg" alt="Jonas Guedes" />
                {/* <img src="/images/jonas-avatar.png" alt="Jonas Guedes" title="Jonas Guedes" /> */}
              </div>
            </div>
            <div className={styles.about}>
              <ul className={styles.icons}>
                {/* <li><span>Redes Sociais</span></li> */}
                <li>
                  <a
                    href="https://dribbble.com/jgcardoso"
                    className="dribbble"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/devjonasguedes/"
                    className="linkedin"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/devjonasguedes"
                    className="twitter"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-twitter"></i>
                  </a>
                </li>
              </ul>
              <h1 className={styles.title}>
                Desenvolvedor <br /> Front-end
              </h1>
              <p className={styles.aboutText}>
                Me chamo Jonas Guedes, moro em Brasília - DF. Trabalho com
                desenvolvimento front-end para web a mais de 8 anos. Tenho
                experiências com React, Angular e Vue. E estou explorando o
                Firebase e Nodejs ultimamente.
              </p>

              <div className="link-group">
                <a href="#projects" className="btn">
                  Projetos <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="projects" id="projects">
            <ul className="projectsList">
              <li>
                <div className="projectItem">
                  <div className="projectInfo">
                    <h2 className="projectName">Linco Chat</h2>
                    <p>NextJS</p>
                  </div>
                  <div className="projectLink">
                    <a
                      href="https://www.lincochat.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                    >
                      Ver projeto <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="projectItem">
                  <div className="projectInfo">
                    <h2 className="projectName">Spacealley</h2>
                    <p>NextJS, Nodejs e Firebase</p>
                  </div>
                  <div className="projectLink">
                    <a
                      href="https://spacealley.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                    >
                      Ver projeto <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="projectItem">
                  <div className="projectInfo">
                    <h2 className="projectName">Terabyte</h2>
                    <p>JS/TS (Puro), React, Mysql, PHP e AWS.</p>
                  </div>
                  <div className="projectLink">
                    <a
                      href="https://www.terabyteshop.com.br/"
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                    >
                      Ver projeto <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="projectItem">
                  <div className="projectInfo">
                    <h2 className="projectName">Terabyte x Asus</h2>
                    <p>Front-end com HTML, CSS E JS.</p>
                  </div>
                  <div className="projectLink">
                    <a
                      href="https://landing.terabyteshop.com.br/asus-conquiste-a-vitoria/"
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                    >
                      Ver projeto <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="projectItem">
                  <div className="projectInfo">
                    <h2 className="projectName">Setups com IA</h2>
                    <p>Front-end com HTML, CSS E JS.</p>
                  </div>
                  <div className="projectLink">
                    <a
                      href="https://landing.terabyteshop.com.br/setups-com-ia/"
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                    >
                      Ver projeto <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="projectItem">
                  <div className="projectInfo">
                    <h2 className="projectName">Almeida França</h2>
                    <p>
                      Front-end e Wordpress - Parceria com agência de marketing
                      (Storica)
                    </p>
                  </div>
                  <div className="projectLink">
                    <a
                      href="https://almeidafranca.com.br/"
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                    >
                      Ver projeto <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="projectItem">
                  <div className="projectInfo">
                    <h2 className="projectName">Adde Valorem</h2>
                    <p>
                      Front-end e Wordpress - Parceria com agência de marketing
                      (Storica)
                    </p>
                  </div>
                  <div className="projectLink">
                    <a
                      href="https://addevalorem.com.br/"
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                    >
                      Ver projeto <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="projectItem">
                  <div className="projectInfo">
                    <h2 className="projectName">Wiz Soluções</h2>
                    <p>
                      Front-end e Wordpress - Parceria com agência de marketing
                      (Storica)
                    </p>
                  </div>
                  <div className="projectLink">
                    <a
                      href="https://wizsolucoes.com.br/"
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                    >
                      Ver projeto <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
