import React,{useEffect} from 'react'
import './Projects.css'
import Aos from "aos";
import 'aos/dist/aos.css'
import todogif from '../Resources/Photos/todo-gif.gif'
import datamanagergif from '../Resources/Photos/datamanager-gif.gif'
import personalportfoliogif from '../Resources/Photos/personalportfolio.gif'

function Projects() {
    useEffect(() => {
        Aos.init({duration:2000});
    }, [])
    return (
        <section className='projects-section'>
           <div className='main-projects'>
               <div className='main-projects-heading'>
                   <h1>Projects</h1>
               </div>
               <div className='main-projects-body'>
                   <div className='project-main'>
                       <div className='project-main-header'>
                            <div className='project-main-heading'>
                                To-Do Keeper
                            </div>
                            <div className='project-main-techUsed'>
                                <ul className='tech-list'>
                                    <li className='tech-item'>JavaScript</li>
                                    <li className='tech-item'>HTML</li>
                                    <li className='tech-item'>CSS</li>
                                </ul>
                            </div>
                       </div>
                       <div className='project-display'>
                            <img className='project-gif' src={todogif} alt='proj-gif'/>
                       </div>
                       <div className='project-features'>
                            <div className='project-feature-heading'>
                                Features:
                            </div>
                            <div className='project-feature-body'>
                                <ul>
                                    <li className='project-feature'>1) Edit, Delete, Complete your pending tasks.</li>
                                    <li className='project-feature'>2) Undo  a completed task.</li>
                                    <li className='project-feature'>3) Stores  your completed tasks even after exit</li>
                                </ul>
                            </div>
                       </div>
                       <div className='project-view'>
                       <a href='https://easy-todo-keeper.netlify.app/' target='blank'><div className='launch-project'>
                                    Launch Site
                           </div></a>
                           <a href='https://github.com/DebuG6290/ToDoApp' target='blank'><div className='project-code'>
                                    Source Code
                           </div></a>
                       </div>
                   </div>
                   <div className='project-main'>
                       <div className='project-main-header'>
                            <div className='project-main-heading'>
                                Data Manager (Online Excel)
                            </div>
                            <div className='project-main-techUsed'>
                                <ul className='tech-list'>
                                    <li className='tech-item'>ReactJS</li>
                                    <li className='tech-item'>JavaScript</li>
                                    <li className='tech-item'>HTML</li>
                                    <li className='tech-item'>CSS</li>
                                </ul>
                            </div>
                       </div>
                       <div className='project-display'>
                         <img className='project-gif' src={datamanagergif} alt='proj-gif'/>
                       </div>
                       <div className='project-features'>
                            <div className='project-feature-heading'>
                                Features:
                            </div>
                            <div className='project-feature-body'>
                                <ul>
                                    <li className='project-feature'>1) Display any Excel table or JSON table online.</li>
                                    <li className='project-feature'>2) Sort, Edit, Bulk Edit, Delete or Add a row to the table.</li>
                                    <li className='project-feature'>3) Compare different table values easily with Compare button.</li>
                                    <li className='project-feature'>4) Automatically detects and renders images inside the table.</li>
                                    <li className='project-feature'>5) Download the edited table data for further use.</li>
                                    <li className='project-feature'>6)Stores your edited data even after you exit the website.</li>
                                </ul>
                            </div>
                       </div>
                       <div className='project-view'>
                       <a href='https://easy-datamanager.netlify.app/' target='blank'><div className='launch-project'>
                               Launch Site
                           </div></a>
                           <a href='https://github.com/DebuG6290/datamanage' target='blank'><div className='project-code'>
                               Source Code
                           </div></a>
                       </div>
                   </div>
                   <div className='project-main'>
                       <div className='project-main-header'>
                            <div className='project-main-heading'>
                                Personal Portfolio
                            </div>
                            <div className='project-main-techUsed'>
                                <ul className='tech-list'>
                                    <li className='tech-item'>ReactJS</li>
                                    <li className='tech-item'>JavaScript</li>
                                    <li className='tech-item'>HTML</li>
                                    <li className='tech-item'>CSS</li>
                                </ul>
                            </div>
                       </div>
                       <div className='project-display'>
                         <img className='project-gif' src={personalportfoliogif} alt='proj-gif'/>
                       </div>
                       <div className='project-features'>
                            <div className='project-feature-heading'>
                                Features:
                            </div>
                            <div className='project-feature-body'>
                                <ul>
                                    <li className='project-feature'>1) Responsive Design.</li>
                                    <li className='project-feature'>2) Clean and easy to use UI.</li>
                                    {/* <li className='project-feature'>3) Compare different table values easily with Compare button.</li> */}
                                </ul>
                            </div>
                       </div>
                       <div className='project-view'>
                       <a href='https://devansh-goyal.netlify.app/' target='blank'><div className='launch-project'>
                               Launch Site
                           </div></a>
                           <a href='https://github.com/DebuG6290/Personal-Portfolio' target='blank'><div className='project-code'>
                               Source Code
                           </div></a>
                       </div>
                   </div>
               </div>
           </div>
        </section>
    )
}

export default Projects
