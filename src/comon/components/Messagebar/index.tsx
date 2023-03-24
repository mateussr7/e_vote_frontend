import {  useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { hideMessage } from '../../store/message/actions'
import { getMessageSelector } from '../../store/message/selectors'

const MessageBar = () => {

    const dispatch = useDispatch()

    const { message, isVisible, type } = useSelector(getMessageSelector)

    useEffect(() => {
        const timer = setTimeout(() => {
            if(isVisible){
                dispatch(hideMessage())
            }
          }, 5000);
      
          return () => {
            clearTimeout(timer);
          };
    }, [isVisible, dispatch])

    const color = useMemo(() => {
        switch(type) {
            case 'success':{
                return '#0d9b00'
            }
            case 'warning': {
                return '#ff9900'
            }
            case 'error': {
                return '#ff0000'
            }
        }
    }, [type])


    return <div
        style={{
            position: 'absolute',
            bottom: isVisible ? 20 : '-100px',
            left: 500,
            right: 500,
            backgroundColor: color,
            color: '#fff',
            padding: '10px',
            textAlign: 'center',
            transition: 'bottom 0.5s ease-in-out',
            borderRadius: '5px',
            fontWeight: 'bold'
        }}
    >
        {message}
    </div>
}

export default MessageBar