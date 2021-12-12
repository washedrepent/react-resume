const Experience = function (props) {
    const parseExperieceData = (experienceData) => {
        return experienceData.map((experience, index) => {
            return (
                <div className='experience-item' key={index}>
                    <h2 className='experience-company'>{experience.company}</h2>
                    <h3 className='experience-title'>{experience.title}</h3>
                    <p className='experience-location'>{experience.location}</p>
                    <p className='experience-dates'>
                        {experience.startDate} - {experience.endDate}
                    </p>
                </div>
            );
        });
    };
    return (
        <section>
            <h2>Experience</h2>
            <div className='experience'>
                {parseExperieceData(props.experienceData)}
            </div>
        </section>
    );
};

export default Experience;
