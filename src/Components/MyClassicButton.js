import "../App.css";

const MyClassicButton = (props) => {
    return (
        <button className="button" onClick={props.handleOnClick}>
            {props.text}
        </button>
    );
}

export default MyClassicButton;