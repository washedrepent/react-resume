const Skill = (props) => {
    const colors = [
        "#E91E63",
        "#9C27B0",
        "#673AB7",
        "#3F51B5",
        "#2196F3",
        "#03A9F4",
        "#00BCD4",
        "#009688",
        "#4CAF50",
        "#8BC34A",
        "#CDDC39",
        "#42403c",
        "#FFC107",
        "#FF9800",
        "#FF5722",
        "#795548",
        "#9E9E9E",
        "#607D8B",
        "#000000",
    ];

    const calculateStyle = (percent) => {
        const style = {
            width: percent + "%",
            backgroundColor: colors[props.num],
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
        };

        if (percent === 100) {
            style.borderTopRightRadius = 10;
            style.borderBottomRightRadius = 10;
            return style;
        } else {
            return style;
        }
    };
    return (
        <div className='skill' key={props.title}>
            <h3 className='skill-title'>{props.title}</h3>

            <div className='skill-bar'>
                <h3 className='skill-percent'>{props.percentage}%</h3>
                <div
                    className='skill-bar-fill'
                    style={calculateStyle(props.percentage)}
                ></div>
            </div>
        </div>
    );
};

export default Skill;
