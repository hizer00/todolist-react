import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

import components from '../../components/index'

import wave from '../../assets/wave.svg'
import timeManagmentIllustration from '../../assets/illustrations/Time-management.svg'
import listIllustration from '../../assets/illustrations/Core-list.svg'
import Footer from '../../layout/Footer'

function Home() {
  return (
    <>
      <main>
        <div className='hero'>

          <h1 className='main-header'>Organize your work, your life.</h1>
          <p className='main-paragraph'>An app designed to help users organize and manage their tasks, appointments, and events in a single location.</p>
          <Link to="/app/new">
            <components.ButtonGeneric content='Get started!' />
          </Link>

        </div>
      </main>

      <section>

        <img src={wave} alt='wave' className='wave' />

        <div className='features'>

          <components.Features
          title='Add your tasks. Organize your life. Achieve more every day.' 
          description="Add tasks like 'Read work emails every day at 10am to make your to-do list in seconds using TODOLIST's natural language recognition and recurring dates." 
          image={timeManagmentIllustration} 
          />

          <components.Features
          title="Get the mental clarity you've been craving."
          description="Use it to help you achieve a clear and focused mindset. If you need help organizing your thoughts and tasks to be more productive and efficient, this tool can assist you. By using it, you can regain control of your mental state and achieve a sense of clarity and purpose."
          image={listIllustration}
          />

        </div>

      </section>
      {/* <Footer backgroundWhite/> */}
    </>
  )
}

export default Home