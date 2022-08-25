export default function Container(props) {
    const {children, className="", ...rest} = props;

    return (
        <div 
            className={"ui-container"+className}
            {...rest}
        >
            {children}
        </div>
    );
}