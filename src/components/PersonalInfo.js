import ProfilePic from "./ProfilePic";

const PersonalInfo = function (props) {
    return (
        <>
            <ProfilePic />
            <div className='personal-info-text'>
                <h1>{props.name + " " + props.surname} </h1>
                <h2>{props.title}</h2>
                <h3>Age: {props.age}</h3>
                <p>{props.description}</p>
            </div>
        </>
    );
};

export default PersonalInfo;
