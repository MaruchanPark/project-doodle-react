export default function Input(props) {
    const {type="text", className="", ...rest} = props;

    return (
        <input 
            className={"ui-textfield"+className}
            type={type}
            {...rest}
        />
    );

}