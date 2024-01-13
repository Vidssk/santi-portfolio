// Next.js supports the following HTTP methods:


// 1. GET:
// 2. POST: Submits data to the server to create a new resource.
// 3. PUT: Updates or replaces an existing resource on the server.
// 4. Patch: Partially updates an existing resource on the server
// 5. DELETE: Removes a specific resource from the server.
// 6. HEAD: Retrieves the headers of a resource without fecthing its body.
// 7. OPTIONS: Retrieves the supported HTTP methods and other communication options for a resource.

export async function GET(request) {

    const users = [
        { id: 1, name: 'John' }
    ];

    return new Response(JSON.stringify(users));
}
// const handler = (req, res) => {
//     if(req.method == "POST"){
//         const data = req.body;
//         if(!values.name || !values.email || !values.message || !values.subject)
//         {
//             res.status(400).json({ message: "Bad request"});

//         }
//     }
//     // console.log(req.body);
//     res.status(400).json({ message: "Bad request"});
// }
// export default handler;