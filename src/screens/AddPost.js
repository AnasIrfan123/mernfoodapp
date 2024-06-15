import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddPost() {
    const navigate = useNavigate()


  return (
    <div>

         <div className="addpostHeader"> <h3>Add Post</h3></div>

                <div>

                    <div className="addpostfield">
                        <input type="text" placeholder='Enter Post Title' />
                    </div>

                    <div className="addpostfield">
                        <input type="text" placeholder='Enter Post Descript'/>
                    </div>

                    <div className="addpostfield">
                        <input type="number" placeholder='Enter Post Amount' />
                    </div>

                    <div class='addpostfield'>
                         <input type="file"  />
                        {/* <button>Select File</button> */}
                    </div>

                    <button className='addpostBtn' /* onClick={DataSubmit} */>Submit</button>
<br /><br />
                    <button className='addpostBtn' onClick={() => navigate(-1)}>Cencel</button>

                </div>

    </div>
  )
}
