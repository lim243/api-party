import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import SpotifyArtist from './SpotifyArtist';

class Spotify extends Component {
    state = {
        username: '',
    }

    handleChange = ev => {
        this.setState({ username: ev.target.value })
    }

    handleSubmit = ev => {
        ev.preventDefault()
        this.props.history.push(`/spotify/${this.state.username}`)
    }

    render() {
        return(
            <div className="Spotify">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                        required
                        autoFocus
                        type="text"
                        value={this.state.username}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">
                            Look up Spotify Artist 
                        </button>
                        
                    </div>
                    <div>USE this code : 2BTZIqw0ntH9MvilQ3ewNY</div>
                </form>

                <Route
                    path="/spotify/:username"
                    component={SpotifyArtist}
                />

            </div>
        )
    }
}

export default Spotify