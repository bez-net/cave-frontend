const Courses = () => {
    return ( 
        <section id="what-to-learn">
            <header className="section-header">
                <h1>What You will Learn.</h1>
            </header>
            <div className="container courses">
                <p>The program is divided into two semesters. The First Semester is focused 
on the understanding of fundamental Biblical Truth and the development of
spiritual stamina for Christian living in a fallen world. The second semester
is focused the development of contemporary strategies for effective ministry
within various context.</p>

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