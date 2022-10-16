
const DETAILS = {
    0 : { 
        title : "Morbik-Social",
        discription : [`This is a simple social media projects with all the major functionality , which include signin / login ,
        post/share image or text like/dislike posts follow/unfollow users real time one-on-one messaging showing online users and so on. This is a MERN stack project and also uses tailwind for styling.` ,``,``,
         `* The project uses d/t hosting services
            Frontend - render.com , Backend - cyclic.sh , - Sockets - glitch.com and  Files /Images - cloudinary.com  `,``,``,

       `What did i learn more about by building this project ?`,

         `- How to implement web sockets to allow real time chat and notification` ,
         `- Advance React and Node JS best practices, file structures and hooks`,
         `- Creating a beautify user interface using tailwind`,
         `- How to implement web socet `,
         `- How to host a full stack project`,
         `- Authentication and authorization using web tokens`,
         `- File upload and hosting`,
         `- Working with different frameworks , libraries middlewares and packages like express , mongoose , validator , multer , cors , date-fns , dotenv , bcrypt ...`
        ],

        imgs : ["img/project_imgs/social.png","img/project_imgs/social2.png","img/project_imgs/social4.png","img/project_imgs/social5.png"] , 

        link : "https://morbiksocial.onrender.com"
     },

    1 : { 
        title : "Morbik-Fitness",
        discription : [`This project utilized exerciseDB api from rapid api to show diffrent exercises. The exercises can be filtered and searched by different body parts. It also suggest d/t youtube videos that are similar to the current exercise by using the Youtube Search and Download api, also found in rapid api.`,
        `Has a dark mode option and is fully responsive `,``,``,

       `What did i learn more about by building this project ?`,

         `- React building custom hooks` ,
         `- Advanced React Best Practices such as file structure and hooks`,
         `- Creating a beautiful user interface using the Material UI (version 5)`,
         `- Fetching data from unlimited sources using RapidAPI`],

        imgs : ["img/project_imgs/fitness.png","img/project_imgs/fitness1.png","img/project_imgs/fitness2.png","img/project_imgs/fitness3.png"] , 

        link : "https://morbik-fitness.netlify.app/"
     },

    2 : {
        title : "Morbik-Recipe",
        discription : [`This project utilized TheMealDB and CocktailDB  APIs to show diffrent recipes from around the world. The exercises can be filtered  different catagories. It also suggest d/t subreddits that are mainly about foodor cocktails..`,
        `Has a dark mode functionality and user can also save their favorite recipes and subreddits. The site is fully responsive `,``,``,

       `What did i learn more about by building this project ?`,

         `- A deeper understanding if react routers` ,
         `-  A deeper understanding on managing states globaly using useContext hook`,
         `- Creating a beautiful user interface using tailwindcss`,
         `- Using local storage to persist aved data`,
         `- Fetching data from unlimited sources using APIs`
        ],

        imgs : ["img/project_imgs/recipe1.png","img/project_imgs/recipe2.png","img/project_imgs/recipe3.png","img/project_imgs/recipe4.png"] , 

        link : "https://morbikrecipe.netlify.app"
     },

     3 : {
        title : "Morbik-Movies",
        discription : [`This project utilized theMovieDB api show different movies and series and user can get a movie recomendation based on a similar movies thry have seen before. The movies can be filtered and searched by movie title. It also suggest d/t movie subreddits that discuss movies by using the reddit api, also found in rapid api.`,
        `It's fully responsive `,``,``,

        ,`What did i learn more about by building this project ?`,

         `- Using hooks like useMediaQuery` ,
         `- Interacting with an api`,
         `- Creating a beautiful user interface `,
         `- Fetching data from unlimited sources`],

        imgs : ["img/project_imgs/movies.png","img/project_imgs/movies1.png","img/project_imgs/movies2.png","img/project_imgs/movies3.png"] , 

        link : "https://morbik-movies.netlify.app"
      },

    4 : {
        title : `Artis`,
        discription : [`This is a simple project  that displays a list of art as a card`,``,``,

        `What did i learn more about by building this project ?`,

          `- Core react concept` ,
          `- Building dark/light mode`,
          `- Creating a beautiful user interface`],

        imgs : ["img/project_imgs/artis5.png","img/project_imgs/artis3.png","img/project_imgs/artis4.png","img/project_imgs/artis2.png"] , 

        link : "https://k-artis.netlify.app"
    }
}

    let TEMP_STORAGE

const showDetails = index => {

    const htmlobj = document.getElementsByClassName("program_card")[index];
        const title = document.createElement("h3")
        const tech = document.createElement("p")

            title.classList = "projectTitle"
            tech.classList = "tags"

            title.innerHTML =  htmlobj.querySelector("h3").innerHTML
            tech.innerHTML =  htmlobj.querySelector("p").innerHTML

    if(DETAILS[index]) {

        const backbtn = document.createElement("button")
            backbtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="3em" height="2.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="yellow" d="M21 11H6.414l5.293-5.293l-1.414-1.414L2.586 12l7.707 7.707l1.414-1.414L6.414 13H21z"/></svg>'

            backbtn.id = "backbtn"

        const div = document.createElement("div")
        const divimgs = document.createElement("div")
            const img1 = document.createElement("img")
            const img2 = document.createElement("img") 
            const img3 = document.createElement("img") 
            const img4 = document.createElement("img") 

        const imgarr = [img1 , img2 , img3 , img4]

        for(let i = 0 ; i < imgarr.length; i++) {
            imgarr[i].src = DETAILS[index].imgs[i]
            imgarr[i].classList = "more_imgs"

            divimgs.appendChild(imgarr[i])
        }

        const linkbtn = document.createElement("a")

            linkbtn.href = DETAILS[index].link
            linkbtn.target = "_blank"
            linkbtn.classList = "projectlink"
            linkbtn.innerHTML = "View Project"

            divimgs.appendChild(linkbtn)

            let p_sec = document.createElement("section")

            for(let i = 0 ; i < DETAILS[index].discription.length ; i++)
                  {
                    const disc_para = document.createElement("p")
                          disc_para.innerHTML = DETAILS[index].discription[i]
                          p_sec.appendChild(disc_para)
                  }     

                  p_sec.classList = "discr_sec"

            div.appendChild(backbtn)
            div.appendChild(title)
            div.appendChild(tech)
            div.appendChild(p_sec)

        const article = document.createElement("article")

        article.id = "project_disc"

        article.appendChild(div)
        article.appendChild(divimgs)

      for(let i = 0 ; i < document.getElementsByClassName("program_main-wrapper").length ; i++) {  
          document.getElementsByClassName("program_main-wrapper")[i].classList.add("projects_hidden")
    }

        document.getElementById("program_btns-section").style.display = "none"
        document.getElementById("skills_article").appendChild(article)

        backbtn.addEventListener("click" , () => {
        document.getElementById("skills_article").removeChild( document.getElementById("project_disc"))

        document.getElementsByClassName("program_main-wrapper")[0].classList.remove("projects_hidden")
        document.getElementById("program_btns-section").style.display = "flex"
        })

    }

}