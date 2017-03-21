import React from 'react';
import mapProps from 'recompose/mapProps';
import classNames from 'classnames';

/*
 * Usage:
 * const Button = () => (<button></button>);
 *
 * const ButtonWithStyles = configureStyles([StyleObject])
 *
 */

/*
 * Style Object
 *
 * {
 *   _className: 'private class name',
 *   clasName?: 'appended class name', // that's if you still want to use the default styles
 *   style?: {...style object},
 *   children?: [StyleObject...],
 * }
 */

const decorateWithStyle = (Comp, styleObject) => (<Comp />);

const configureStyles = (styles) => mapProps((props) => (
  props
));


export default configureStyles;
