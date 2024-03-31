import React from 'react'

const About = () => {
  return (
    <div className="py-[5%] border bg-[#f1efef] relative">
      <div className="w-[10%] mx-auto">
        <button className="bg-[#fcf9f9] rounded-lg px-4 py-1">About Me</button>
      </div>
      <div className="flex px-[5%] py-5">
        <div className="flex-1">
          <img
            src="/anku.jpg"
            alt="anku"
            className="w-[55%] aspect-[3/3.6] rounded relative z-50 border ml-10 shadow-md shadow-[#77c7b6] my-10"
          />
        </div>
        <div className="flex-1 text-justify">
          <h1 className="text-[1.8rem] font-bold py-3">
            Curious about me? Here you have it:
          </h1>
          <p className="text-grey-600 text-[0.8rem] tracking-wider py-3">
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me..
          </p>
          <p className="text-grey-600 text-[0.8rem] tracking-wider py-3">
            I began my journey as a web developer in 2020, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 4 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>
          <p className="text-grey-600 text-[0.8rem] tracking-wider" py-3>
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </p>
          <p className="text-grey-600 text-[0.8rem] tracking-wider py-3">
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
          <p>Finally, some quick bits about me.</p>
        </div>
      </div>
    </div>
  );
}

export default About