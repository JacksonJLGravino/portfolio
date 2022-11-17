import './Projects.css'
import { Folder } from 'phosphor-react'

export function Projects({projectTitle, projectDesciption, projectLink, circleBackground, projectLanguage}) {
  return (
    <li className='projects'>
      <div className='title'>
        <Folder size={24} />
        <h4>{projectTitle}</h4>
      </div>
      <p className='description'>{projectDesciption}</p>
      <div className='projects-footer'>
        <a className='projects-link' href={projectLink} target='_blank'>Saiba Mais</a>
        <div className='project-language'>
          <div className={circleBackground}></div>
          <p>{projectLanguage}</p>
        </div>
      </div>
      
    </li>
  )
}