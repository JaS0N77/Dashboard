export const LigthRedButton = (props) => {
    return (
        <button style={{backgroundColor: "lightcoral", color: "white"}}>{props.text}</button>
    );
};

export const WhiteButton = (props) => {
    return (
        <button style={{backgroundColor: "white", color: "black"}}>{props.text}</button>
    );
};