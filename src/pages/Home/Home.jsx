import { useEffect, useState } from 'react'
import { Education } from '../../components/Education/Education'
import { Links } from '../../components/Links/Links'
import { ProfileInfo } from '../../components/ProfileInfo/ProfileInfo'
import { ProjectHeader } from '../../components/ProjectHeader/ProjectHeader'
import { Technologies } from '../../components/Technologies/Technologies'
import './Home.css'
import '../../github-lang-colors.css'
import { Projects } from '../../components/Projects/Projects'

export function Home() {
  const [info, setInfo] = useState({})
  const [repos, setRepos] = useState({})
  const [profileVisible, setProfileVisible] = useState(false)

   useEffect(()=> {
     fetch('https://api.github.com/users/JacksonJLGravino')
    .then(response => response.json())
    .then(data => setInfo(data))
  },[])

  useEffect(() => {
    fetch('https://api.github.com/users/JacksonJLGravino/repos')
    .then(response => response.json())
    .then(data => setRepos(data))
  }, [])

  function profileVisibilityControl () {
    if (profileVisible){
      setProfileVisible(false)
    } else{
      setProfileVisible(true)
    }
  }

  return (
    <div className="container animation">
      <div className='my-projects'>

        { !profileVisible ?
        <div className='infos-mobile animation'>
          <ProjectHeader title='Meus Projetos'  />
        <ul className='list-projects'>
          {repos.length > 0  && 
            repos.map(repository => {
              return(
                <Projects key={repository.id}
                  projectTitle={repository.name} 
                  projectDesciption={repository.description}
                  projectLanguage={repository.language}
                  projectLink={repository.html_url}
                  circleBackground={repository.language} />
              )
            })
          }
        </ul>
        </div>
        : <div></div>
        }

        <div className='infos'>
          <ProjectHeader title='Meus Projetos' />
        <ul className='list-projects'>
          {repos.length > 0  && 
            repos.map(repository => {
              return(
                <Projects key={repository.id}
                  projectTitle={repository.name} 
                  projectDesciption={repository.description} 
                  projectLanguage={repository.language}
                  projectLink={repository.html_url}
                  circleBackground={repository.language} />
              )
            })
          }
        </ul>
        </div>
      </div>

      <div className='my-infos'>
        <ProfileInfo menuVisible={profileVisible} onClick={profileVisibilityControl} />

        {profileVisible ?
        <div className='infos-mobile animation'>
          <ProjectHeader title='Informações' />
          <Links />
          <Technologies />
          <Education />
        </div>
        : <div></div>
        }
        <div className='infos'>
          <Links />
          <Technologies />
          <Education />
        </div>
      </div>
    </div>
  )
}
