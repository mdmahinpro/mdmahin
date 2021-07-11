import React from 'react'
import Blogs from '../Blogs/Blogs'
import Contact from '../Contact/Contact'
import Profile from '../Profile/Profile'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'

export default function AllinOne() {
    return (
        <div className="home">
            <Profile></Profile>
            <Skills></Skills>
            <Projects></Projects>
            <Blogs></Blogs>
            <Contact></Contact>
        </div>
    )
}
