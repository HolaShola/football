// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
// import CustomForm from './Form.jsx';
// import * as actions from '../actions/auth';
// import BaseRouter from './routes';

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             articles: []
//         };
//     }
    
//     componentDidMount() {
//         this.props.onTryAutoSignup();
//     }

//     render() {
//         return (
//             <div>
//                 <BrowserRouter>
//                     <CustomForm {...this.props} >
//                         <BaseRouter />
//                     </CustomForm>
//                 </BrowserRouter>
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => {
//     return {
//         isAuth: state.token != null
//     }
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         onTryAutoSignup: () => dispatch(actions.authCheckState())
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import CreateAccountPage from './CreateAccountPage';

const App = () => (
  <div>
    <Route exact path="/" component={HomePage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/account" component={CreateAccountPage} />
  </div>
);

export default App;