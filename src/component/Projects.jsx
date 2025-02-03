import React from "react";
import styled, { keyframes } from "styled-components";

// Animation for overlay appearing smoothly
const slideUp = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const Wrapper = styled.div`
  background-color: #f8f8f8;
  text-align: start;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }

  span {
    color: red;
  }

  .proj-container {
   display: flex;
    // flex-wrap: wrap;
    justify-content: space-around;
    gap: 15px;
    width:100%;
    padding:10px;
    align-items: center;
    overflow-x: scroll;
    overflow-y: hidden;
    &::-webkit-scrollbar{
    display:none;}
   }

  .project {
    width: 150px;
    height: 250px;
    min-width:200px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    background: #ddd;
    cursor: pointer;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .project:hover {
    transform: scale(1.05);
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
   position: absolute;
    bottom: 0px;
    display: flex;
    left: 0px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 5px;
    text-align: center;
    transform: translateY(100%);
    transition: transform 0.4s ease-in-out;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
   

  .project:hover .overlay {
    transform: translateY(0);
  }
    .project:hover .btns{
    transform: translateY(0);
    }
    .btns{
           position: absolute;
    top: 0;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 10px;
    width:100%;
    text-align: center;
    transform: translateY(-100%);
    transition: transform 0.4s ease-in-out;
    // /* flex-direction: column; */
    justify-content: space-around;
    align-items: center;
    display:flex;
    a{
    width:70px;
    text-decoration:none;
    color:black;
    background-color:red;
    padding:5px;
    border-radius:20px;
    }
    }
    .sc-btns{
        width: 100%;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    padding: 0 20px;
    

    button{
    text-decoration:none;
    color:black;
    border:none;
    background-color:red;
    padding:5px;
height: 30px;
    border-radius: 20px;
    width: 30px;    }
    }
    `;

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Description of Project 1",
    image: "/sample.jpg",
    project: "https://example.com",
    github: "https://github.com",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description of Project 2",
    image: "/sample.jpg",
    project: "https://github.com",
    github: "https://github.com",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description of Project 3",
    image: "/sample.jpg",
    project: "https://github.com",
    github: "https://github.com",
  },
  {
    id: 4,
    title: "Project 4",
    description: "Description of Project 4",
    image: "/sample.jpg",
    project: "https://github.com",
    github: "https://github.com",
  },
  {
    id: 5,
    title: "Project 5",
    description: "Description of Project 5",
    image: "/sample.jpg",
    project: "https://github.com",
    github: "https://github.com",
  },
  {
    id: 6,
    title: "Project 6",
    description: "Description of Project 6",
    image: "/sample.jpg",
    project: "https://github.com",
    github: "https://github.com",
  },
  {
    id: 7,
    title: "Project 7",
    description: "Description of Project 7",
    image: "/sample.jpg",
    project: "https://github.com",
    github: "https://github.com",
  },
  {
    id: 8,
    title: "Project 8",
    description: "Description of Project 8",
    image: "/sample.jpg",
    project: "https://github.com",
    github: "https://github.com",
  },
  {
    id: 9,
    title: "Project 9",
    description: "Description of Project 9",
    image: "/sample.jpg",
    project: "https://github.com",
    github: "https://github.com",
  },
  {
    id: 10,
    title: "Project 10",
    description: "Description of Project 10",
    image: "/sample.jpg",
    project: "https://github.com",
    github: "https://github.com",
  },
];

function Projects() {

  return (
    <Wrapper>
      <h2>
        My <span>Projects</span>
      </h2>
      <div className="proj-container">
        <div className="sc-btns">
          <button className="prev"onClick={() => {
              const scroller = document.querySelector(".proj-container");
              scroller.scrollLeft -= 1200;
            }}><img src="/previous.svg" alt="" /></button>
          <button className="nxt"  onClick={() => {
              const scroller = document.querySelector(".proj-container");
              scroller.scrollLeft += 1200;
            }}><img src="/next.svg" alt="" /></button>
        </div>
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <img src={project.image} alt={project.title} className="image" />
            <div className="btns">
              <a href={project.project}>View</a>
              <a href={project.github}>View</a>
            </div>
            <div className="overlay">
              <h6>{project.title}</h6>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

export default Projects;
