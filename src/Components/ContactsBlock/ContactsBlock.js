import React from "react";
import PropTypes from "prop-types";

import Avatar from '@material-ui/core/Avatar';
import davit from "../../assets/images/contacts/davit.jpg";
import yervand from "../../assets/images/contacts/yervand.jpg";
import sose from "../../assets/images/contacts/sose.jpg";

const avatars = [sose, yervand, davit];

function ContactsBlock ({ classes }) {
  return (
    <div className={classes.container}>
      {avatars.map(avatar => (
        <div className={classes.avatar} key={avatar}>
          <Avatar src={avatar} alt="avatar" key={avatar} />
          <div className={classes.description}>
            some information, linkedin, github links
          </div>
        </div>
      ))}
    </div>
  )
}

ContactsBlock.propTypes = {
  classes: PropTypes.object.isRequired
}

export default ContactsBlock;