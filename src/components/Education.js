const Education = function (props) {
    const parseEducationData = (educationData) => {
        return educationData.map((education, index) => {
            return (
                <div className='education-item' key={index}>
                    <h2 className='education-program'>{education.program}</h2>
                    <h2 className='education-school'>{education.school}</h2>
                    <footer>
                        <div className='education-section'>
                            <h3 className='education-bottom'>
                                {education.degree}
                            </h3>
                            <h3 className='education-bottom'>
                                {education.graduation}
                            </h3>
                        </div>
                    </footer>
                </div>
            );
        });
    };

    return (
        <section>
            <h2 className='section-header'>Education</h2>
            <div className='education'>
                {parseEducationData(props.educationData)}
            </div>
        </section>
    );
};

export default Education;
