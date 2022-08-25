export default function Button(props) {
    const {children, className="", ...rest} = props;

    return (
        <button 
            className={"ui-button"+className} 
            {...rest}
        >
            {children}
        </button>
        );
}