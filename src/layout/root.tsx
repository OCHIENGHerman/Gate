export default function Root() {
    return (
        <>
        <div className="">
            <h1>React Router Contacts</h1>
        </div>
        <div>
            <form role="search">
                <input 
                aria-label="search contacts"
                placeholder="search"
                type="search"
                name="q"
                />
                <div
                    aria-live="polite">
                </div>
            </form>
            <form method="post">
                <button type="submit">New</button>
            </form>
        </div>
        <nav>
            <ul>
                <li>
                    <a href={`/contacts/1`}>Your Name</a>
                </li>
                <li>
                    <a href={`/contact/2`}>Your Friend</a>
                </li>
            </ul>
        </nav>
        </>
    );
}