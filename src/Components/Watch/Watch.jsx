import React from 'react'
import './Watch.scss'
import { ArrowBackIosOutlined} from '@material-ui/icons'
import Video1 from '../../images/video1.MP4'

export default function Watch() {
    return (
        <div className='watch'>
            <div className='back'>
                <ArrowBackIosOutlined/>
                Home
            </div>
            <video className='video' autoPlay progress controls src={Video1}/>
            
        </div>
    )
}
