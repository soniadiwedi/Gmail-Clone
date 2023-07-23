import React from 'react'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

export const Main = () => {
  return (
    <div>
        <Header/>
        <Sidebar/>
        <div>display mails</div>
    </div>
  )
}
