export default function ServicesPage() {


    async function fetchServices() {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const body = await res.json();
        return body.title
    }

    return <main>
        <h1>Services Page</h1>
        <br />
        {fetchServices()}
    </main>
}