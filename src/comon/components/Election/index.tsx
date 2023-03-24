import { Button, FormControl, InputLabel, TextField, Typography } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import Modal from '@mui/material/Modal'
import React, { useEffect, useState }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createElection, fetchElections } from '../../store/election/actions'
import { getElectionsSelector } from '../../store/election/selectors'
import { fetchPositions } from '../../store/position/actions'
import { getPositionsSelector } from '../../store/position/selectors'
import { Position } from '../../store/position/types'
import ElectionCard from './ElectionCard'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { getCandidatesSelector } from '../../store/candidate/selectors'
import { User } from '../../store/user/types'
import { getCandidatesStarted } from '../../store/candidate/actions'
import CandidatesCheckbox from './CandidatesCheckbox'

import './styles.scss'
import { Election } from '../../store/election/types'
import { getUserSelector } from '../../store/user/selectors'

const Elections = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchElections())
        dispatch(fetchPositions())
        dispatch(getCandidatesStarted())
    }, [dispatch])

    const { elections } = useSelector(getElectionsSelector)
    const { positions } = useSelector(getPositionsSelector)
    const { candidates } = useSelector(getCandidatesSelector)
    const { loggedUser } = useSelector(getUserSelector)

    useEffect(() => {
        console.log(elections)
    }, [elections])


    const [openModal, setOpenModal] = useState<boolean>(false)
    const [name, setName] = useState<string>("")
    const [position, setPosition] = useState<Position | null>(null)
    const [selectedCandidates, setSelectedCandidates] = useState<User[]>([])

    const handleNameChange = (value: string) => {
        setName(value)
    }

    const handlePositionChange = (event: SelectChangeEvent<Position | null>) => {
        setPosition(event.target.value as Position)
    }

    const handleCandidatesChange = (candidate: User) => {
        if(selectedCandidates.indexOf(candidate) !== -1){
            const newSelected: User[] = selectedCandidates.filter((el) => el.id !== candidate.id)
            setSelectedCandidates([...newSelected])
        } else {
            setSelectedCandidates(selecteds => [...selecteds, candidate])
        }
    }

    const handleOpenModalNewElection = () => {
        setOpenModal(!openModal)
    }

    const clearNewElectionData = () => {
        setName("")
        setPosition(null)
        setSelectedCandidates([])
    }

    const handleNewElectionClick = () => {
        const newElection: Election = {
            name, 
            position: position as Position,
            candidates: selectedCandidates,
            startDate: null,
            endDate: null
        }
        dispatch(createElection(newElection))
        setOpenModal(false)
        clearNewElectionData()
    }

    return <div className="election-main-frame">
        {
            elections.map(
                election => <ElectionCard 
                    key={JSON.stringify(election)} 
                    election={election} 
                />
            )
        }
        {loggedUser?.isAdmin && (
            <div className="new-election-button-container">
                <Button variant="contained" color="inherit" onClick={handleOpenModalNewElection}>
                    Nova Eleição
                </Button>
            </div>
        )}

        <Modal 
            open={openModal}
            onClose={handleOpenModalNewElection}
            aria-labelledby="Nova Eleição"
        >
            <div className="modal">
                <Typography variant="h2">Nova Eleição</Typography>
                <div className="modal-line">
                    <TextField
                        value={name} 
                        placeholder="Nome da eleição" 
                        onChange={(e) => handleNameChange(e.target.value as string)} 
                        fullWidth
                    />
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Cargo</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            value={position}
                            defaultValue={positions[0]}
                            onChange={handlePositionChange}
                        >
                            {
                                Array.isArray(positions) 
                                    && positions.map(
                                        (position) => (
                                            <MenuItem 
                                                key={JSON.stringify(position)} 
                                                value={position.id}
                                            >
                                                {position.name}
                                            </MenuItem>
                                        )
                                    )
                            }
                        </Select>
                    </FormControl>
                </div>
                <div className="candidates-checkboxes">
                    <Typography variant='h4'>Candidatos:</Typography>
                    <CandidatesCheckbox 
                        candidates={candidates}
                        selectedCandidates={selectedCandidates}
                        onChange={handleCandidatesChange}
                    />
                </div>
                <div className="button-box">
                    <Button color='inherit' variant='outlined' onClick={handleNewElectionClick}>Criar Eleição</Button>
                </div>
            </div>
        </Modal>
    </div>
}

export default Elections