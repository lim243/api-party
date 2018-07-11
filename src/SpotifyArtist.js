import React, { Component } from 'react'

class SpotifyArtist extends Component {
    constructor(props) {
        super(props)

        this.state = {
            artist: {}
        }
        this.fetchArtistData()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.username !== this.props.match.params.username) {
          this.fetchArtistData()
        }
      }
    
      fetchArtistData = () => {
        const { username } = this.props.match.params
        fetch(`https://api.spotify.com/v1/artists/${username}`)
          .then(response => response.json())
          .then(artist => this.setState({ artist }))
      }

    render() {
        return(
            <div className="SpotifyArtist">
                <div>{this.state.artist.name}</div>
                <div>Popularity: {this.state.artist.popularity}</div>
            </div>
        )
    }
}

export default SpotifyArtist