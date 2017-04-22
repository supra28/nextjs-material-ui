import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import withMaterial from '../hocs/withMaterial'
import AppLayout from '../components/AppLayout'
import Paper from 'material-ui/Paper';

function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
}




const style={padding:'10px'}
const index = () => (
  <AppLayout>
  <Paper style={style}>Welcome to this state-of-the-art Enterprise grade Web App!
    <br/>
    <RaisedButton label="Start" primary  style={{ margin: 12 }} onTouchTap={toggleFullScreen}/>
  </Paper>
  </AppLayout>
)

export default withMaterial(index);