// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Don&#39;t look at my commit messages. I assure you they are conventional (to myself).",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Did you know CV stands for Curriculum vitae? I didn&#39;t know that. It seems like it&#39;s commonly used in Europe and sometimes in academia for professors. I am neither from Europe nor a professor. So yea. Here is my resume. :D",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-marry-me-chicipeas",
        
          title: "Marry Me Chicipeas",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Marry-Me-Chickpeas/";
          
        },
      },{id: "post-summer-corn-pasta",
        
          title: "(Summer) corn pasta",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Summer-Corn-Pasta/";
          
        },
      },{id: "post-my-interpretation-of-me-gustas-tu",
        
          title: "My Interpretation of Me Gustas Tu",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/My-Interpretation-of-Me-Gustas-Tu/";
          
        },
      },{id: "post-me-in-100-songs",
        
          title: "Me in 100 Songs",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Me-in-100-Songs/";
          
        },
      },{id: "post-my-foolproof-guide-to-finishing-what-you-started",
        
          title: "My Foolproof Guide to Finishing What You Started",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/My-Foolproof-Guide-to-Finishing-What-You-Stareted/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-choque-de-reyes-a-clash-of-kings",
          title: 'choque de reyes (a clash of kings)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/choque_de_reyes/";
            },},{id: "books-juego-de-tronos-a-game-of-thrones",
          title: 'Juego de Tronos (A Game of Thrones)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/juego_de_tronos/";
            },},{id: "books-knight-of-the-seven-kingdoms",
          title: 'Knight of the Seven Kingdoms',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "books-toremnta-de-espadas-a-storm-of-swords",
          title: 'toremnta de espadas (a storm of swords)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/tormenta_de_espadas/";
            },},{id: "projects-my-memory-allocator",
          title: 'My Memory Allocator',
          description: "my own memory allocator in C",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%61%6D%75%65%6C%68%65%72%6E%61%6E%64%65%7A%30%31%30%39%30%34@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/sammyher", "_blank");
        },
      },];
