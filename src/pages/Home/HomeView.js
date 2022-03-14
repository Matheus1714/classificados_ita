import React from 'react'
import PropTypes from 'prop-types'

const HomeView = () => {
    return (
        <div>
            <h1>Hello Main</h1>
        </div>
    )
}

HomeView.propTypes = {
    title: PropTypes.string.isRequired
}

export default HomeView
