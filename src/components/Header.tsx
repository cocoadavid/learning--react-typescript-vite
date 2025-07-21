type HeaderProps = {
    children: string
}

const Header = (props: HeaderProps) => {
    return ( 
        <h2>{props.children}</h2>
     );
}
 
export default Header;