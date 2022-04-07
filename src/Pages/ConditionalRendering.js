// 1. if/else
// 2. Element variables
// 3. Ternary conditional operator
// 4. Short corcuit operator

import React, { Component } from 'react'
import FormLogin from './FormLogin'
import FormRegister from './FormRegister'

class ConditionalRendering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        // 1. if-else
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div className='user'>
        //             <div className='user-paragraph'> Welcome </div>
        //             <div className='user-form'>
        //                 <FormLogin />
        //             </div>

        //         </div>
        //     )
        // }
        // else {
        //     return (
        //         <div className='user'>
        //             <div className='user-paragraph'> Welcome </div>
        //             <div className='user-form'>
        //                 <FormRegister />
        //             </div>
        //         </div>
        //     )
        // }

        // 2. Element variables
        let message
        if (this.state.isLoggedIn) {
            return (
                message = <div className='user'>
                    <div className='user-paragraph'> Welcome </div>
                    <div className='user-form'>
                        <FormLogin />
                    </div>

                </div>
            )
        }
        else {
            return (
                message = <div className='user'>
                    <div className='user-paragraph'> Welcome </div>
                    <div className='user-form'>
                        <FormRegister />
                    </div>
                </div>
            )
        }

        return <div>{message}</div>


    }
}

export default ConditionalRendering;