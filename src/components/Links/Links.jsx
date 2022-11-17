import './Links.css'
import { MapPin, GithubLogo, LinkedinLogo, YoutubeLogo, GlobeSimple, EnvelopeSimple  } from 'phosphor-react'

export function Links({githubURL}) {
  return (
    <div className='links-infos'>
      <a className='link' href="#">
        <MapPin size={24}/>
        <span>Brasil</span>
      </a>

      <a className='link' href="https://github.com/JacksonJLGravino" target='_blank'>
        <GithubLogo size={24} />
        <span>JacksonJLGravino</span>
      </a>

      <a className='link' href="https://www.linkedin.com/in/jackson-gravino/" target='_blank'>
        <LinkedinLogo size={24} />
        <span>jackson-gravino</span>
      </a>

      <a className='link' href="https://www.youtube.com/channel/UCuxdIvvTAu9u9-epyn34nQA" target='_blank'>
        <YoutubeLogo size={24} />
        <span>JacksonDev</span>
      </a>

      <a className='link' href="#">
        <GlobeSimple size={24} />
        <span>Jackson Gravino Dev</span>
      </a>

      <a className='link' href="mailto:jacksonjlgravino@gmail.com" target='_blank'>
        <EnvelopeSimple size={24} />
        <span>jacksonjlgravino@gmail.com</span>
      </a>
          
    </div>
  )
}