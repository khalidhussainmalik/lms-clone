import React from 'react';
import '../dashboard/Dashboard.css';
// import ProgressBar from 'react-bootstrap/ProgressBar';
import Recording from '../Recording';
import Assignment from '../Assignment';
import Progress from '../Progress';
import CardSlider from '../CardSlider';
import CourseSyllabus from '../CourseSyllabus';

function Dashboard() {
    const Dashboard = React.useRef(null)
    const activeDashboard = React.useRef(null)
    const Recordings = React.useRef(null)
    const activeRec = React.useRef(null)
    const Assignments = React.useRef(null)
    const activeAssignment = React.useRef(null)
    const Syllabus = React.useRef(null)
    const activeSyllabus = React.useRef(null)
    function dashboard() {
        Dashboard.current.classList.remove('d-none')
        activeDashboard.current.classList.add('active')
        activeRec.current.classList.remove('active')
        activeAssignment.current.classList.remove('active')
        activeSyllabus.current.classList.remove('active')
        Recordings.current.classList.add('d-none')
        Assignments.current.classList.add('d-none')
        Syllabus.current.classList.add('d-none')
    }
    function recordings() {
        Dashboard.current.classList.add('d-none')
        activeDashboard.current.classList.remove('active')
        activeRec.current.classList.add('active')
        activeAssignment.current.classList.remove('active')
        activeSyllabus.current.classList.remove('active')
        Recordings.current.classList.remove('d-none')
        Assignments.current.classList.add('d-none')
        Syllabus.current.classList.add('d-none')
    }
    function assignments() {
        Dashboard.current.classList.add('d-none')
        activeDashboard.current.classList.remove('active')
        activeRec.current.classList.remove('active')
        activeAssignment.current.classList.add('active')
        activeSyllabus.current.classList.remove('active')
        Recordings.current.classList.add('d-none')
        Assignments.current.classList.remove('d-none')
        Syllabus.current.classList.add('d-none')

    }
    function syllabus() {
        Dashboard.current.classList.add('d-none')
        activeDashboard.current.classList.remove('active')
        activeRec.current.classList.remove('active')
        activeAssignment.current.classList.remove('active')
        activeSyllabus.current.classList.add('active')
        Recordings.current.classList.add('d-none')
        Assignments.current.classList.add('d-none')
        Syllabus.current.classList.remove('d-none')
    }
    return (
        <>
            <div className='container-main'>
                <h1>8 Weeks Flutter Program with Usama Sarwar</h1>
            </div>
            <div className='container-2'>
                <div className='dashboard'>
                    <ul>
                        <li><a ref={activeDashboard} onClick={dashboard}>Dashboard</a></li>
                        <li><a ref={activeRec} onClick={recordings}>Recordings</a></li>
                        <li><a ref={activeAssignment} onClick={assignments}>Assignments</a></li>
                        <li><a ref={activeSyllabus} onClick={syllabus}>Course Syllabus</a></li>
                    </ul>
                    <div className='' ref={Dashboard}>
                        <div className='lec-cards'>
                            <h6>YOUR LIVE LECTURES</h6>
                            <div className='cards'>
                                <CardSlider/>

                            </div>
                            <div className='your-prog'>
                                <Progress value={41} max={100}/>
                            </div>
                            <div className='stats'>
                                <h6>YOUR STATS</h6>
                                <div id='stats'>
                                    <div id='user'><i class="fa-solid fa-user-group"></i></div>
                                    <div className='st'>
                                        <div><h6>Your Attendance</h6></div>
                                        <div><p><span>0</span> out of 16</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='d-none' ref={Recordings}>
                        <div>
                            <Recording/>
                        </div>
                    </div>
                    {/* Assignment */}
                    <div className='d-none' ref={Assignments}>
                        <Assignment/>
                    </div>
                    <div className='d-none' ref={Syllabus}><CourseSyllabus/></div>
                </div>
            </div>
        </>

    )
}

export default Dashboard