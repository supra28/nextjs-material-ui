import React from "react"
import AppBar from "material-ui/AppBar"
import Avatar from "material-ui/Avatar"
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const appBarStyle = {zIndex: 99}
const style = { margin: 5 }
const AppBarExampleIcon = () => (
  <AppBar
    style={appBarStyle}
    title="Dashboard"
    iconElementRight={
      <Avatar size={40} style={style}>
        A
      </Avatar>
    }
  />
)

export default AppBarExampleIcon
