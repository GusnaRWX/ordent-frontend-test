import React, { useEffect } from 'react'
import PhotoComponent from '../components/photo/PhotoComponent'
import { useAppDispatch, useAppSelectors } from '../hooks'
import { getPhotoRequest } from '../store/reducers/slice/photoSlice'
import { useLocation } from 'react-router-dom'

function PhotoContainer (props) {
    const dispatch = useAppDispatch()
    const photoData = useAppSelectors(state => state.photo.data)
    const location = useLocation()

    useEffect(() => {
        dispatch({
            type: getPhotoRequest.toString(),
            payload: location?.state?.albumId
        })
    }, [])

    return (
        <PhotoComponent
            photos={photoData}
            title={location?.state?.title}
        />
    )
}

PhotoContainer.propTypes = {}

export default PhotoContainer
