
# Node.Js & it's Runtime

- What is ECMA Script ?
        
        . ECMA script is a `scripting language specification` on which Javascript is based.

- What is JavaScript?

        . Javascript is the implementation of the ECMA Script. It also includes other features that are not part of ECMA Script, like DOM manipulation.

- What is Node.Js?

        . Some smart people took out the V8 engine, added some backend things(filesystem reads) on top to create a new runtime.
        . JavaScript was never meant to be run in the backend eventually became popular choice in backend.
  
- What is bun ?

        . Other than the fact that the JavaScript is single thereaded, NodeJS is slow, Some smart people wanted to rewrite the Js runtime for the backend and they introduced BUN. So it is significantly faster than NodeJs.

# How to write Backend applications in JavaScript ?

- Node.Js       

        . Create ClI's
        . Create Video Player
        . Create Games
        . Create Http Servers

- What is an Http Server ?

        . HTTP - Hyper Text Transfer Protocol.
        . A Protocol that is defined for machines to communicate.
        . Specifiaclly for websites, it is the most common way for. your website's frontend to talk to it's backend.
        . http server :  Some code that follows the Http protocol which is able to communicate with the clients.

`Note : Http protocol lets communicate frontend with backend. But Http server is the one that exposes our backend to the world.`


## HTTP Protocol ?

        . It is the client throwing some informationat at a server, Server doing something with that information and server responding back with the result.

        . Think of them as the functions.
                . Arguments are something that the client sends.
                . Rather than calling a function using its name, the client uses a URL.
                . Rather than the function body, the server does something with the request.
                . Rather than the function returning the value, the server responds with some data.



- Things Cliet needs to worry about :

        . HTTP Cliet Side : 
                . Protocol [Http/Https]
                . Address [Url/IP/Port]
                . Route
                . Header/ Body/ Query Params
                . Method [Common methods are :  GET, POST, PUT, DELETE]

        . HTTP Sever Side :
                . Response Header
                . Response Body
                . Status code




