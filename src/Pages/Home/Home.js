import React from 'react'
import './Home.scss'
import Cards from './Cards'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
// import { Redirect } from 'react-router-dom'
// import Carousels from './Carousels/Carousels'

function Home(props) {
  console.log("....");
  
  console.log(props.category);
  // const category_data =props.category[0]
  
    return (
        <div>
            <Cards />
            {/* <Carousels /> */}
        </div>
    )
}


const mapStateToProps = (state) => {
    // console.log(".....");
    
    // console.log(state);
    
    return {
      category: state.firestore.ordered.category,
    //   auth: state.firebase.auth,
    }
  }
export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
      collection: 'category'
    }])
  )(Home)