export default function Link(props) {
    const {children, className="", ...rest} = props;
    
    return (
        <a className={"ui-link"+className} {...rest}>
                {children}
        </a>
        );

}