import './ProfileInfo.css'
import { List, X } from 'phosphor-react'
import { Links } from '../Links/Links'
import { Technologies } from '../Technologies/Technologies'
import { Education } from '../Education/Education'
import { useState } from 'react'
import { ProjectHeader } from '../ProjectHeader/ProjectHeader'

export function ProfileInfo({menuVisible, onClick}) {
  let visible = menuVisible
  return (
    <div className='profile-infos'>
      <img src='https://avatars.githubusercontent.com/u/103889584?v=4' alt="" />
      <div>
        <p className='name'>Jackson Gravino</p>
        <p className='occupation'>Full Stack</p>
      </div>

      {visible ? 
        <div className='list'  >
          <X size={36} onClick={onClick}/>
        </div>

      : <div className='list'>
          <List size={36} onClick={onClick} />
        </div>
    }

    </div>
  )
}