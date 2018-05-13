import React from 'react'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

import Header from './Header/Header'
import Loader from './Loader/Loader'

import ModalsContainer from '../containers/ModalsContainer'
import User from '../instances/user'


class Root extends React.Component {

    componentWillMount() {
        if(!(localStorage['redux-store'])) {
            User.getData()
            .then(data => this.props.addWallet(data))
    
            User.getTransactions()
                .then(data => this.props.getHistory(data))
                
            setTimeout(() => {
                this.props.updateLoader()
            }, 4000)
        }
    }
    
    render() {
        const { history, children, store, loader } = this.props
        return(
            <Provider store={store}>
                <ConnectedRouter history={history}>
                { loader === true ? 
                    <Loader /> 
                        :
                    <main className="main" id="main">
                        <Header />
                        { children }
                        <ModalsContainer />
                    </main> 
                }
                </ConnectedRouter>
            </Provider>
        )
    }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
}

export default Root