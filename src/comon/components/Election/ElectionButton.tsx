import Button from '@mui/material/Button'
import React from 'react'
import { Election } from '../../store/election/types'

interface ElectionButtonProps { 
    election: Election
    startElection: () => void
    finishElection: () => void
    results: () => void
}

const ElectionButton = ({ election, startElection, finishElection, results }: ElectionButtonProps) => {
    if (election.startDate === null && election.endDate === null){
        return <Button 
            variant="outlined" 
            color="inherit"  
            className="button" 
            onClick={startElection}
        >
            Iniciar Votação
        </Button> 
    } else if (election.startDate !== null && election.endDate === null) {
        return <Button 
            variant="outlined" 
            color="inherit"  
            className="button" 
            onClick={finishElection}
        >
            Encerrar votação
        </Button> 
    } else if (election.startDate !== null && election.endDate !== null) {
        return <Button 
            variant="outlined" 
            color="inherit"  
            className="button" 
            onClick={results}
        >
            Ver resultado
        </Button> 
    }

    return <></>
}

export default ElectionButton