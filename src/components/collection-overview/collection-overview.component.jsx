import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//redux's selectors
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

//scss
import './collection-overview.styles.scss';

// components
import PreviewCollection from '../../components/preview-collection/preview-collection.component';

const CollectionOverview = ({ collections }) => (
    <div className='collections-overview'>
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

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);