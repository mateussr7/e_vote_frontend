import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserSelector } from '../../store/user/selectors'
import { User } from '../../store/user/types'
import { addVote } from '../../store/vote/actions'

import './styles.scss'

interface CandidatesCardProps {
    candidates: User[]
    canVote: boolean
    electionId: number
}

const CandidatesCard = ({ candidates, canVote, electionId }: CandidatesCardProps) => {

    const dispatch = useDispatch()
    const { loggedUser } = useSelector(getUserSelector)

    const handleVoteClick = (candidateId: number) => {
        dispatch(addVote({ candidateId, electionId, userId: loggedUser?.id as number }))
    }

    return <div className="candidates-card">
        {candidates.map((candidate) => (
            <div className="candidate" key={JSON.stringify(candidate)}>
                <Typography>{candidate.name}</Typography>
                <Button variant="outlined" disabled={!canVote} onClick={() => handleVoteClick(candidate.id)}>VOTAR</Button>
            </div>
        ))}
    </div>
}

export default CandidatesCard