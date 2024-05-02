# NodeJS

<em>Research about Node.js and using the Feynman Technique, explain the concept like you are explaining it to a 5-year old.</em>

### What is NodeJS?

NodeJS is like an <b>amusement park</b>. In an amusement park, we can see different rides such as rollercoasters, bumper cars, ferris wheel, carousel, disney house, and more! You can compare these <b>rides and attractions</b> to applications. Do you know what software applications are? I'm pretty sure you have come acrossed it on your mobile phones or laptops. One that you can be familiar with is messenger, minecraft, tiktok and everything you've encountered on your devices. 

With that, we can say that without the amusement park there'd be <b>no place</b> where we put our rides and attractions. Similar without nodeJS, there would be no local server for the applications being built by developers. NodeJS is <b>as amazing as</b> an amusement park. It can also serve multiple applications at the same time while catering to many users, the same way an amusement park holds many enjoyable rides that multiple kids like you can sail on.

Next time you see a website loading, think of it as you being in <b>queue of an amusement ride</b> that is being prepared for you to hop on!


### Discussion 

1. Node.js is an open source server environment
2. Node.js is free
3. Node.js runs on various platforms
4. Node.js uses JavaScript on the server

#### Node.js = async programming
- A common task for a web server can be top open a file on the server and return the content to client
- Node.js Process:
  - Sends the task to the computer's file system.
  - Ready to handle the next request.
  - When the file system has opened and read the file, the server returns the content to the client.

Node.js eliminates the waiting, and simply continues with the next request. Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.

#### Accessing nodeJS

- Use your terminal. Enter node to access the node environment.
- We are following Read-Evaluate-Print-Loop (REPL) in the environment.
- Use up and down arrow keys to retrieve used commands.
- Entering .help will list some of the commands.
- We can create scripts on the folder and run it on REPL.
- We can also run the file on the terminal using <em>node "location"</em>.

### Detailed Discussion
- Export Modules that we create
- There are native modules as well
 - FS or Filesystem is a native module: used methods i.e readFile, writeFile, existsSync, mkdir,
 - Path Modules, join the paths
 - HTTP Modules
