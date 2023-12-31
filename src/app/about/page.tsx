import type { Metadata } from 'next';
import Arrow from '../components/arrow';
import Tooltip from '../components/tooltip';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About',
  description: 'about',
};
const About = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl mb-8 tracking-tighter">
        a bit about me
      </h1>
      <div className="w-52 h-52 relative float-left">
        <Image src="/avatar.png" layout="fill" alt="memoji avatar" />
      </div>
      <section className="prose prose-neutral dark:prose-invert">
        <p>
          I'm what I like to call a chronic new hobbyist. It may seem like I'm
          always getting myself into something new,{' '}
          <span className="italic">which I am</span>, but I genuinely love to
          learn and try new things. As proof, you could also say that I'm also a
          photographer, reader, runner, gamer, bartender, chef, potter, and the
          list goes on and on.
        </p>
        <hr />
        <p className="">
          I studied at{' '}
          <a
            href="https://fsu.edu/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-accent dark:text-shade"
          >
            Florida State University
            <span className="inline-flex align-middle">
              <Arrow />
            </span>
          </a>{' '}
          where bounced around from{' '}
          <Tooltip message={'Civil engineering!'}>
            <text>major</text>
          </Tooltip>{' '}
          to{' '}
          <Tooltip message={'Actuarial science'}>
            <text>major</text>
          </Tooltip>
          , until I got my degree in Information Technology with a minor in
          Computer Science.
        </p>
        <p>
          A few facts about me:
          <ul>
            <li>My favorite cocktail is a Manhattan</li>
            <li>I'm a fan of Formula 1, cheering on Mercedes and Williams</li>
            <li>My fastest NY Times mini crossword time was 0:07 seconds</li>
            <li>In 2023, I watched 84 movies</li>
            <li>
              I love photography. I currently have a slew of digital and film
              cameras, and a walk-in flash tattoo of a camera on wrist. At the
              moment, my favorites are my Fujifilm X-E4 and my Contax G1
            </li>
            <li>
              I'm currently trying to improve on my reading habits. My last read
              was
              <a
                href="https://www.goodreads.com/book/show/32620332-the-seven-husbands-of-evelyn-hugo"
                target="_blank"
                rel="noreferrer noopener"
                className="text-accent dark:text-shade"
              >
                The Seven Husbands of Evelyn Hugo by Taylor Jenkins Reid
                <span className="inline-flex align-middle">
                  <Arrow />
                </span>
              </a>
              , and I'm currently reading{' '}
              <a
                href="https://www.goodreads.com/book/show/13623848-the-song-of-achilles"
                target="_blank"
                rel="noreferrer noopener"
                className="text-accent dark:text-shade"
              >
                The Song of Achilles by Madeline Miller
                <span className="inline-flex align-middle">
                  <Arrow />
                </span>
              </a>
            </li>
            <li>
              I give credit to my interest in tech as a child having started
              with making{' '}
              <a
                href="https://twitter.com/ilyamiskov/status/1679535386987462656"
                target="_blank"
                rel="noreferrer noopener"
                className="text-accent dark:text-shade"
              >
                userbars
                <span className="inline-flex align-middle">
                  <Arrow />
                </span>
              </a>{' '}
              on RuneScape private server forums. It was how I started my path
              into graphic design, which led to HTML and CSS coding, onto my
              first websites and games.
            </li>
          </ul>
        </p>
        <p>You can also find me on the sites below, feel free to follow me!</p>
        <div className="space-x-4">
          <a
            href="https://letterboxd.com/andrewwhitely"
            target="_blank"
            rel="noreferrer noopener"
            className="text-accent dark:text-shade"
          >
            letterboxd
            <span className="inline-flex align-middle">
              <Arrow />
            </span>
          </a>
          <a
            href="https://goodreads.com/andrewwhitely"
            target="_blank"
            rel="noreferrer noopener"
            className="text-accent dark:text-shade"
          >
            goodreads
            <span className="inline-flex align-middle">
              <Arrow />
            </span>
          </a>
          <a
            href="https://www.posts.cv/andrewwhitely"
            target="_blank"
            rel="noreferrer noopener"
            className="text-accent dark:text-shade"
          >
            posts.cv
            <span className="inline-flex align-middle">
              <Arrow />
            </span>
          </a>
        </div>
      </section>
    </div>
  );
};
export default About;
