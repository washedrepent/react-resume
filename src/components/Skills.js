import Skill from "./Skill";

const Skills = function (props) {
    let num = -1;
    const parsedSkills = props.skillsData.map((skill) => {
        num++;
        return <Skill num={num} key={props.title} {...skill} />;
    });

    return (
        <>
            <h2>Skills</h2>
            <div className='skills'>{parsedSkills}</div>
        </>
    );
};

export default Skills;
