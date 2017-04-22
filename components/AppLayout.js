import React from 'react';
import { List, ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Header from './Header';
import NoSSR from 'react-no-ssr';
import MediaQuery from 'react-responsive';
var classNames = require('classnames');

const style = { margin: 5 };

class MyDrawer extends React.Component {
  state = {
    open: this.props.docked ? true : this.props.open,
    docked: this.props.docked
  };

  componentDidMount() {
    if (this.state.docked) {
      this.props.setContentState(this.state.open, this.state.docked);
    }
  }
  componentWillReceiveProps(newProps) {
    if (
      this.state.open !== newProps.open || this.state.docked !== newProps.docked
    ) {
      this.setState(
        {
          open: newProps.docked != this.state.docked && newProps.docked
            ? true
            : newProps.open,
          docked: newProps.docked
        },
        () => {
          this.props.setContentState(this.state.open, this.state.docked);
        }
      );
    }
  }
  render() {
    const isdocked = this.state.docked;
    return (
      <Drawer
        zDepth={1}
        docked={this.state.docked}
        open={this.state.open}
        onRequestChange={open => this.props.onRequestChange(open, isdocked)}
      >
        <List>
          <Subheader>Nested List Items</Subheader>
          <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
          <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
          <ListItem
            primaryText="Inbox"
            leftIcon={<ContentInbox />}
            initiallyOpen={true}
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem
                key={1}
                primaryText="Starred"
                leftIcon={<ActionGrade />}
              />,
              <ListItem
                key={2}
                primaryText="Sent Mail"
                leftIcon={<ContentSend />}
                disabled={true}
                nestedItems={[
                  <ListItem
                    key={1}
                    primaryText="Drafts"
                    leftIcon={<ContentDrafts />}
                  />
                ]}
              />,
              <ListItem
                key={3}
                primaryText="Inbox"
                leftIcon={<ContentInbox />}
                nestedItems={[
                  <ListItem
                    key={1}
                    primaryText="Drafts"
                    leftIcon={<ContentDrafts />}
                  />
                ]}
              />
            ]}
          />
        </List>
      </Drawer>
    );
  }
}

export default class MyComponent extends React.Component {
  state = { open: false, withWidth: false };

  handleToggle = () => {
    this.setState({ open: !this.state.open });
  };

  handleClose = () => {
    this.setState({ open: true });
  };

  setContentState = (open, docked) => {
    if (open && docked) {
      this.setState({ withWidth: true, open: open });
    } else if (!open && docked) {
      this.setState({ withWidth: false, open: open });
    } else if (!docked) {
      this.setState({ withWidth: false });
    }
  };

  handleRequestChange = (open, docked) => {
    this.setState({ open }, () => {
      this.setContentState(open, docked);
    });
  };

  render() {
    return (
      <div>
        <Header />
        <AppBar
          className={classNames('app-bar', { expanded: this.state.withWidth })}
          style={{
            height: 60,
            top: 0,
            position: 'fixed'
          }}
          onLeftIconButtonTouchTap={this.handleToggle}
          title="YoLo"
          iconElementRight={
            <Avatar size={30} style={style}>
              A
            </Avatar>
          }
        />
        <style>
          {
            `
                .app-bar{
                -moz-transition: left 218ms cubic-bezier(0.4, 0, 0.2, 1);
                -o-transition: left 218ms cubic-bezier(0.4, 0, 0.2, 1);
                -webkit-transition: left 218ms cubic-bezier(0.4, 0, 0.2, 1);
                transition: left 218ms cubic-bezier(0.4, 0, 0.2, 1);
                left: 0;
                width: auto !important;
                right: 0 !important;
                position: fixed !important;
                }
                .app-content{
                -moz-transition: padding-left 218ms cubic-bezier(0.4, 0, 0.2, 1);
                -o-transition: padding-left 218ms cubic-bezier(0.4, 0, 0.2, 1);
                -webkit-transition: padding-left 218ms cubic-bezier(0.4, 0, 0.2, 1);
                transition: padding-left 218ms cubic-bezier(0.4, 0, 0.2, 1);
                padding-right: 10px !important;
                padding-left: 5px;
                padding-top: 68px !important;
                }
                .app-bar.expanded{
                left: 255px;
                }

                .app-content.expanded{
                padding-left: 260px;
                }

                `
          }
        </style>
        <NoSSR onSSR={null}>

          <MediaQuery maxWidth={768}>
            {matches => {
              if (matches) {
                return (
                  <MyDrawer
                    open={this.state.open}
                    docked={false}
                    setContentState={this.setContentState}
                    onRequestChange={this.handleRequestChange}
                  />
                );
              } else {
                return (
                  <MyDrawer
                    setContentState={this.setContentState}
                    open={this.state.open}
                    onRequestChange={this.handleRequestChange}
                    docked={true}
                  />
                );
              }
            }}

          </MediaQuery>
        </NoSSR>
        <div
          className={classNames('app-content', {
            expanded: this.state.withWidth
          })}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}
