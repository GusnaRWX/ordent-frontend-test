import React, { useState } from 'react'
import PropTypes from 'prop-types'
import PhotoModalComponent from './PhotoModalComponent'

function PhotoItemComponent ({
    imgUrl,
    title
}) {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <>
            <div
                className='h-60 w-60 p-2 cursor-pointer border bg-gray-400 rounded-md hover:opacity-25'
                style={{
                    backgroundImage: `url(${imgUrl})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain'
                }}
                onClick={() => { handleOpen() }}
            >
                <p>{title}</p>
            </div>
            <PhotoModalComponent
                open={open}
                onClose={handleClose}
                imgUrl={imgUrl}
                title={title}
            />
        </>
    )
}

PhotoItemComponent.propTypes = {
    imgUrl: PropTypes.string,
    title: PropTypes.string
}

export default PhotoItemComponent
