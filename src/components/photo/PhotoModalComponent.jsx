import React from 'react'
import PropTypes from 'prop-types'
import Modal from '../shared/Modal'

function PhotoModalComponent ({
    imgUrl,
    title,
    open,
    onClose
}) {
    return (
        <Modal
            open={open}
            clickAway={true}
            onClose={onClose}
        >
            <div className='flex flex-col justify-center items-center gap-4'>
                <h1 className='text-teal-700 text-2xl text-center font-bold'>{title}</h1>
                <div
                    className='h-80 w-80 p-2 border rounded-md '
                    style={{
                        backgroundImage: `url(${imgUrl})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain'
                    }}
                ></div>
                <button
                    className='text-white bg-teal-500 hover:bg-teal-700 focus:ring-4
                focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2
                dark:bg-teal-600 dark:hover:bg-teal-600 focus:outline-none dark:focus:ring-teal-700'
                    type='button'
                    onClick={onClose}>Close</button>
            </div>
        </Modal>
    )
}

PhotoModalComponent.propTypes = {
    imgUrl: PropTypes.string,
    title: PropTypes.string,
    open: PropTypes.bool,
    onClose: PropTypes.func
}

export default PhotoModalComponent
