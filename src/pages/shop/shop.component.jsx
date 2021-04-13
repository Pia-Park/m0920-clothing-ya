import React, {useState, useEffect} from 'react'

import SHOP_DATA from './shop.data'

import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const ShopPage = () => {

    const [collections, setCollections] = useState([])

    useEffect(() => {
        setCollections(SHOP_DATA)
    }, [])

    return(
        <div className="shop-page">
            {
                collections && collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
}



// class ShopPage extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             collections: SHOP_DATA,
//         }
//     }
//     render(){
//         const {collection}
//     }
// }


export default ShopPage