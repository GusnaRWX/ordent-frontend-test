import React, { useEffect } from 'react'
import AlbumComponent from '../components/AlbumComponent'
import { useAppDispatch, useAppSelectors } from '../hooks'
import { getAlbumnRequest } from '../store/reducers/slice/albumSlice'
import { getUserRequest } from '../store/reducers/slice/userSlice'

function AlbumContainer (props) {
    const dispatch = useAppDispatch()
    const albumData = useAppSelectors(state => state.albumn.data)
    const userData = useAppSelectors(state => state.user.data)
    useEffect(() => {
        dispatch({
            type: getAlbumnRequest.toString()
        })
        dispatch({
            type: getUserRequest.toString()
        })
    }, [])
    return (
        <AlbumComponent
            albums={albumData}
            users={userData}
        />
    )
}

AlbumContainer.propTypes = {}

export default AlbumContainer
