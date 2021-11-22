import { useState, useEffect } from "react";
import DogViewer from "../components/DogViewer";
import NewDogButton from "../components/NewDogButton";
// dog container is the parent - can only modify the state in here 
const DogContainer = () => {

    const [dog, setDog] = useState(null); 
// const [dog, setDog] = [null, updateFunction]
// dog = null
// setDog = updateFunction 
// ^ this is what the above line is doing 
    // this is destructuring
    // useState gives as an array: initial value, function to update it
    // destructuring assigns this array's values to the array thing on the left of = 
    // destructuring an array 
    // pass in initial value when call it, pass in function to update it 
    // much cleaner than having a constructor 

   // useEffect(updateDogData, []); [moved to lower line for initialisation purposes]
    // the empty array is what will trigger the fetch (i think)? but every useEffect call will always fire after your components have mounted 
    // so it's like the componentDidMount functionality 
    // it's optional - don't need it - but if we don't, the call will trigger with every state update, regardless of whether it's relevant 
    // can put in the empty brackets what will trigger the fetch i think - only has it load up once 
    // empty array stops you having an infinite loop 

const updateDogData = () => { 
    console.log("updating dog data");
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => setDog(data))
}

useEffect(updateDogData, []);

    // need to tell container that it needs to wait to render 
    // conditional rendering - render if some condition is met 
    // use of ternary below: 

    return (
        dog ? 
        <div>
            <DogViewer dog={dog}/>
            <NewDogButton onDogButtonClicked={updateDogData} />
        </div>
        : 
        <p>Loading dog photo...</p> // once we've done first render, component is mounted, then useEffect is triggered - gets data from api, gets json, set the State - and so re-render
        // then it loops, and since we have a dog now, it can pass the dog prop 
    )
}

export default DogContainer;