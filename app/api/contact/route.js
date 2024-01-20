// Next.js supports the following HTTP methods:


// 1. GET:
// 2. POST: Submits data to the server to create a new resource.
// 3. PUT: Updates or replaces an existing resource on the server.
// 4. Patch: Partially updates an existing resource on the server
// 5. DELETE: Removes a specific resource from the server.
// 6. HEAD: Retrieves the headers of a resource without fecthing its body.
// 7. OPTIONS: Retrieves the supported HTTP methods and other communication options for a resource.
// import { NextRequest, NextResponse } from "next/server";
import {transporter, mailOptions} from "../../../config/nodemailer"

const   CONTACT_MESSAGE_FIELDS = {
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message"
}



const generateEmailContent = (data) => {
    const stringData = Object.entries(data).reduce((str,[key, val])=>
        str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val}\n \n`, "");
    
        const htmlData = Object.entries(data).reduce((str, [key, val]) =>
        str += `<h1 class="form-heading">${CONTACT_MESSAGE_FIELDS[key]}</h1><p class="form-answer">${val}</p>`, "");
      
    
    return {
        text:stringData,
        html: `<div>${htmlData}</div>`,
    }

};

export async function GET(request) {

    const users = [
        { id: 1, name: 'John' }
    ];
    console.log("Hello GET");

    return new Response(JSON.stringify(users));
}
export async function POST(request) {

    // const users = [
    //     { id: 1, name: 'John' }
    // ];
    const body = await request.json();
    // request.cookies.get('')
    if (!body.name || !body.email || !body.message || !body.subject) {
        // console.log("Error");
        
        return new Response.error;

    }

    try {
        await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(body),
        subject: body.subject,

    });
    return new Response(JSON.stringify(body));
    
    } catch (error) {
        // console.log(error);
    
        return new Response("Error");
        
    }
    // console.log(body);
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