import React from 'react';

//redux
import { connect } from 'react-redux';

//redux's actions
import { updateCollections } from '../../redux/shop/shop.action';

//router
import { Route } from 'react-router-dom';

//components
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';

//pages
import CollectionPage from '../collection/collection.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    state = {
        loading:true
    }

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        // fetch('https://firestore.googleapis.com/v1/projects/crwn-db-3ae03/databases/(default)/documents/collections')
        // .then(response => response.json)
        
        collectionRef.get().then(
            (snapshot) => {
                const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
                updateCollections(collectionsMap);
                this.setState({ loading:false });
            }
        )
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;

        return (
            <div className="shop-page">
    
                <Route 
                    exact 
                    path={`${match.path}/`} 
                    render={ (props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} /> }
                />
                <Route 
                    path={`${match.path}/:collectionId`} 
                    render={ (props) => <CollectionPageWithSpinner isLoading={loading} {...props} /> }
                />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);