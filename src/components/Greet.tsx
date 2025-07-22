type GreetProps = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}

const Greet = ({name, messageCount, isLoggedIn}: GreetProps) => {
    return (
        <div>
            <h2>
                {isLoggedIn
                    ? `Welcome ${name}, you have ${messageCount || 0} unread messages!`
                    : `Welcome Guest`}
            </h2>
        </div>
    );
}

export default Greet;