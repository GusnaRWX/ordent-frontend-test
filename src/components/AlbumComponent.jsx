import React from 'react'
import PropTypes from 'prop-types'
import { Base } from './shared'
import AlbumTable from './AlbumTable'

function AlbumComponent ({
    albums,
    users
}) {
    return (
        <Base>
            <AlbumTable
                albums={albums}
                users={users}
            />
        </Base>
    )
}

AlbumComponent.propTypes = {
    albums: PropTypes.array,
    users: PropTypes.array
}

export default AlbumComponent
