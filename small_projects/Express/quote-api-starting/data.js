const quotes = [
  {
    quote: 'We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins.',
    person: 'Ellen Ullman',
    id: 1,
    year: 2017 // From "Life in Code: A Personal History of Technology" (2017)[12]
  },
  {
    quote: 'The best thing about a boolean is even if you are wrong, you are only off by a bit.',
    person: 'Anonymous',
    id: 2,
    year: 2000 // Widely circulated online; earliest known appearance around 2000
  },
  {
    quote: `If it's a good idea, go ahead and do it. It's much easier to apologize than it is to get permission.`,
    person: 'Grace Hopper',
    id: 3,
    year: 1982 // Attributed to Hopper in a 1982 speech[2]
  },
  {
    quote: 'The city’s central computer told you?  R2D2, you know better than to trust a strange computer!',
    person: 'C-3PO',
    id: 4,
    year: 1980 // From "The Empire Strikes Back" (1980)[3]
  },
  {
    quote: 'I have always wished for my computer to be as easy to use as my telephone; my wish has come true because I can no longer figure out how to use my telephone.',
    person: 'Bjarne Stroustrup',
    id: 5,
    year: 2011 // Quote popularized online in the 2010s; earliest Goodreads entry 2011[4]
  },
  {
    quote: 'Understand well as I may, my comprehension can only be an infinitesimal fraction of all I want to understand.',
    person: 'Ada Lovelace',
    id: 6,
    year: 1843 // Lovelace's notes on the Analytical Engine (1843)[5]
  },
  {
    quote: 'Java is to JavaScript as ham is to hamster.',
    person: 'Jeremy Keith',
    id: 7,
    year: 2009 // Attributed to Jeremy Keith, 2009[6]
  },
  {
    quote: `The most dangerous phrase in the language is, "We've always done it this way."`,
    person: 'Grace Hopper',
    id: 8,
    year: 1987 // Hopper is widely credited; popularized in the late 1980s[7]
  },
  {
    quote: 'As soon as we started programming, we found to our surprise that it wasn’t as easy to get programs right as we had thought.  Debugging had to be discovered.  I can remember the exact instant when I realized that a large part of my life from then on was going to be spent in finding mistakes in my own programs.',
    person: 'Maurice Wilkes',
    id: 9,
    year: 1949 // Wilkes' famous reflection on debugging[8]
  },
  {
    quote: 'Learning to write programs stretches your mind, and helps you think better, creates a way of thinking about things that I think is helpful in all domains.',
    person: 'Bill Gates',
    id: 10,
    year: 1996 // Gates frequently discussed programming's benefits in the 1990s
  },
  {
    quote: 'What one programmer can do in one month, two programmers can do in two months.',
    person: 'Fred Brooks',
    id: 11,
    year: 1975 // From "The Mythical Man-Month" (1975)[10]
  },
  {
    quote: 'The Internet? Is that thing still around?',
    person: 'Homer Simpson',
    id: 12,
    year: 1999 // "Thirty Minutes Over Tokyo" episode, The Simpsons (1999)[11]
  },
  {
    quote: 'If you tell me precisely what it is a machine cannot do, then I can always make a machine which will do just that.',
    person: 'Jon von Neumann',
    id: 13,
    year: 1951 // Attributed to von Neumann, early 1950s
  }
];

const biographicalBlurbs = [
  {
    id: 1,
    person: 'Ellen Ullman',
    bio: 'Ellen Ullman is an American computer programmer and author known for her insightful writing on the human side of technology. She began her programming career in the late 1970s and has published acclaimed books and essays, including "Close to the Machine" and "Life in Code." Ullman has also worked as a technology commentator for NPR and lives in San Francisco.',
    year: 1946,
    occupation: 'Computer Programmer, Author'
  },
  {
    id: 2,
    person: 'Anonymous',
    bio: 'This quote is attributed to "Anonymous," as the true author is unknown. It is widely circulated in programming communities as a humorous take on boolean logic.',
    year: null,
    occupation: 'Unknown'
  },
  {
    id: 3,
    person: 'Grace Hopper',
    bio: 'Grace Hopper was an American computer scientist and United States Navy rear admiral. A pioneer in computer programming, she helped develop the first compiler and was instrumental in the creation of COBOL. Hopper is remembered for her trailblazing work in computing and her advocacy for innovation.',
    year: 1906,
    occupation: 'Computer Scientist, Rear Admiral, Programmer'
  },
  {
    id: 4,
    person: 'C-3PO',
    bio: 'C-3PO is a fictional protocol droid from the Star Wars universe, known for his fluency in over six million forms of communication and his anxious, etiquette-driven personality. Built by Anakin Skywalker, C-3PO is a constant companion to R2-D2 and plays a key role in galactic events.',
    year: null,
    occupation: 'Protocol Droid (Fictional Character)'
  },
  {
    id: 5,
    person: 'Bjarne Stroustrup',
    bio: 'Bjarne Stroustrup is a Danish computer scientist best known for creating the C++ programming language. He developed C++ at Bell Labs to address the needs of large-scale software development and has authored influential books on programming. Stroustrup has held academic and industry positions and received numerous awards for his contributions to computer science.',
    year: 1950,
    occupation: 'Computer Scientist, Creator of C++'
  },
  {
    id: 6,
    person: 'Ada Lovelace',
    bio: 'Ada Lovelace was an English mathematician and writer, celebrated as the world’s first computer programmer. She collaborated with Charles Babbage on his Analytical Engine, writing what is considered the first algorithm intended for a machine. Lovelace’s visionary insights laid the groundwork for modern computing.',
    year: 1815,
    occupation: 'Mathematician, First Computer Programmer'
  },
  {
    id: 7,
    person: 'Jeremy Keith',
    bio: 'Jeremy Keith is an Irish web developer, writer, speaker, and musician. He is known for his work on web standards, his influential books such as "DOM Scripting" and "HTML5 for Web Designers," and for co-founding the design agency Clearleft. Keith is a prominent advocate for resilient web design.',
    year: 1974,
    occupation: 'Web Developer, Author, Speaker'
  },
  {
    id: 8,
    person: 'Maurice Wilkes',
    bio: 'Sir Maurice Wilkes was a British computer scientist who led the team that built EDSAC, one of the world’s first practical stored-program computers. He pioneered microprogramming and contributed significantly to computer networking and software engineering. Wilkes received the Turing Award and was knighted for his achievements.',
    year: 1913,
    occupation: 'Computer Scientist, Pioneer of Computing'
  },
  {
    id: 9,
    person: 'Bill Gates',
    bio: 'Bill Gates is an American business magnate, software developer, and philanthropist. He co-founded Microsoft in 1975, leading the company to become a global software powerhouse. Gates is also known for his extensive philanthropic work through the Bill & Melinda Gates Foundation.',
    year: 1955,
    occupation: 'Business Magnate, Software Developer, Philanthropist'
  },
  {
    id: 10,
    person: 'Fred Brooks',
    bio: 'Frederick P. Brooks, Jr. was an American computer scientist best known for managing IBM’s System/360 project and authoring "The Mythical Man-Month." He founded the Computer Science Department at the University of North Carolina and made pioneering contributions to computer architecture and software engineering.',
    year: 1931,
    occupation: 'Computer Scientist, Software Engineer, Author'
  },
  {
    id: 11,
    person: 'Homer Simpson',
    bio: 'Homer Simpson is a fictional character and the bumbling, lovable patriarch of the Simpson family in the long-running animated TV series "The Simpsons." He works as a nuclear safety inspector in Springfield and is known for his humorous antics, love of donuts, and devotion to his family.',
    year: null,
    occupation: 'Nuclear Safety Inspector (Fictional Character)'
  },
  {
    id: 12,
    person: 'Jon von Neumann',
    bio: 'John von Neumann was a Hungarian-American mathematician, physicist, and polymath. Renowned for his foundational work in mathematics, quantum mechanics, and computer science, he developed the architecture underlying most modern computers and contributed to the Manhattan Project and game theory.',
    year: 1903,
    occupation: 'Mathematician, Physicist, Computer Scientist'
  }
];

module.exports = {
  quotes,
  biographicalBlurbs
};
