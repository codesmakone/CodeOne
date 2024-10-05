import React from 'react';

const Content = () =>{
    return(
        <div>
            <div className="my-5" id="content">
                <h4 className="text-2xl font-semibold mb-1">Table Of Contents</h4>
                <ul className="list-disc my-3 ml-6">
                    <li>
                      <a href="#what-is" className="text-blue-400 font-semibold">
                        What Is CodeOne?
                      </a>
                    </li>
                    <li>
                      <a href="#workshop" className="text-blue-400 font-semibold">
                        The CodeOne Workshop 2024
                      </a>
                    </li>
                    <li>
                      <a href="#description" className="text-blue-400 font-semibold">
                        Brief Descriptions Of Workshop Sessions
                      </a>
                    </li>
                    {/* <li>
                      <a href="#material" className="text-blue-400 font-semibold">
                        Workshop Materials
                      </a>
                    </li> */}
                    <li>
                      <a href="#register" className="text-blue-400 font-semibold">
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