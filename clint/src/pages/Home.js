import React from 'react'
import TaskList from '../components/TaskList/TaskList'

function Home() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <TaskList />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12"></div>
                </div>
            </div>
        </>
    )
}

export default Home
