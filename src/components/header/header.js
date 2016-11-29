/**
 * Created by Florentijn Hogerwerf
 */

import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import RefreshIcon from 'material-ui/svg-icons/navigation/refresh';

const styles = {
    appBar: {
        backgroundColor: "#2196F3",
        position: "fixed"
    }
};

type PropsType = {

    /**
     * Function that fetches the ceo dashboard using our api.
     */
    fetchData: () => void
}

/**
 * This is the header displayed at the top of the page.
 *
 * This component also contains the sidebar shown on the left of the screen that opens when the
 * user presses the hamburger button contained in the app bar.
 */
export default (props: PropsType) => (
  <div>
    <AppBar
      style={styles.appBar}
      title="Conservation International's Vital Signs program"
      showMenuIconButton={false}
      iconElementRight={
        <IconButton onTouchTap={props.fetchData}>
            <RefreshIcon />
        </IconButton>
      }
    />
  </div>
);
