
const DETAILS = {
    0 : { 
        title : "Morbik-Movies",
        discription : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aliquid dolores fuga illum error numquam quasi veniam quisquam fugit. Odit quae molestias assumenda dolores ex cum explicabo, eligendi doloremque placeat laudantium, nisi soluta animi quo unde, accusamus est recusandae sed reiciendis. Ut reprehenderit praesentium officiis harum reiciendis, consectetur dolore! Iusto, in voluptatibus placeat sed eveniet blanditiis reiciendis illum fuga fugit corporis, vel quisquam voluptate neque quae facere maxime maiores minus id ducimus nobis architecto tempore veniam. Sapiente, in tempore eum, adipisci voluptatibus delectus modi facilis sunt labore hic illum ut officiis quia fugiat repellendus aspernatur! Perferendis consequatur laboriosam numquam error?" ,

        imgs : ["img/project_imgs/movies.png","img/project_imgs/movies.png","img/project_imgs/movies.png","img/project_imgs/movies.png"] , 

        link : "https://morbik-movies.netlify.app"


    }
}

    let TEMP_STORAGE


const showDetails = index => {

    const htmlobj = document.getElementsByClassName("program_card")[index];
        const title = htmlobj.querySelector("h3")
        const tech = htmlobj.querySelector("p")

            title.classList = "projectTitle"
            tech.classList = "tags"

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


        const disc_para = document.createElement("p")
                    disc_para.innerHTML = DETAILS[index].discription


            div.appendChild(backbtn)
            div.appendChild(title)
            div.appendChild(tech)
            div.appendChild(disc_para)

        const article = document.createElement("article")

        article.id = "project_disc"

        article.appendChild(div)
        article.appendChild(divimgs)

        // TEMP_STORAGE = document.getElementById("skills_article").innerHTML

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