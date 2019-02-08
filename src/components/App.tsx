import * as React from 'react';

import PageInterface from '../PageInterface';

class App extends React.Component<PageInterface, {}> {

    render() {
        return (
            <div>
                <h1>Welcome to React with Typescript</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam dolorem pariatur repellat laudantium quam inventore ab culpa perferendis, iure excepturi! Voluptate eius exercitationem possimus tenetur alias qui animi dignissimos culpa.</p>
                <p>Color of this page is: {this.props.color}</p>
            </div>
        );
    }
}

export default App;