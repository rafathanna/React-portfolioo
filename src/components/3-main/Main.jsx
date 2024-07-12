import { useState } from "react";
import "./main.css";

const initialProjects = [
  { id: 1, imgPath: "/zz.png", proTitle: "https://rafathanna.github.io/dashboard/", proDescribe: "", category: "arr", link: "https://rafathanna.github.io/dashboard/" },
  { id: 2, imgPath: "/To do list.png", proTitle: "To Do List", proDescribe: "", category: "arr", link: "https://rafathanna.github.io/TO-DO-LIST/" },
  { id: 4, imgPath: "ecc.PNG", proTitle: "Ecommerce project", proDescribe: "", category: "arr", link: "ecommerce-website-fe7c7.web.app/" },
  { id: 5, imgPath: "image.png", proTitle: "Courses Website", proDescribe: "", category: "arr", link: " https://rafathanna.github.io/Courses-website/" },
  { id: 3, imgPath: "/7.jpg", proTitle: "Shadow-Generator", proDescribe: "", category: "arr", link: "https://rafathanna.github.io/Shadow-Generator/" },
  { id: 6, imgPath: "Capture.PNG", proTitle: "My Cv", proDescribe: "", category: "cv", link: "https://drive.google.com/file/d/1isOUbMDMfevFA5n2rNpgqPfXCsB8lPN7/view?usp=sharing" },
  { id: 7, imgPath: "cer1 (1).jpeg", proTitle: "Certificate  1", proDescribe: "", category: "ce", link: "https://drive.google.com/file/d/18Ehh_qi_0k1QA-IbPRBpcSvtsOc1x8Fs/view?usp=sharing" },
  { id: 8, imgPath: "cer1 (2).jpeg", proTitle: "Certificate  2", proDescribe: "", category: "ce", link: "https://drive.google.com/file/d/10DvTvxSVluUXcGjelO0Y6e76KOJbyckD/view?usp=sharing" },
  { id: 9, imgPath: "cer1 (3).jpeg", proTitle: "Certificate 3", proDescribe: "", category: "ce", link: "https://drive.google.com/file/d/1G-JVSK7QJ7D-9eussMGeWtGvj0miS590/view?usp=drive_link" },
  { id: 10, imgPath: "cer1 (4).jpeg", proTitle: "Certificate 4", proDescribe: "", category: "ce", link: "https://drive.google.com/file/d/1F68cEbNFJOnb5NryGu5tZgCr8VyDyEZb/view?usp=drive_link" },
];

const Main = () => {
  const [activeCategory, setActiveCategory] = useState("arr"); // Default active category
  const [projects, setProjects] = useState(initialProjects.filter(item => item.category === "arr"));

  const filterProjects = (category) => {
    setActiveCategory(category);
    console.log("Filtering projects for category:", category);
    
    if (category === "arr") {
      setProjects(initialProjects.filter(item => item.category === "arr"));
    } else if (category === "cv") {
      setProjects(initialProjects.filter(item => item.category === "cv"));
    } else if (category === "ce") {
      setProjects(initialProjects.filter(item => item.category === "ce"));
    }
  };

  const renderProjects = () => {
    return projects.map((project) => (
      <article key={project.id} className="card">
        <img width={266} src={project.imgPath} alt={project.proTitle} />
        <div style={{ width: "266px" }} className="box">
          <h1 className="title">{project.proTitle}</h1>
          <p className="sub-title">{project.proDescribe}</p>
          <div className="flex icons">
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="icon-link">
                {/* Your icon */}
              </a>
            )}
            <a className="link flex" href="#">
              More
              <span style={{ alignSelf: "end" }} className="icon-arrow-right"></span>
            </a>
          </div>
        </div>
      </article>
    ));
  };

  return (
    <main className="flex">
      <section className="flex left-section">
        <button onClick={() => filterProjects("arr")} className={activeCategory === "arr" ? "active" : null}>
          Projects
        </button>
        <button onClick={() => filterProjects("cv")} className={activeCategory === "cv" ? "active" : null}>
          CV
        </button>
        <button onClick={() => filterProjects("ce")} className={activeCategory === "ce" ? "active" : null}>
          Certificates
        </button>
      </section>

      <section className="flex right-section">
        {renderProjects()}
      </section>
    </main>
  );
};

export default Main;
