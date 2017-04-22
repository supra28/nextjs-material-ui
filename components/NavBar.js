import React from "react"
import AppBar from "material-ui/AppBar"
import Avatar from "material-ui/Avatar"
var classNames = require('classnames');

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const appBarStyle = {zIndex: 99}

const style = { margin: 5 }
const AppBarExampleIcon = () => (
            <AppBar
            className={classNames('app-bar', {'expanded': true})}
            onLeftIconButtonTouchTap={this.handleToggle}
            title="How long have you been alive?"
            iconElementRight={
                 <Avatar size={40} style={style}>
                    A
                </Avatar>
            }
            />
)

export default AppBarExampleIcon
