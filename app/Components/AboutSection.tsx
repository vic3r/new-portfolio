import React from 'react';
import Image from 'next/image';

const skills = [
  { skill: 'HTML' },
  { skill: 'CSS' },
  { skill: 'Javascript' },
  { skill: 'Typescript' },
  { skill: 'Python' },
  { skill: 'React' },
  { skill: 'C#' },
  { skill: 'Dotnet' },
  { skill: 'Go' },
  { skill: 'Next.js' },
  { skill: 'Tailwind CSS' },
  { skill: 'Material UI' },
  { skill: 'Fluent UI' },
  { skill: 'Git' },
  { skill: 'Github' },
  { skill: 'Azure' },
  { skill: 'Jupyter Notebooks' },
];

function AboutSection() {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h1 className="text-center font-bold text-2xl mb-6 md:text-left">
              Get know me!
            </h1>
            <p>
              {' '}
              Hi, my name is Victor I am a{' '}
              <span className="font-bold">{'hard working'}, </span>
              <span className="font-bold">{'self-disciplined'} </span> and
              <span className="font-bold"> {'friendly'}</span> software engineer
              based in Guadalajara, Mexico
            </p>
            <br />
            <p>
              I graduated from Institute of Technology and Higher Education of
              Monterrey in 2019 with a Bachelor in Computer Science and have
              been working in the field
            </p>
            <br />
            <p>
              I have different hobbies which I love, for example I am marathon
              runner. I have been running for a while. Also I love learning
              languages, I know Spanish, English, French and currently I&#39;m
              learning Korean.
            </p>
            <br />
            <p>
              <span className="font-bold text-teal-500">
                Discipline, consistency and clear goals
              </span>{' '}
              lets you reach amazing stages in your life
            </p>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-center font-bold text-2xl mb-6 md:text-left">
              My Skills
            </h1>
            <div className="flex flex-wrap flex-row justify-center md:justify-start">
              {skills.map((item, idx) => (
                <p
                  key={idx}
                  className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                >
                  {item.skill}
                </p>
              ))}
            </div>
            <Image
              src="/about-image.png"
              alt=""
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
              width={325}
              height={325}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
