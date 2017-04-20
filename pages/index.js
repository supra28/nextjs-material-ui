import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import withMaterial from '../hocs/withMaterial'
import Layout from '../components/Layout'
import Paper from 'material-ui/Paper';

const style={padding:'10px',margin:'5px'}
const index = () => (
  <Layout title="Doctor's Dashboard">
  <Paper style={style}>Welcome to this state-of-the-art Enterprise grade Web App!
    <br/>
    <RaisedButton label="Start" primary  style={{ margin: 12 }} />
  </Paper>
  </Layout>
)

export default withMaterial(index);