import React, {useState} from 'react'
import {useSpeechSynthesis} from 'react-speech-kit'

const Speech = () => {

    const [value, setvalue] = useState('')
    const {speak} = useSpeechSynthesis()

    return (
        <div>
            <div className="Speech">
                <div className="group">
                    <textarea rows="10" onChange={(e)=> setvalue(e.target.value)} ></textarea>
                </div>
                <div className="group">
                    <button onClick={ ()=> speak({text:value}) }>Speech</button>
                </div>
            </div>
        </div>
    )
}

export default Speech
