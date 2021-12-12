import Skill from "./Skill";

const Skills = function (props) {
    let num = -1;
    const parsedSkills = props.skillsData.map((skill, index) => {
        num++;
        return <Skill key={index} num={num} {...skill} />;
    });

    return (
        <section>
            <h2>Skills</h2>
            <div className='skills'>{parsedSkills}</div>
        </section>
    );
};

export default Skills;
