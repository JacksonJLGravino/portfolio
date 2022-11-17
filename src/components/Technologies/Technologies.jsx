import { InfoTech } from './InfoTech'
import './Technologies.css'

export function Technologies() {
  return (
    <div className='technologies-infos'>
      <h3>Tecnologias:</h3>
      <div className='grup-tech'>
        <InfoTech technologies='HTML'/>
        <InfoTech technologies='CSS'/>
        <InfoTech technologies='JAVASCRIPT'/>
        <InfoTech technologies='GIT'/>
        <InfoTech technologies='GITHUB'/>
      </div>
      <h3>Estudando:</h3>
      <div className='grup-tech'>
      
      <InfoTech technologies='REACT JS'/>
      <InfoTech technologies='REACT NATIVE'/>
      <InfoTech technologies='EJS'/>
      <InfoTech technologies='NODE JS'/>
      </div>
    </div>
  )
}