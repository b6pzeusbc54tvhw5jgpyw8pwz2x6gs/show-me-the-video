import React, { useContext } from 'react'

import { appContext } from '../context'
import CardBox from '../component/CardBox'
import Footer from '../component/Footer'
import Header from '../component/Header'
import { Page } from '../component/styled'


const Index = props => {
  const { showLayout, toggleShowLayout } = useContext(appContext)
  return (
    <Page>
      <Header />
      <CardBox/>
      <Footer />
    </Page>
  )
}

export default Index
