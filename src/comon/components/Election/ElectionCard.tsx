import { FC, useState, useMemo } from "react"
import { Typography, IconButton } from "@mui/material"
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined'
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined'
import { Election } from "../../store/election/types"
import { getUserSelector } from "../../store/user/selectors"

import './styles.scss'
import ElectionState from "./ElectionState"
import { useDispatch, useSelector } from "react-redux"
import CandidatesCard from "./CandidatesCard"
import ElectionButton from "./ElectionButton"
import { fetchElections, finishElection, getElectionResult, startElection } from "../../store/election/actions"
import { useNavigate } from "react-router-dom"

interface ElectionProps {
    election: Election
}

const ElectionCard: FC<ElectionProps> = ({ election }: ElectionProps) => {

    const { loggedUser } = useSelector(getUserSelector)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [expanded, setExpanded] = useState(false)
    const started = useMemo(
        () => {
            return election.startDate !== null
        }
    , [election])

    const finished = useMemo(
        () => {
            return election.endDate !== null
        }
    , [election])

    const handleIconButtonClick = () => {
        setExpanded(!expanded)
    }

    const handleStartElectionButtonClick = async () => {
        await dispatch(startElection(election.id as number))
        dispatch(fetchElections())
    }

    const handleEndElectionButtonClick = async () => {
        await dispatch(finishElection(election.id as number))
        dispatch(fetchElections())
    }

    const handleGetElectionResults = async () => {
        await dispatch(getElectionResult(election.id as number))
        await dispatch(fetchElections())
        navigate(`/results?id=${election.id}`)
    }

    const canVote = useMemo(() => {
        return election.startDate !== null && election.endDate === null
    }, [election]) 

    return expanded ? (
        <div className="expanded-election-card">
            <div className="expanded-election-card-title">
                <Typography>{election.name}</Typography>
                <IconButton onClick={handleIconButtonClick}><ArrowRightOutlinedIcon /></IconButton>
            </div>

            <div className="line-box">
                <Typography>Cargo: {election.position.name}</Typography>
                {loggedUser?.isAdmin && (
                    <ElectionButton 
                        election={election} 
                        startElection={handleStartElectionButtonClick} 
                        finishElection={handleEndElectionButtonClick}
                        results={handleGetElectionResults}
                    />
                )}
            </div>

            <CandidatesCard candidates={election.candidates} canVote={canVote} electionId={election.id as number} />

            <ElectionState started={started} finished={finished} />
        </div>
    )
    : (
        <div className="colapsed-election-card">
            <Typography>{election.name}</Typography>
            <IconButton onClick={handleIconButtonClick}><ArrowDropDownOutlinedIcon /></IconButton>
        </div>
    )
}

export default ElectionCard