import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsFroPreview } from '../../Redux/Selectors/shop.selectors'
import CollectionPreview from '../Collection/Preview/collectionpreview'

import './collection-overview.scss'

const CollectionOverview = ({ collections }) => {
    return (
        <div className="collections-overview">
            {collections.map(({ id, ...otherShopitems }) => (
                <CollectionPreview key={id} {...otherShopitems} />
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
    collections: selectCollectionsFroPreview
  })

export default connect(mapStateToProps)(CollectionOverview)
