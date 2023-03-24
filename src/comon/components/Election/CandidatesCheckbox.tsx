import React, { FC } from 'react'
import { User } from '../../store/user/types'
import { FormControlLabel, Checkbox } from '@mui/material'

interface CandidatesCheckboxProps {
    candidates: User[]
    selectedCandidates: User[]
    onChange: (candidate: User) => void
}

const CandidatesCheckbox: FC<CandidatesCheckboxProps> = ({ 
    candidates, 
    selectedCandidates, 
    onChange 
}: CandidatesCheckboxProps) => {

    return <>
        {
            candidates.map(candidate => (
                <FormControlLabel 
                    key={JSON.stringify(candidate)}
                    label={candidate.name}
                    control={
                        <Checkbox 
                            checked={selectedCandidates.indexOf(candidate) !== -1}
                            onChange={() => onChange(candidate)}
                            name={candidate.name}
                        />
                    }
                />
            ))
        }
    </>
}

export default CandidatesCheckbox