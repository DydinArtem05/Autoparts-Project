import React, { Component } from "react";
import ProductPage from "../components/Product/ProductPage";
import { connect, useSelector } from "react-redux";
import Paginator from "../components/Paginator/Paginator";
import { setCurrentPageAC } from "../reducers/AppReducer";

// class ProductPageContainer extends Component {
//     render() {
//         return (
//             <>
//                 <ProductPage products={this.props.products} />
//                 <Paginator  productsAmount={this.props.productsAmount}
//                     currentPage={this.props.currentPage} productsPageAmount={this.props.productsPageAmount} setCurrentPage={this.props.setCurrentPage} />
//             </>
//         )
//     }
// }

// const mapStateToProps = (state) => ({
//         products: state.products,
//         currentPage: state.currentPage,
//         productsPageAmount: state.productsPageAmount,
//         productsAmount: state.products?.length
// });

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ProductPageContainer);


export default function ProductPageContainer () {
      
    const props = useSelector(s => s.AppReducer)
            return (
                <>
                    <ProductPage products={props.products} />
                    <Paginator  productsAmount={props.productsAmount}
                        currentPage={props.currentPage} productsPageAmount={props.productsPageAmount} setCurrentPage={props.setCurrentPage} />
                </>
            )
        
    }
    
