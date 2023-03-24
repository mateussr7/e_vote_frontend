import Typography from '@mui/material/Typography'
import React from 'react'
import { useSelector } from 'react-redux'
import { getElectionsSelector } from '../../store/election/selectors'

import './styles.scss'

const Results = () => {

    const { result } = useSelector(getElectionsSelector)

    return <div className="result-frame">
        <Typography variant='h3'>Resultado da eleição:</Typography>
        <div className="result-box">
            {Object.entries(result).map(([key, value]) => (
                <div key={key} className="result-card">
                    <Typography>{key}</Typography>
                    <Typography>Votos: {value}</Typography>
                </div>
            ))}
        </div>
    </div>
}

export default Results