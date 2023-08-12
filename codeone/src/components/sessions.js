import React from 'react';

const Sessions = () =>{
    return(
        <div>
            <div className="my-5" id="description">
                <h4 className="text-2xl font-medium mb-5">Brief Description Of Workshop Sessions</h4>
                <h6  className="text-base font-bold">Session 1 (25 August): Introduction To HTML and CSS</h6>
                <p className="text-justify">In this session, you are going to learn how to work with the various building blocks (or elements) of a website including texts, links, images, input forms, and buttons. You would also learn how to customize their design. You would then learn how to build layouts and arrange all of the elements in their desired place.</p>
                <br/>
                <h6  className="text-base font-bold">Session 2 (01 September): Adding Functionalty With Javascript</h6>
                <p className="text-justify">What good is good looking UIs if they don't work? In this session, you are going to learn how to add functionality to your counter and to-do list and turn them into functioning web app using Javascript. For many of you this might be your first encounter with actual programming, don't worry though we will make sure you'll have a lot of fun.</p>
                <br/>
                <h6  className="text-base font-bold">Session 3 (08 September): Powering Up With React</h6>
                <p className="text-justify">In the final session, we will be looking into a javascript library called React, one of the most commonly used tools among professional web developers nowadays. We will learn how we could build our to-do list app using React. In the process, we will see how React make the jobs of web developers easier and allow them to built cooler and cooler web apps!</p>
                <br/>
                <h6  className="text-base font-bold">What You Will Learn (For The Geeks Among You Who Always Ask About Tech Stacks):</h6>
                <ul className="list-disc list-inside" id="material">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Tailwind CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Git</li>
                </ul>
            </div>
            <hr/>
        </div>
    )
}
export default Sessions