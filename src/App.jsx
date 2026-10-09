import React, { useEffect } from "react";

const books = [
  {
    title: "Lady Hendeston",
    cover: "lady-hendeston.jpg",
    description: "Desejo proibido, drama e escolhas que desafiam convenções.",
    amazon:
      "https://www.amazon.com.br/Lady-Hendeston-Swyanne-Rodriguez-ebook/dp/B08NF8W221",
  },
  {
    title: "Kober",
    cover: "kober.jpg",
    description: "Uma trama intensa assinada pela autora paraibana.",
    amazon:
      "https://www.amazon.com.br/Kober-Swyanne-Rodriguez-ebook/dp/B09JJ1GJ6S",
  },
  {
    title: "Lost On You",
    cover: "lost-on-you.jpg",
    description:
      "Um casamento por conveniência, um passado turbulento e sentimentos difíceis de ignorar.",
    amazon:
      "https://www.amazon.com.br/Lost-You-Destinos-Entrela%C3%A7ados-Livro-ebook/dp/B0CD538H5X",
  },
  {
    title: "Lie For You",
    cover: "lie-for-you.jpg",
    description:
      "O reencontro de duas mulheres e a tentativa de reconstruir o que ficou pelo caminho.",
    amazon:
      "https://www.amazon.com.br/Lie-You-Destinos-Entrela%C3%A7ados-Livro-ebook/dp/B0CSJRGKZR",
  },
  {
    title: "Living In You",
    cover: "living-in-you.jpg",
    description:
      "Um relacionamento de fachada que começa a despertar sentimentos reais.",
    amazon:
      "https://www.amazon.com.br/Living-You-Destinos-Entrela%C3%A7ados-Livro-ebook/dp/B0DN53177P",
  },
  {
    title: "Ódio Carmesim",
    cover: "odio-carmesim.webp",
    description:
      "O início de uma nova saga de fantasia, ódio e acordos impossíveis.",
    amazon:
      "https://www.amazon.com.br/%C3%93dio-Carmesim-Acordos-Imortais-Livro-ebook/dp/B0G6FZ97S6",
  },
  {
    title: "FLAMES",
    cover: "flames.jpg",
    description: (
      <>
        O primeiro encontro de Hyun e Amélie, anos antes de <em>Lost On You</em>
        .
      </>
    ),
    amazon:
      "https://www.amazon.com.br/FLAMES-Destinos-Entrela%C3%A7ados-Swyanne-Rodriguez-ebook/dp/B0BTDQY4G8",
  },
];

function AmazonLink({ href, children = "Encontrar na Amazon ↗", className }) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

function BookCard({ book }) {
  return (
    <article className="book-card reveal">
      <div className="book-cover">
        <img
          src={`/assets/capas/${book.cover}`}
          alt={`Capa do livro ${book.title}`}
        />
      </div>
      <div className="book-info">
        <h3>{book.title}</h3>
        <p>{book.description}</p>
        <AmazonLink href={book.amazon} />
      </div>
    </article>
  );
}

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -36px 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="topbar">
        <nav className="wrap" aria-label="Navegação principal">
          <a className="brand" href="#inicio">
            Swyanne Rodriguez
          </a>
          <div className="navlinks">
            <a href="#livros">Livros</a>
            <a href="#sobre">Sobre</a>
            <a href="#palco">Teatro</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="wrap hero-grid">
            <div className="hero-content reveal is-visible">
              <div className="eyebrow">Autora · Atriz · Paraíba</div>
              <h1>
                Histórias que ficam.
                <br />
                <span>Personagens que vivem.</span>
              </h1>
              <p className="hero-copy">
                Entre romances intensos e a emoção do palco, Swyanne transforma
                sentimentos em histórias — e histórias em encontros.
              </p>
              <div className="actions">
                <a className="button primary" href="#livros">
                  Conheça os livros
                </a>
                <a className="button" href="#palco">
                  Sua trajetória no teatro
                </a>
              </div>
            </div>
            <figure className="portrait-frame reveal is-visible">
              <img
                src="/assets/foto-colorida.jpg"
                alt="Retrato de Swyanne Rodriguez"
              />
              <figcaption className="portrait-caption">
                “Escrever é sentir sem pedir licença.”
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="section books" id="livros">
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <div className="eyebrow">Universos para descobrir</div>
                <h2>Livros &amp; histórias</h2>
              </div>
              <p className="section-intro">
                Romances cheios de desejo, conflitos e personagens que seguem
                com a gente depois da última página.
              </p>
            </div>
            <div className="books-grid">
              {books.map((book) => (
                <BookCard key={book.title} book={book} />
              ))}
            </div>
            <div className="catalog-link">
              <AmazonLink
                className="button"
                href="https://www.amazon.com.br/stores/author/B08PL25VM9/allbooks"
              >
                Ver catálogo completo na Amazon ↗
              </AmazonLink>
            </div>
          </div>
        </section>

        <section className="section" id="sobre">
          <div className="wrap about-grid">
            <div className="about-image reveal">
              <img
                src="/assets/foto-autora.jpg"
                alt="Swyanne em um retrato em preto e branco"
              />
            </div>
            <div className="about-text reveal">
              <div className="eyebrow">A pessoa por trás das histórias</div>
              <h2>Uma vida feita de arte</h2>
              <p className="lead">
                Paraibana, autora e apaixonada por romances intensos, Swyanne
                escreve histórias sáficas cheias de drama, desejo e emoção.
              </p>
              <p>
                Em seus livros, sentimentos fortes encontram personagens que
                enfrentam escolhas, recomeços e relações que desafiam certezas.
                A escrita é uma forma de explorar tudo aquilo que pulsa por
                dentro — e de criar mundos onde leitoras possam se reconhecer.
              </p>
              <div className="personal-note">
                Fora das páginas, a arte continua presente: Swyanne também
                encontra no teatro espaço para contar histórias, experimentar
                personagens e dividir emoções com o público.
              </div>
            </div>
          </div>
        </section>

        <section className="section theatre" id="palco">
          <div className="wrap theatre-grid">
            <div className="theatre-copy reveal">
              <div className="eyebrow">Outra forma de contar histórias</div>
              <h2>Do livro ao palco</h2>
              <span className="theatre-tag">Companhia Gambiarra</span>
              <p>
                Além de escritora, Swyanne é atriz e faz parte da Companhia
                Gambiarra. No palco, dá corpo e voz a outras histórias, em uma
                trajetória que também celebra o encontro, a criação coletiva e a
                força do teatro.
              </p>
              <p>
                Entre os trabalhos da companhia está{" "}
                <em>O Retorno das Noivas</em>, espetáculo que marca uma fase
                especial dessa caminhada artística.
              </p>
              <AmazonLink
                className="button"
                href="https://www.instagram.com/companhiagambiarraag/"
              >
                Acompanhe a arte no Instagram ↗
              </AmazonLink>
            </div>
            <figure className="theatre-image reveal">
              <img
                src="/assets/atriz-gambiarra.jpg"
                alt="Swyanne caracterizada para uma apresentação teatral"
              />
            </figure>
          </div>
        </section>

        <section className="section" aria-label="Retratos de Swyanne">
          <div className="wrap">
            <div className="eyebrow">Entre cenas e capítulos</div>
            <div className="gallery">
              <img
                className="reveal"
                src="/assets/retrato.jpg"
                alt="Retrato de Swyanne"
              />
              <img
                className="reveal"
                src="/assets/foto-colorida.jpg"
                alt="Swyanne em um retrato colorido"
              />
              <img
                className="reveal"
                src="/assets/foto-autora.jpg"
                alt="Retrato artístico em preto e branco"
              />
            </div>
          </div>
        </section>

        <section className="contact" id="contato">
          <div className="wrap reveal">
            <div className="eyebrow">Continue por perto</div>
            <h2>Novas histórias começam com um encontro.</h2>
            <p>
              Acompanhe os próximos capítulos, lançamentos e projetos
              artísticos.
            </p>
            <div className="socials">
              <AmazonLink href="https://www.instagram.com/swyanne_autora">
                Instagram da autora ↗
              </AmazonLink>
              <AmazonLink href="https://www.amazon.com.br/stores/author/B08PL25VM9">
                Página de autora na Amazon ↗
              </AmazonLink>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap foot-inner">
          <span>© {new Date().getFullYear()} Swyanne Rodriguez</span>
          <span>Autora & atriz · Paraíba, Brasil</span>
          <span>Feito com carinho.</span>
        </div>
      </footer>
    </>
  );
}
