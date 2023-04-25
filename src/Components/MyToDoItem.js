import MyClassicButton from "./MyClassicButton";
import MyTextField from "./MyTextField";

const MyToDoItem = (props) => {
    return (
        <div>
            <li key={props.id} >
                Title: {props.value}

                <MyClassicButton text="📝" handleOnClick={props.handleOnClickEditModeButton} />
                <MyClassicButton text="❌" handleOnClick={props.handleOnClickDeleteButton} />
                <MyClassicButton text="🔍" handleOnClick={props.handleOnClickDetailsButton} />
            </li>

            {props.showEditMode === props.id ? (
                <div>
                    <MyTextField value={props.updatedText} handleChange={props.handleEditValueChange} />

                    <MyClassicButton text="✔️" handleOnClick={props.handleOnClickEditButton} />
                </div>
            ) : null}
            <hr></hr>
        </div>
    );
}

export default MyToDoItem;