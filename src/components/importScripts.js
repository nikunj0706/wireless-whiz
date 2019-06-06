import React, { Component } from 'react';
import loadScript from 'simple-load-script';
import $ from 'jquery';

class ImportScripts extends Component {
  componentDidMount() {
    window.$ = $;
    window.jQuery = $;
    import('popper.js');
      import('bootstrap');
      import('owl.carousel');
      loadScript('/js/waypoints.min.js');
      import('wowjs')
      loadScript('/js/jquery.counterup.min.js');
      loadScript('/js/jquery.magnific.popup.js');
      loadScript('/js/smoothscroll.js');
      setTimeout(function(){
        loadScript('/js/main.js');
      },400);
     
  }

  render() {
    return <script />;
  }
}
export default ImportScripts;
