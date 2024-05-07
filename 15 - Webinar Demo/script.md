# Creating a Timer Using Javascript

Good day, OneCoders! I’m Kim, your speaker for today’s webinar on <b>Coding Class for Beginners: Creating a Timer Using Javascript</b>. Aside from Javascript, we are also going to use HTML and CSS to build our timer. 

As we progress, feel free to raise your hand, send some reactions, ask questions via chat, and you can also use your mic if there is something you want to bring up. Without further ado, let's start. 

So let me share my screen with you. If you can see my screen, kindly react with a thumbs up. Otherwise, please notify me through voice or chat if there are problems whether it's showing a <b>blank screen</b>, it's displaying fonts that are <b>barely readable</b>, or any other concerns. Thank you for the reactions.

### Use of CodePen

For this session, we are going to use CodePen via this link. So <b>what is CodePen</b>? CodePen allows you to write code directly in the browser. As you write, you can instantly see the results. It’s like having a virtual factory of the object you desire to make. 

For us to better understand what we meant by this, let us click on <b>Start Coding</b>.

### Inside CodePen

Okay, we are here. What you're seeing on your screen is the <b>workstation</b> of CodePen. This is our virtual factory. Inside this page, we have HTML, CSS, JS, and a blank screen

Before discussing all these segments of CodePen, I want you to look around and find the nearest object from you... or probably your favorite belonging inside your room. Please send your answers in the chatbox. <b>Great!</b>

Impromptu on the CSS Connections:

1. HTML - Parts, Ingredients, Elements of the Object
2. CSS - Size, Shape, Color, Orientation of the Elements
3. JS - Functionalities, Logic, Features of the Object

<br>

## Creating a Timer

For this episode, we are going to <b>create a timer</b>. To see the final output, I'm going to send the codes that can placed inside our HTML, CSS, and Javascript text editors. I put in the chat a <b>link</b> where you can access the code for this session.

- https://snipper.io/s/-NwxA7zN5mjc6A2FAxvJ

Let us put our codes in CodePen for us to see what to expect in this session. Displayed on the live server is our <b>timer</b> in an organized layout and aesthetic design. If we try to start the timer, it would prompt an error since our input for the value is <b>currently empty</b>.

### Testing the Timer

Let's try entering some number and <b>click on</b> the start button. We notice below that the timer is <b>ticking</b> like a countdown that will only stop when reaching 0. We can also observe that the label of the button changed from start to restart, and the color changed from blue to yellow, <b>warning</b> us that it would stop and restart the timer. 

Note that the input must be within <b>1 to 60</b> as specificied in the instructions. Let's try entering an out of range value, we can see that it would <b>prompt an error</b>. Here we can see that it stopped when it reached 0. We can try another input and <b>restart</b> it with another input. We can also reset it to <b>completely</b> stop the timer.

<br>

## JS Text Editor

Since this webinar episode is focused on Javascript, we will start first with it and break down each line of the <b>JS code</b>. If we have enough time, we may also inspect HTML and CSS line by line. With no more delays, let us clear our <b>JS text editor</b> so that we can start building it up gradually.

```
// Step1. Get Necessary Elements
// Step2. Add Listener for the Buttons when Clicked
// Step3. Create a Function that Updates our Time element
// Step4. Create the Reset Button Function
// Step5. Create a Function that Resolves every 1 Second
// Step6. Create the Countdown Function
// Step7. Create the Start/Restart Button Function
```

Unfortunately, it's coming to an end. But...

### Before we wrap our Session

Before we wrap our session, I’m thrilled to have all of you here today, diving into the exciting world of <b>programming and development</b>. Whether you’re a seasoned coder or just starting out, we’ve got something special for you.

Don't forget to check us out, <b>OneCodeCamp</b>, and explore the services we offer. You can follow us on YouTube, Subscribe on our Mailing List, Join our Discord Community, or Visit our Official Website <b> triple double yu dot One Code Camp dot com</b> to see the latest updates.

Remember, following us is like adding extra RAM to your coding journey—it boosts your experience and keeps you <b>ahead of the curve</b>. So, let’s build, debug, and create virtual objects together!

YEAH THATS RIGHT. Dont forget to follow One Code Camp.


### Review of this Episode

Now for the summary of this episode, we were able to create <b>Create a Timer Using Javascript</b> by familiarizing ourselves with...
- <b>ONE</b> : getting html elements using the document methods getElementById or querySelector
- <b>TWO</b> : adding event listeners to buttons so that when clicked, it performs the desired actions we want to happen
- <b>THREE</b> : updating our view by changing the elements innerHTML to display time, and as well change labels and colors of buttons
- <b>LASTLY, FOUR</b> : utilizing async programming by familiarizing ourselves with promises and async function so that the timer is asynchronously counting down while waiting for other user interactions, such as text input and button clicks
