import React from 'react';

const Content = () =>{
    return(
        <div>
            <div className="my-5" id="content">
                <h4 className="text-2xl font-medium mb-1">Table Of Content</h4>
                <ul className="list-disc my-3 ml-6">
                    <li>
                      <a href="#what-is" className="text-blue-400 font-medium">
                        What Is CODEONE?
                      </a>
                    </li>
                    <li>
                      <a href="#workshop" className="text-blue-400 font-medium">
                        The CODEONE Workshop 2022
                      </a>
                    </li>
                    <li>
                      <a href="#description" className="text-blue-400 font-medium">
                        Brief Description Of Workshop Sessions
                      </a>
                    </li>
                    <li>
                      <a href="#material" className="text-blue-400 font-medium">
                        Workshop Materials
                      </a>
                    </li>
                    <li>
                      <a href="#register" className="text-blue-400 font-medium">
                        Register
                      </a>
                    </li>
                </ul>
            </div>
            <div>
              <hr/>
            </div>
        </div>
    )
}
export default Content