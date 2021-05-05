import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import contactPage from "./pages/contact/contact.component";
import Header from "./components/header/header.component";

// import { auth, createUserProfileDocument, addCollectionsAndDocument } from './firebase/firebase.utils';
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
// import { selectCollectionsForPreview } from './redux/shop/shop.selectors'
class App extends Component {
    unsubscribeFromAuth = null;
    /**
     * First step: using "auth" library => and we said whatever "onAuthStateChanged" we want to pass the userAuth object and
     * will listen for all of the userAuth objects that "onAuthStateChanged" provide/give us.  That userAuth is stored
     * from the authentication. They all have the user UID and UID would be passed into "createUserProfileDocument" method.
     * Inside that method, we would use the auth object to query our database for a document reference by using firestore.doc(....)
     * Then we want to give the snapShot object by applying "const snapShot = the result from  firestore.doc(...) to check the existence of account =
     * And then the condition of account whether exist or not to login/ create account
     */
    componentDidMount() {
        // const { setCurrentUser, collectionsArray } = this.props;
        const { setCurrentUser } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot((snapShot) => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data(),
                    });
                });
            }

            setCurrentUser(userAuth);

            // addCollectionsAndDocument('collections', collectionsArray.map(({ title, items }) => ({ title, items })))
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route exact path='/checkout' component={CheckoutPage} />
                    <Route
                        exact
                        path='/signin'
                        render={() =>
                            this.props.currentUser ? (
                                <Redirect to='/' />
                            ) : (
                                <SignInAndSignUpPage />
                            )
                        }
                    />
                    <Route exact path='/contact' component={contactPage} />

                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
