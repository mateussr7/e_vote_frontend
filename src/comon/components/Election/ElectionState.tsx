import { Typography } from '@mui/material'
import React, { FC } from 'react'

interface ElectionStateProps {
    started: boolean
    finished: boolean
}

const ElectionState: FC<ElectionStateProps> = ({ started, finished }: ElectionStateProps) => {
    if(!started && !finished)
        return <div className="standard-election">
            <Typography>Nova Eleição</Typography>
        </div>
    if(started && !finished)
        return <div className="started-election">
            <Typography>Eleição iniciada</Typography>
        </div>
    if(started && finished)
        return <div className="finished-election">
            <Typography>Eleição finalizada</Typography>
        </div>
    
    return null
}

export default ElectionState