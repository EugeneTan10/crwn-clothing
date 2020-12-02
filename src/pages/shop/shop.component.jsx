import React, { Component } from 'react';

// data
import SHOP_DATA from './shop.data.js';

// components
import PreviewCollection from '../../components/preview-collection/preview-collection.component';

class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
        
        const {collections} = this.state;

        return(
            <div className="shop-page">
                {
                    collections.map(({id, ...otherSectionProps }) => (
                        <PreviewCollection 
                            key={id}
                            {...otherSectionProps}
                        />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;