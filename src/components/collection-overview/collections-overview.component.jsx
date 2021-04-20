import React from 'react' 
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { CollectionsOverviewContainer } from './collections-overviews.style'

import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector'

const CollectionOverview = ({ collectionsProps }) => {
    console.log(collectionsProps);

    return (
    <CollectionsOverviewContainer>
    {
        collectionsProps && collectionsProps.map(({ id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))
    }
    </CollectionsOverviewContainer>

)}

// const mapStateToProps = state => {
//     console.log(state);
//     return ({
//     collectionsProps: Object.keys(state.shop.collections).map(key => state.shop.collections[key])
// })}

const mapStateToProps = createStructuredSelector({
    collectionsProps: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionOverview) 