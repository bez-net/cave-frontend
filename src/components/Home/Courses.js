const Courses = () => {
    return ( 
        <section id="what-to-learn">
            <header className="section-header">
                <h1>What You will Learn.</h1>
            </header>
            <div className="container courses">
                <p>The program duration has 2 semesters of four (4) months each. Each of the semesters are schedule during the February or July sessions depending on the time of enrolment.</p>

                <h3>Course List</h3>
                <div className="course-cards">
                    {/* <!-- single card --> */}
                    <div className="course-card">
                        <h4>First Semester Courses</h4>
                        <ol>
                            <li>Systematic Theology I</li>
                            <li>Systematic Theology II</li>
                            <li>OT Survey</li>
                            <li>NT Survey</li>
                            <li>Church History</li>
                            <li>Hermeneutics</li>
                            <li>Homiletics</li>
                            <li>Research &amp; Writing</li>
                            <li>Apostolic Discipleship &amp; Mentoring</li>
                            <li>Introduction to Philosophy</li>
                        </ol>
                    </div>
                    {/* <!-- end of single card --> */}

                    {/* <!-- single card --> */}
                    <div className="course-card">
                        <h4>Second Semester Courses</h4>
                        <ol>
                            <li>Christian Ethics</li>
                            <li>Christian Family</li>
                            <li>Christian Apologetics</li>
                            <li>Introduction to Islam</li>
                            <li>Cross-Cultural Missions</li>
                            <li>Principles of Counselling</li>
                            <li>Children &amp; Youth Ministry</li>
                            <li>Healing &amp; Kingdom Finance</li>
                            <li>Leadership &amp; Administration</li>
                            <li>ATR &amp; World Religion</li>
                        </ol>
                    </div>
                    {/* <!-- end of single card --> */}
                </div>              
            </div>
        </section>

     );
}
 
export default Courses;