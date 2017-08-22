import React, { omponent } from 'react'
import Header from './components/Header'
import ContentBox from './components/ContentBox'
import ConsultantList from './components/ConsultantList'
import styles from './styles.scss'

import avatar1 from 'images/avatar-2@2x.png'
import avatar2 from 'images/avatar-3@2x.png'
import avatar3 from 'images/avatar-4@2x.png'

const consultants = [
  {
    avatar: avatar1,
    name: "Jane Kim",
    title: "College Apps Consultant; Mentor"
  },
  {
    avatar: avatar2,
    name: "John Gonzalez",
    title: "College Apps Program Manager"
  },
  {
    avatar: avatar3,
    name: "Diana Herrera",
    title: "Program Consultant"
  }
]
  
export default class App extends React.Component {
  renderPageContent() {
    return (
      <section className={ styles.pageContent }>
        <div className={ styles.inner }>
          <ContentBox>
            <h3 className={ styles.title }>Choose Consultant</h3>
            <ConsultantList consultants={consultants} />
          </ContentBox>
          <div className={ styles.buttonsGroup }>
            <a className={ styles.cancelButton }>Cancel</a>
            <a className={ styles.nextButton }>Next</a>
          </div>
        </div>
      </section>
    )
  }
  
  render() {    
    return (
      <div>
        <Header />
        { this.renderPageContent() }
      </div>
    )
  }
}